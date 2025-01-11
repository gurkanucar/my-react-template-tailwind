import { Navigate, Outlet, useLocation } from 'react-router-dom';

import { useApplicationConfigStore } from '@/store/applicationConfigStore';
import DashboardHeader from '@/components/DashboardHeader';
import Sidebar from '@/components/Sidebar';

const DashboardLayout = () => {
  const { isAuthenticated } = useApplicationConfigStore();
  const location = useLocation();

  if (!isAuthenticated) {
    return <Navigate to={`/login?redirect=${location.pathname}`} replace />;
  }

  return (
    <div className="min-h-screen bg-background">
      <DashboardHeader />
      <div className="flex">
        <Sidebar />
        <main className="flex-1 p-8">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout; 