// CookieService.ts
import Cookies from 'js-cookie';

import { COOKIE_CONFIG } from '@/config/constants';

interface UserProfile {
  name?: string;
  sub?: string;
  given_name?: string;
  family_name?: string;
  email?: string;
  preferred_username?: string;
  // [key: string]: any;
}

export class CookieService {
  static setAccessToken(token: string) {
    Cookies.set('access_token', token, {
      secure: COOKIE_CONFIG.secure,
      sameSite: COOKIE_CONFIG.sameSite,
      // You can add `expires` if you want to control how long the cookie stays
      // e.g. expires: 1 // 1 day
      expires: 1,
    });
  }

  static getAccessToken(): string | undefined {
    return Cookies.get('access_token');
  }

  static removeAccessToken() {
    Cookies.remove('access_token');
  }

  static setRefreshToken(token: string) {
    Cookies.set('refresh_token', token, {
      secure: COOKIE_CONFIG.secure,
      sameSite: COOKIE_CONFIG.sameSite,
      expires: 1,
    });
  }

  static getRefreshToken(): string | undefined {
    return Cookies.get('refresh_token');
  }

  static removeRefreshToken() {
    Cookies.remove('refresh_token');
  }

  // ─────────────────────────────────────────────────────────────────────────────
  // User Profile
  // ─────────────────────────────────────────────────────────────────────────────
  static setUserProfile(profile: UserProfile) {
    Cookies.set('user_profile', JSON.stringify(profile), {
      secure: COOKIE_CONFIG.secure,
      sameSite: COOKIE_CONFIG.sameSite,
    });
  }

  static getUserProfile(): UserProfile | null {
    const profile = Cookies.get('user_profile');
    return profile ? JSON.parse(profile) : null;
  }

  static removeUserProfile() {
    Cookies.remove('user_profile');
  }

  // ─────────────────────────────────────────────────────────────────────────────
  // Remove all
  // ─────────────────────────────────────────────────────────────────────────────
  static clearAll() {
    CookieService.removeAccessToken();
    CookieService.removeRefreshToken();
    CookieService.removeUserProfile();
  }
}
