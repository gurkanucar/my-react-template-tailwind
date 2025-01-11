import Cookies from 'js-cookie';

import { COOKIE_CONFIG } from '@/config/constants';

export class CookieService {
  static setAccessToken(token: string): void {
    Cookies.set('accessToken', token, {
      ...COOKIE_CONFIG,
      expires: 1, // 1 day
    });
  }

  static setRefreshToken(token: string): void {
    Cookies.set('refreshToken', token, {
      ...COOKIE_CONFIG,
      expires: 7, // 7 days
    });
  }

  static getAccessToken(): string | undefined {
    return Cookies.get('accessToken');
  }

  static clearTokens(): void {
    Cookies.remove('accessToken');
    Cookies.remove('refreshToken');
  }
}
