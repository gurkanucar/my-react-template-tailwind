import i18n from '@/i18n';
import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export type ThemeMode = 'light' | 'dark' | 'system';

interface IAppConfStore {
  themeMode: ThemeMode;
  language: string;
  toggleLanguage: (l: string) => void;
  toggleThemeMode: (m: ThemeMode) => void;
  initializeTheme: () => void;
}

export const useApplicationConfigStore = create<IAppConfStore>()(
  persist(
    (set, get) => ({
      themeMode: 'light',
      language: 'en',

      toggleLanguage: (value: string) => {
        i18n.changeLanguage(value); // Update i18next language
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

        // Initialize theme
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

        // Initialize language (default to 'en' if not set)
        const defaultLanguage = language || 'en';
        i18n.changeLanguage(defaultLanguage);
        set({ language: defaultLanguage }); // Ensure it's stored in the state
      },
    }),
    {
      name: 'applicationConfig', // Persist the state under this key
    },
  ),
);
