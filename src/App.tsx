import { Github, Twitter, Mail } from 'lucide-react';
import { useTranslation } from 'react-i18next';

import { useInitializeAppConfig } from './hooks/useInitializeAppConfig';
import Navbar from './components/Navbar';

const WelcomePage = () => {
  useInitializeAppConfig();

  const { t } = useTranslation();

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-background text-foreground py-12 px-4">
        {/* Hero Section */}
        <div className="max-w-6xl mx-auto text-center mb-16">
          <h1 className="text-5xl font-bold mb-6">
            React <span className="text-primary">{t('hello')}</span>
          </h1>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            {t('welcome_description')}
          </p>
          <div className="flex gap-4 justify-center">
            <button className="px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors flex items-center">
              <Github className="w-5 h-5 mr-2" />
              {t('star_github')}
            </button>
            <button className="px-6 py-3 border border-border rounded-lg hover:bg-muted transition-colors">
              {t('quick_start')}
            </button>
          </div>
        </div>

        {/* Features Section */}
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="bg-card text-card-foreground p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <h3 className="text-xl font-semibold mb-4">
              {t('feature_modern_stack')}
            </h3>
            <p>{t('feature_modern_stack_desc')}</p>
          </div>
          <div className="bg-card text-card-foreground p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <h3 className="text-xl font-semibold mb-4">
              {t('feature_dev_tools')}
            </h3>
            <p>{t('feature_dev_tools_desc')}</p>
          </div>
          <div className="bg-card text-card-foreground p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <h3 className="text-xl font-semibold mb-4">
              {t('feature_prod_ready')}
            </h3>
            <p>{t('feature_prod_ready_desc')}</p>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="max-w-2xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">{t('join_community')}</h2>
          <p className="mb-6">{t('join_community_desc')}</p>
          <div className="flex gap-4 justify-center">
            <button className="px-6 py-3 bg-secondary text-secondary-foreground rounded-lg hover:bg-secondary/90 transition-colors flex items-center">
              <Mail className="w-5 h-5 mr-2" />
              {t('join_discord')}
            </button>
          </div>
        </div>

        {/* Footer */}
        <footer className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center pt-8 border-t border-border">
          <p className="mb-4 md:mb-0">{t('footer_text')}</p>
          <div className="flex gap-4">
            <button className="p-2 hover:text-primary transition-colors flex items-center">
              <Github className="w-5 h-5 mr-1" /> {t('github')}
            </button>
            <button className="p-2 hover:text-primary transition-colors flex items-center">
              <Twitter className="w-5 h-5 mr-1" /> {t('twitter')}
            </button>
            <button className="p-2 hover:text-primary transition-colors flex items-center">
              <Mail className="w-5 h-5 mr-1" /> {t('contact')}
            </button>
          </div>
        </footer>
      </div>
    </>
  );
};

export default WelcomePage;
