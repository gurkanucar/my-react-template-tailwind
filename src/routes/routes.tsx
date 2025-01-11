import PublicLayout from '@/layouts/PublicLayout';
import PrivateLayout from '@/layouts/PrivateLayout';
import EmptyLayout from '@/layouts/EmptyLayout';
import NotFound from '@/pages/NotFound';

import * as Pages from './lazyComponents';

export const routes = [
  {
    element: <PublicLayout />,
    children: [
      {
        path: '/',
        element: <Pages.Landing />,
      },
      {
        path: '/login',
        element: <Pages.Login />,
      },
      {
        path: '/register',
        element: <Pages.Register />,
      },
    ],
  },
  {
    element: <PrivateLayout />,
    children: [
      {
        path: '/home',
        element: <Pages.Home />,
      },
      {
        path: '/dashboard',
        element: <Pages.Dashboard />,
      },
      {
        path: '/profile',
        element: <Pages.Profile />,
      },
    ],
  },
  {
    element: <EmptyLayout />,
    children: [
      {
        path: '/empty',
        element: <Pages.EmptyPage />,
      },
    ],
  },
  {
    path: '*',
    element: <NotFound />,
  },
]; 