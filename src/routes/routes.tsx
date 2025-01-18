// routes.tsx
import PublicLayout from '@/layouts/PublicLayout';
import PrivateLayout from '@/layouts/PrivateLayout';
import EmptyLayout from '@/layouts/EmptyLayout';
import NotFound from '@/pages/NotFound';
import FadeTransition from '@/components/FadeTransition';
import DashboardLayout from '@/layouts/DashboardLayout';

import * as Pages from './lazyComponents';

// Helper to wrap any component with <FadeTransition>
const withFade = (component: JSX.Element) => (
  <FadeTransition>{component}</FadeTransition>
);

// Define child routes for each layout without repeating <FadeTransition>
const publicRoutes = [
  { path: '/', element: <Pages.Landing /> },
  { path: '/login', element: <Pages.Login /> },
  { path: '/register', element: <Pages.Register /> },
].map((route) => ({ ...route, element: withFade(route.element) }));

const privateRoutes = [
  { path: '/home', element: <Pages.Home /> },
  { path: '/profile', element: <Pages.Profile /> },
].map((route) => ({ ...route, element: withFade(route.element) }));

const emptyRoutes = [
  { path: '/empty', element: <Pages.EmptyPage /> },
].map((route) => ({ ...route, element: withFade(route.element) }));

const dashboardRoutes = [
  { path: '/panel/dashboard', element: <Pages.Dashboard /> },
  { path: '/panel/users', element: <Pages.Users /> },
  { path: '/panel/users/list', element: <Pages.UsersList /> },
  { path: '/panel/users/create', element: <Pages.CreateUser /> },
  { path: '/panel/users/:id/edit', element: <Pages.EditUser /> },
  { path: '/panel/addresses', element: <Pages.Addresses /> },
  { path: '/panel/configs', element: <Pages.Configs /> },
  { path: '/panel/profile', element: <Pages.Profile /> },
].map((route) => ({ ...route, element: withFade(route.element) }));

export const routes = [
  {
    element: <PublicLayout />,
    children: publicRoutes,
  },
  // {
  //   element: <PrivateLayout />,
  //   children: privateRoutes.filter(route => route.path !== '/dashboard'),
  // },
  {
    element: <PrivateLayout />,
    children: privateRoutes,
  },
  {
    element: <DashboardLayout />,
    children: dashboardRoutes,
  },
  {
    element: <EmptyLayout />,
    children: emptyRoutes,
  },
  {
    path: '*',
    element: withFade(<NotFound />),
  },
];
