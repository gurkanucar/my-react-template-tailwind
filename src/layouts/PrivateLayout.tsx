import { Outlet, useLocation } from 'react-router-dom';
import { useKeycloak } from '@react-keycloak/web';

import Navbar from '@/components/Navbar';

const PrivateLayout = () => {
  const { keycloak, initialized } = useKeycloak();
  const location = useLocation();

  if (!initialized) {
    return <div>Loading...</div>;
  }

  if (!keycloak.authenticated) {
    keycloak.login({
      redirectUri: window.location.origin + location.pathname,
    });
    return null;
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
