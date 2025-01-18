// AxiosService.ts
import axios, { AxiosError, AxiosInstance, AxiosRequestConfig } from 'axios';

import { API_URL } from '../config/constants';
import { ApiError, AuthResponse, ErrorResponse } from '../types/auth.types';

import { CookieService } from './cookie.utils';


class AxiosService {
  private static instance: AxiosService;
  public classic: AxiosInstance;
  public auth: AxiosInstance;

  private constructor() {
    const options: AxiosRequestConfig = {
      baseURL: API_URL,
      headers: {
        'Content-Type': 'application/json',
      },
    };

    this.classic = axios.create(options);
    this.auth = axios.create(options);

    // Setup interceptors for the "auth" instance
    this.setupInterceptors();
  }

  public static getInstance(): AxiosService {
    if (!AxiosService.instance) {
      AxiosService.instance = new AxiosService();
    }
    return AxiosService.instance;
  }

  private setupInterceptors(): void {
    // ──────────────────────────────────────────────────────────────────────────
    // REQUEST Interceptor
    // ──────────────────────────────────────────────────────────────────────────
    this.auth.interceptors.request.use((config) => {
      const accessToken = CookieService.getAccessToken();
      console.log("my access token", accessToken)
      if (accessToken && config.headers) {
        config.headers.Authorization = `Bearer ${accessToken}`;
      }
      return config;
    });

    // ──────────────────────────────────────────────────────────────────────────
    // RESPONSE Interceptor
    // ──────────────────────────────────────────────────────────────────────────
    this.auth.interceptors.response.use(
      (response) => response,
      async (error: AxiosError) => {
        // If we get a 401, try to refresh
        if (error.response?.status === 401) {
          try {
            const refreshToken = CookieService.getRefreshToken();
            if (!refreshToken) {
              // If there's no refresh token, we can't do anything
              // Possibly redirect to login or throw an error
              throw this.handleError(error as AxiosError<ErrorResponse>);
            }

            // Attempt to refresh token
            const { data } = await this.classic.post<AuthResponse>(
              '/auth/refresh', // Your refresh endpoint
              { refreshToken },
            );

            // Store the new tokens
            CookieService.setAccessToken(data.accessToken);
            CookieService.setRefreshToken(data.refreshToken || refreshToken);

            // Retry the original request with the new token
            if (error.config && error.config.headers) {
              error.config.headers.Authorization = `Bearer ${data.accessToken}`;
              return this.auth.request(error.config);
            }
          } catch (refreshError) {
            // If refresh also fails, handle or throw
            CookieService.clearAll(); // remove tokens & user profile
            throw this.handleError(refreshError as AxiosError<ErrorResponse>);
          }
        }

        // For other errors, just handle as normal
        throw this.handleError(error as AxiosError<ErrorResponse>);
      },
    );
  }

  private handleError(error: AxiosError<ErrorResponse>): ApiError {
    return {
      message: error.response?.data?.message || 'An error occurred',
      status: error.response?.status,
    };
  }
}

export const axiosService = AxiosService.getInstance();
