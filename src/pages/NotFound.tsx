import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const NotFound = () => {
  const { t } = useTranslation();

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-background">
      <h1 className="mb-4 text-9xl font-bold text-primary">404</h1>
      <p className="mb-8 text-xl text-muted-foreground">
        {t('page_not_found')}
      </p>
      <Link
        to="/"
        className="rounded-lg bg-primary px-6 py-3 font-semibold text-primary-foreground hover:bg-primary/90 transition-colors"
      >
        {t('back_to_home')}
      </Link>
    </div>
  );
};

export default NotFound; 