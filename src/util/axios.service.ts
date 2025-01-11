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
    this.setupInterceptors();
  }

  public static getInstance(): AxiosService {
    if (!AxiosService.instance) {
      AxiosService.instance = new AxiosService();
    }
    return AxiosService.instance;
  }

  private setupInterceptors(): void {
    // Request Interceptor
    this.auth.interceptors.request.use((config) => {
      const accessToken = CookieService.getAccessToken();
      if (config.headers && accessToken) {
        config.headers.Authorization = `Bearer ${accessToken}`;
      }
      return config;
    });

    // Response Interceptor
    this.auth.interceptors.response.use(
      (response) => response,
      async (error: AxiosError) => {
        if (error.response?.status === 401) {
          try {
            const { data } =
              await this.classic.post<AuthResponse>('/auth/refresh');
            CookieService.setAccessToken(data.accessToken);

            if (error.config) {
              error.config.headers.Authorization = `Bearer ${data.accessToken}`;
              return this.auth.request(error.config);
            }
          } catch (refreshError) {
            throw this.handleError(refreshError as AxiosError<ErrorResponse>);
          }
        }
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
