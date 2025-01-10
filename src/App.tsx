import { Github, Twitter, Mail } from "lucide-react";
import { useTranslation } from "react-i18next";

import { useInitializeAppConfig } from "./hooks/useInitializeAppConfig";
import LanguageSelector from "./components/LanguageSelector";


const WelcomePage = () => {
  useInitializeAppConfig();

  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-12 px-4">
      <LanguageSelector />
      {/* Hero Section */}
      <div className="max-w-6xl mx-auto text-center mb-16">
        <h1 className="text-5xl font-bold text-gray-900 mb-6">
          React <span className="text-blue-600">{t("hello")}</span>
        </h1>
        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          {t("welcome_description")}
        </p>
        <div className="flex gap-4 justify-center">
          <button className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center">
            <Github className="w-5 h-5 mr-2" />
            {t("star_github")}
          </button>
          <button className="px-6 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
            {t("quick_start")}
          </button>
        </div>
      </div>

      {/* Features Section */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">
            {t("feature_modern_stack")}
          </h3>
          <p className="text-gray-600">{t("feature_modern_stack_desc")}</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">
            {t("feature_dev_tools")}
          </h3>
          <p className="text-gray-600">{t("feature_dev_tools_desc")}</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">
            {t("feature_prod_ready")}
          </h3>
          <p className="text-gray-600">{t("feature_prod_ready_desc")}</p>
        </div>
      </div>

      {/* Newsletter Section */}
      <div className="max-w-2xl mx-auto text-center mb-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          {t("join_community")}
        </h2>
        <p className="text-gray-600 mb-6">{t("join_community_desc")}</p>
        <div className="flex gap-4 justify-center">
          <button className="px-6 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors flex items-center">
            <Mail className="w-5 h-5 mr-2" />
            {t("join_discord")}
          </button>
        </div>
      </div>

      {/* Footer */}
      <footer className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center pt-8 border-t border-gray-200">
        <p className="text-gray-600 mb-4 md:mb-0">{t("footer_text")}</p>
        <div className="flex gap-4">
          <button className="p-2 text-gray-600 hover:text-gray-900 transition-colors flex items-center">
            <Github className="w-5 h-5 mr-1" /> {t("github")}
          </button>
          <button className="p-2 text-gray-600 hover:text-gray-900 transition-colors flex items-center">
            <Twitter className="w-5 h-5 mr-1" /> {t("twitter")}
          </button>
          <button className="p-2 text-gray-600 hover:text-gray-900 transition-colors flex items-center">
            <Mail className="w-5 h-5 mr-1" /> {t("contact")}
          </button>
        </div>
      </footer>
    </div>
  );
};

export default WelcomePage;
