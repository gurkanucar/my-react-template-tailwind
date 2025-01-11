import { RouterProvider } from 'react-router-dom';
import { router } from './routes';
import { useInitializeAppConfig } from './hooks/useInitializeAppConfig';

const App = () => {
  useInitializeAppConfig();

  return <RouterProvider router={router} />;
};

export default App;
