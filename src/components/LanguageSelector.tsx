import React from 'react';
import { useApplicationConfigStore } from '@/store/applicationConfigStore';

const localizations = [
  {
    locale: 'tr',
    flag: '/assets/flags/tr.svg',
  },
  {
    locale: 'en',
    flag: '/assets/flags/en.svg',
  },
];

const LanguageSelector = () => {
  const { language, toggleLanguage } = useApplicationConfigStore();
  const currentLocalization = localizations.find(
    (localization) => localization.locale === language,
  );

  return (
    <div className="relative">
      {/* Current Language Display */}
      <button className="flex items-center px-4 py-2 bg-white border border-gray-300 rounded-lg shadow-md hover:bg-gray-100 transition">
        <img
          src={currentLocalization?.flag}
          alt={currentLocalization?.locale}
          className="w-6 h-6 rounded-full mr-2"
        />
        <span className="text-gray-700 font-medium capitalize">
          {currentLocalization?.locale}
        </span>
        <svg
          className="w-4 h-4 ml-2 text-gray-500"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4 4a.75.75 0 01-1.06 0l-4-4a.75.75 0 01.02-1.06z"
            clipRule="evenodd"
          />
        </svg>
      </button>

      {/* Dropdown Menu */}
      <div className="absolute mt-2 w-full bg-white border border-gray-200 rounded-lg shadow-lg">
        {localizations.map((localization) => (
          <button
            key={localization.locale}
            className={`flex items-center w-full px-4 py-2 hover:bg-gray-100 transition ${
              localization.locale === language ? 'bg-gray-100' : ''
            }`}
            onClick={() => toggleLanguage(localization.locale)}
          >
            <img
              src={localization.flag}
              alt={localization.locale}
              className="w-6 h-6 rounded-full mr-2"
            />
            <span className="text-gray-700 font-medium capitalize">
              {localization.locale}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default LanguageSelector;
