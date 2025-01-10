import { useRef, useState, useEffect } from 'react';
import { useApplicationConfigStore } from '@/store/applicationConfigStore';
import { ChevronDown } from 'lucide-react';
import trFlag from '@/assets/flags/tr.svg';
import enFlag from '@/assets/flags/en.svg';
import { useTranslation } from 'react-i18next';

interface Localization {
  locale: string;
  flag: string;
}

const localizations: Localization[] = [
  {
    locale: 'tr',
    flag: trFlag,
  },
  {
    locale: 'en',
    flag: enFlag,
  },
];

const LanguageSelector = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const { language, toggleLanguage } = useApplicationConfigStore();
  const { t } = useTranslation();

  const currentLocalization = localizations.find(
    (localization) => localization.locale === language,
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

  const handleLanguageChange = (locale: string) => {
    toggleLanguage(locale);
    setIsOpen(false);
  };

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        className="flex items-center gap-2 rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm font-medium text-gray-700 shadow-sm transition-all hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-200 dark:hover:bg-gray-700"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        aria-haspopup="true"
        aria-label="Select language"
      >
        <img
          src={currentLocalization?.flag}
          alt={`${currentLocalization?.locale} flag`}
          className="h-3 w-5 object-cover"
        />
        <span className="capitalize">
          {t(currentLocalization?.locale || '')}
        </span>
        <ChevronDown
          className={`h-4 w-4 transition-transform duration-200 ${
            isOpen ? 'rotate-180' : ''
          }`}
        />
      </button>

      {isOpen && (
        <div className="absolute left-0 mt-2 min-w-[120px] origin-top-left rounded-lg border border-gray-200 bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 transition-all dark:border-gray-700 dark:bg-gray-800">
          {localizations.map((localization) => (
            <button
              key={localization.locale}
              onClick={() => handleLanguageChange(localization.locale)}
              className={`flex w-full items-center gap-2 px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-700 ${
                localization.locale === language
                  ? 'bg-gray-50 dark:bg-gray-700'
                  : ''
              }`}
              aria-current={localization.locale === language ? 'true' : 'false'}
            >
              <img
                src={localization.flag}
                alt={`${localization.locale} flag`}
                className="h-3 w-5 object-cover"
              />
              <span className="capitalize">{t(localization.locale)}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default LanguageSelector;
