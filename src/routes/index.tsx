import { createBrowserRouter } from 'react-router-dom';
import { lazy } from 'react';

import PublicLayout from '@/layouts/PublicLayout';
import PrivateLayout from '@/layouts/PrivateLayout';
import EmptyLayout from '@/layouts/EmptyLayout';
import NotFound from '@/pages/NotFound';

const Landing = lazy(() => import('@/pages/Landing'));
const Login = lazy(() => import('@/pages/Login'));
const Register = lazy(() => import('@/pages/Register'));
const Home = lazy(() => import('@/pages/Home'));
const Dashboard = lazy(() => import('@/pages/Dashboard'));
const Profile = lazy(() => import('@/pages/Profile'));
const EmptyPage = lazy(() => import('@/pages/EmptyPage'));

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