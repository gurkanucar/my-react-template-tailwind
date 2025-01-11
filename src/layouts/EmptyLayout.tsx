import { Outlet } from 'react-router-dom';

const EmptyLayout = () => {
  return (
    <div className="min-h-screen bg-background">
      <Outlet />
    </div>
  );
};

export default EmptyLayout; 