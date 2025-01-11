import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Landing = () => {
  const { t } = useTranslation();

  return (
    <div className="flex min-h-screen flex-col items-center justify-center space-y-8">
      <h1 className="text-6xl font-bold text-primary">
        {t('welcome_to_app')}
      </h1>
      <div className="flex gap-4">
        <Link
          to="/login"
          className="rounded-lg bg-primary px-6 py-3 font-semibold text-white hover:bg-primary/90"
        >
          {t('login')}
        </Link>
        <Link
          to="/register"
          className="rounded-lg border border-primary px-6 py-3 font-semibold text-primary hover:bg-primary/10"
        >
          {t('sign_up')}
        </Link>
      </div>
    </div>
  );
};

export default Landing; 