export const API_URL = `${import.meta.env.VITE_BASE_URL}`;

export const COOKIE_CONFIG = {
  httpOnly: false,
  secure: true,
  sameSite: 'Strict' as const,
} as const;
