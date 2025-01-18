export const API_URL = import.meta.env.VITE_BASE_URL as string;

export const COOKIE_CONFIG = {
  secure: true,
  sameSite: 'Strict' as const,
} as const;
