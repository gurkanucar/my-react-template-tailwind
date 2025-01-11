import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Bell, User, LogOut, Settings } from 'lucide-react';
import { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { useApplicationConfigStore } from '@/store/applicationConfigStore';

import LanguageSelector from './LanguageSelector';
import ThemeSelector from './ThemeSelector';

const DashboardHeader = () => {
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const profileDropdownRef = useRef<HTMLDivElement>(null);
  const { t } = useTranslation();
  const navigate = useNavigate();
  const { logout } = useApplicationConfigStore();

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        profileDropdownRef.current &&
        !profileDropdownRef.current.contains(event.target as Node)
      ) {
        setIsProfileOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <header className="bg-background border-b border-border shadow-sm sticky top-0 z-50">
      <div className="px-4 h-16 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <Link to="/panel/dashboard" className="flex items-center">
            <span className="text-xl font-bold text-foreground">Admin Panel</span>
          </Link>
        </div>

        {/* Right side items */}
        <div className="flex items-center space-x-4">
          {/* Language and Theme selectors */}
          <div className="hidden md:flex items-center space-x-2">
            <LanguageSelector showText={false} />
            <ThemeSelector showText={false} />
          </div>

          {/* Notifications */}
          <button className="text-muted-foreground hover:text-foreground relative transition-colors">
            <Bell className="h-5 w-5" />
            <span className="absolute -top-1 -right-1 bg-destructive text-destructive-foreground rounded-full w-4 h-4 text-xs flex items-center justify-center">
              3
            </span>
          </button>

          {/* Profile Dropdown */}
          <div className="relative" ref={profileDropdownRef}>
            <button
              onClick={() => setIsProfileOpen(!isProfileOpen)}
              className="flex items-center space-x-2 text-muted-foreground hover:text-foreground focus:outline-none transition-colors"
            >
              <div className="flex items-center space-x-3">
                <span className="text-sm font-medium hidden md:block">John Doe</span>
                <div className="h-8 w-8 rounded-full bg-muted flex items-center justify-center">
                  <User className="h-5 w-5" />
                </div>
              </div>
            </button>

            {/* Dropdown menu */}
            {isProfileOpen && (
              <div className="absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-popover border border-border ring-1 ring-black ring-opacity-5">
                <Link
                  to="/panel/profile"
                  className="flex items-center px-4 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
                >
                  <User className="h-4 w-4 mr-2" />
                  {t('navbar_profile')}
                </Link>
                <Link
                  to="/panel/settings"
                  className="flex items-center px-4 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
                >
                  <Settings className="h-4 w-4 mr-2" />
                  {t('navbar_settings')}
                </Link>
                <button
                  onClick={handleLogout}
                  className="flex w-full items-center px-4 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
                >
                  <LogOut className="h-4 w-4 mr-2" />
                  {t('navbar_signOut')}
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default DashboardHeader; 