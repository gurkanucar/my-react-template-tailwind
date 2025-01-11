import { createBrowserRouter } from 'react-router-dom';

import PublicLayout from '@/layouts/PublicLayout';
import PrivateLayout from '@/layouts/PrivateLayout';
import EmptyLayout from '@/layouts/EmptyLayout';
import Landing from '@/pages/Landing';
import Login from '@/pages/Login';
import Register from '@/pages/Register';
import Home from '@/pages/Home';
import Dashboard from '@/pages/Dashboard';
import Profile from '@/pages/Profile';
import EmptyPage from '@/pages/EmptyPage';
import NotFound from '@/pages/NotFound';

export const router = createBrowserRouter([
  {
    element: <PublicLayout />,
    children: [
      {
        path: '/',
        element: <Landing />,
      },
      {
        path: '/login',
        element: <Login />,
      },
      {
        path: '/register',
        element: <Register />,
      },
    ],
  },
  {
    element: <PrivateLayout />,
    children: [
      {
        path: '/home',
        element: <Home />,
      },
      {
        path: '/dashboard',
        element: <Dashboard />,
      },
      {
        path: '/profile',
        element: <Profile />,
      },
    ],
  },
  {
    element: <EmptyLayout />,
    children: [
      {
        path: '/empty',
        element: <EmptyPage />,
      },
    ],
  },
  {
    path: '*',
    element: <NotFound />,
  },
]); 