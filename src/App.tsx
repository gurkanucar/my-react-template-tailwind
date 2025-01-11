import { RouterProvider } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { Suspense } from 'react';

import { router } from './routes';
import { useInitializeAppConfig } from './hooks/useInitializeAppConfig';

const App = () => {
  useInitializeAppConfig();

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <AnimatePresence mode="wait">
        <RouterProvider router={router} />
      </AnimatePresence>
    </Suspense>
  );
};

export default App;
