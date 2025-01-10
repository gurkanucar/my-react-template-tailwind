import { useEffect } from 'react';

import { useApplicationConfigStore } from '@/store/applicationConfigStore';

export const useInitializeAppConfig = () => {
  const initializeTheme = useApplicationConfigStore(
    (state) => state.initializeTheme,
  );
  const language = useApplicationConfigStore((state) => state.language);

  useEffect(() => {
    initializeTheme();

    const defaultLanguage = language || 'en';
    useApplicationConfigStore.getState().toggleLanguage(defaultLanguage);
  }, [initializeTheme, language]);
};
