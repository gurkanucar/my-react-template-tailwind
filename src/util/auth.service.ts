import { AuthResponse, Credentials } from '@/types/auth.types';

import { axiosService } from './axios.service';
import { CookieService } from './cookie.utils';

export class AuthService {
  static async login(credentials: Credentials): Promise<AuthResponse> {
    try {
      const { data } = await axiosService.classic.post<AuthResponse>(
        '/auth/login',
        credentials,
      );

      CookieService.setAccessToken(data.accessToken);
      CookieService.setRefreshToken(data.refreshToken);

      return data;
    } catch (error) {
      console.error(error);
      throw new Error('Login failed');
    }
  }

  static logout(): void {
    CookieService.clearTokens();
  }
}
