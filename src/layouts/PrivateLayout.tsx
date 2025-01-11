import { Navigate, Outlet } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import { useApplicationConfigStore } from '@/store/applicationConfigStore';

const PrivateLayout = () => {
  const { isAuthenticated } = useApplicationConfigStore();

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        <Outlet />
      </div>
    </div>
  );
};

export default PrivateLayout; 