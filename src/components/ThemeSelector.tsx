import { useRef, useState, useEffect } from 'react';
import { ChevronDown, Sun, Moon, Monitor } from 'lucide-react';
import { useTranslation } from 'react-i18next';

import { useApplicationConfigStore, ThemeMode } from '@/store/applicationConfigStore';

interface ThemeOption {
  mode: ThemeMode;
  icon: typeof Sun;
  label: string;
}

const themeOptions: ThemeOption[] = [
  {
    mode: 'light',
    icon: Sun,
    label: 'light',
  },
  {
    mode: 'dark',
    icon: Moon,
    label: 'dark',
  },
  {
    mode: 'system',
    icon: Monitor,
    label: 'system',
  },
];

const ThemeSelector = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const { themeMode, toggleThemeMode } = useApplicationConfigStore();
  const { t } = useTranslation();

  const currentTheme = themeOptions.find(
    (option) => option.mode === themeMode,
  );

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleThemeChange = (mode: ThemeMode) => {
    toggleThemeMode(mode);
    setIsOpen(false);
  };

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        className="flex items-center gap-2 rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm font-medium text-gray-700 shadow-sm transition-all hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-200 dark:hover:bg-gray-700"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        aria-haspopup="true"
        aria-label="Select theme"
      >
        {currentTheme && (
          <>
            <currentTheme.icon className="h-4 w-4" />
            <span className="capitalize">
              {t(currentTheme.label)}
            </span>
          </>
        )}
        <ChevronDown
          className={`h-4 w-4 transition-transform duration-200 ${
            isOpen ? 'rotate-180' : ''
          }`}
        />
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 min-w-[120px] origin-top-right rounded-lg border border-gray-200 bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 transition-all dark:border-gray-700 dark:bg-gray-800">
          {themeOptions.map((option) => (
            <button
              key={option.mode}
              onClick={() => handleThemeChange(option.mode)}
              className={`flex w-full items-center gap-2 px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-700 ${
                option.mode === themeMode
                  ? 'bg-gray-50 dark:bg-gray-700'
                  : ''
              }`}
              aria-current={option.mode === themeMode ? 'true' : 'false'}
            >
              <option.icon className="h-4 w-4" />
              <span className="capitalize">{t(option.label)}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default ThemeSelector; 