import { lazy } from 'react';

export const Landing = lazy(() => import('@/pages/Landing'));
export const Login = lazy(() => import('@/pages/Login'));
export const Register = lazy(() => import('@/pages/Register'));
export const Home = lazy(() => import('@/pages/Home'));
export const Dashboard = lazy(() => import('@/pages/Dashboard'));
export const Profile = lazy(() => import('@/pages/Profile'));
export const EmptyPage = lazy(() => import('@/pages/EmptyPage'));
export const Users = lazy(() => import('@/pages/dashboard/Users'));
export const Addresses = lazy(() => import('@/pages/dashboard/Addresses'));
export const Configs = lazy(() => import('@/pages/dashboard/Configs'));
export const UsersList = lazy(() => import('@/pages/dashboard/users/UsersList'));
export const CreateUser = lazy(() => import('@/pages/dashboard/users/CreateUser'));
export const EditUser = lazy(() => import('@/pages/dashboard/users/EditUser')); 