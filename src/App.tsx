import { RouterProvider } from 'react-router-dom';
import { Suspense } from 'react';

import { router } from './routes';
import { useInitializeAppConfig } from './hooks/useInitializeAppConfig';

const App = () => {
  useInitializeAppConfig();

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <RouterProvider router={router} />
    </Suspense>
  );
};

export default App;
