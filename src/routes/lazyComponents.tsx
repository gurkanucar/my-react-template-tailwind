import { lazy } from 'react';

export const Landing = lazy(() => import('@/pages/Landing'));
export const Login = lazy(() => import('@/pages/Login'));
export const Register = lazy(() => import('@/pages/Register'));
export const Home = lazy(() => import('@/pages/Home'));
export const Dashboard = lazy(() => import('@/pages/Dashboard'));
export const Profile = lazy(() => import('@/pages/Profile'));
export const EmptyPage = lazy(() => import('@/pages/EmptyPage')); 