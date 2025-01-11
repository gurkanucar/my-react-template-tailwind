import { create } from 'zustand';
import { persist } from 'zustand/middleware';

import i18n from '@/i18n';

export type ThemeMode = 'light' | 'dark' | 'system';

interface IAppConfStore {
  themeMode: ThemeMode;
  language: string;
  toggleLanguage: (l: string) => void;
  toggleThemeMode: (m: ThemeMode) => void;
  initializeTheme: () => void;
  isAuthenticated: boolean;
  login: () => void;
  logout: () => void;
}

export const useApplicationConfigStore = create<IAppConfStore>()(
  persist(
    (set, get) => ({
      themeMode: 'light',
      language: 'en',

      toggleLanguage: (value: string) => {
        i18n.changeLanguage(value);
        set({
          language: value,
        });
      },
      toggleThemeMode: (value: ThemeMode) => {
        if (value === 'system') {
          const systemPrefersDark = window.matchMedia(
            '(prefers-color-scheme: dark)',
          ).matches;
          document.documentElement.classList.toggle('dark', systemPrefersDark);
        } else {
          document.documentElement.classList.toggle('dark', value === 'dark');
        }

        set({ themeMode: value });
      },
      initializeTheme: () => {
        const { themeMode, language } = get();

        if (themeMode === 'system') {
          const systemPrefersDark = window.matchMedia(
            '(prefers-color-scheme: dark)',
          ).matches;
          document.documentElement.classList.toggle('dark', systemPrefersDark);
        } else {
          document.documentElement.classList.toggle(
            'dark',
            themeMode === 'dark',
          );
        }

        const defaultLanguage = language || 'en';
        i18n.changeLanguage(defaultLanguage);
        set({ language: defaultLanguage });
      },
      isAuthenticated: false,
      login: () => set({ isAuthenticated: true }),
      logout: () => set({ isAuthenticated: false }),
    }),
    {
      name: 'applicationConfig',
    },
  ),
);
