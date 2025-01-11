import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useApplicationConfigStore } from '@/store/applicationConfigStore';

const Login = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const { login } = useApplicationConfigStore();

  const handleLogin = () => {
    login();
    navigate('/home');
  };

  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="text-center">
        <h1 className="mb-8 text-4xl font-bold text-purple-600 dark:text-purple-400">
          {t('login')}
        </h1>
        <button
          onClick={handleLogin}
          className="rounded-lg bg-purple-600 px-6 py-3 font-semibold text-white hover:bg-purple-700 dark:bg-purple-500 dark:hover:bg-purple-600"
        >
          {t('login')}
        </button>
      </div>
    </div>
  );
};

export default Login; 