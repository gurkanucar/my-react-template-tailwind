import { useState, useRef, useEffect } from 'react';
import { Menu, X, User, LogOut, Settings, Bell } from 'lucide-react';

import LanguageSelector from './LanguageSelector';
import ThemeSelector from './ThemeSelector';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const profileDropdownRef = useRef<HTMLDivElement>(null);

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

  return (
    <nav className="bg-background border-b border-border shadow-[0_2px_10px_-2px_rgba(0,0,0,0.1)] dark:shadow-[0_2px_10px_-2px_rgba(0,0,0,0.2)] sticky top-0 z-50">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Left side: Logo and Navigation */}
          <div className="flex items-center">
            {/* Logo */}
            <div className="flex-shrink-0">
              <span className="text-xl font-bold text-foreground">Logo</span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:block ml-6">
              <div className="flex items-center space-x-4">
                <a
                  href="#"
                  className="text-muted-foreground hover:text-foreground px-3 py-2 rounded-md text-sm font-medium transition-colors"
                >
                  Dashboard
                </a>
                <a
                  href="#"
                  className="text-muted-foreground hover:text-foreground px-3 py-2 rounded-md text-sm font-medium transition-colors"
                >
                  Projects
                </a>
                <a
                  href="#"
                  className="text-muted-foreground hover:text-foreground px-3 py-2 rounded-md text-sm font-medium transition-colors"
                >
                  Team
                </a>
              </div>
            </div>
          </div>

          {/* Right side items */}
          <div className="flex items-center space-x-4">
            {/* Language and Theme selectors - Hidden on mobile */}
            <div className="hidden md:flex items-center space-x-2">
              <LanguageSelector showText={false} />
              <ThemeSelector showText={false} />
            </div>

            {/* Notifications */}
            <div className="hidden md:block">
              <button className="text-muted-foreground hover:text-foreground relative transition-colors">
                <Bell className="h-6 w-6" />
                <span className="absolute -top-1 -right-1 bg-destructive text-destructive-foreground rounded-full w-4 h-4 text-xs flex items-center justify-center">
                  3
                </span>
              </button>
            </div>

            {/* Profile Dropdown */}
            <div className="hidden md:block relative" ref={profileDropdownRef}>
              <button
                onClick={() => setIsProfileOpen(!isProfileOpen)}
                className="flex items-center space-x-2 text-muted-foreground hover:text-foreground focus:outline-none transition-colors"
              >
                <div className="flex items-center space-x-3">
                  <span className="text-sm font-medium">John Doe</span>
                  <div className="h-8 w-8 rounded-full bg-muted flex items-center justify-center">
                    <User className="h-5 w-5" />
                  </div>
                </div>
              </button>

              {/* Dropdown menu */}
              {isProfileOpen && (
                <div className="absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-popover border border-border ring-1 ring-black ring-opacity-5 z-50">
                  <a
                    href="#"
                    className="flex items-center px-4 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
                  >
                    <User className="h-4 w-4 mr-2" />
                    Profile
                  </a>
                  <a
                    href="#"
                    className="flex items-center px-4 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
                  >
                    <Settings className="h-4 w-4 mr-2" />
                    Settings
                  </a>
                  <a
                    href="#"
                    className="flex items-center px-4 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
                  >
                    <LogOut className="h-4 w-4 mr-2" />
                    Logout
                  </a>
                </div>
              )}
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-muted-foreground hover:text-foreground hover:bg-muted focus:outline-none transition-colors"
              >
                {isMenuOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden border-t border-border bg-background">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a
              href="#"
              className="block px-3 py-2 rounded-md text-base font-medium text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
            >
              Dashboard
            </a>
            <a
              href="#"
              className="block px-3 py-2 rounded-md text-base font-medium text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
            >
              Projects
            </a>
            <a
              href="#"
              className="block px-3 py-2 rounded-md text-base font-medium text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
            >
              Team
            </a>
          </div>
          <div className="pt-4 pb-3 border-t border-border">
            <div className="flex items-center px-5">
              <div className="h-8 w-8 rounded-full bg-muted flex items-center justify-center">
                <User className="h-5 w-5" />
              </div>
              <div className="ml-3">
                <div className="text-base font-medium text-foreground">
                  John Doe
                </div>
                <div className="text-sm font-medium text-muted-foreground">
                  john@example.com
                </div>
              </div>
              <button className="ml-auto text-muted-foreground hover:text-foreground transition-colors">
                <Bell className="h-6 w-6" />
              </button>
            </div>
            <div className="mt-3 px-2 space-y-1">
              <a
                href="#"
                className="block px-3 py-2 rounded-md text-base font-medium text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
              >
                Profile
              </a>
              <a
                href="#"
                className="block px-3 py-2 rounded-md text-base font-medium text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
              >
                Settings
              </a>
              <a
                href="#"
                className="block px-3 py-2 rounded-md text-base font-medium text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
              >
                Logout
              </a>
            </div>
          </div>
          <div className="px-2 pt-2 pb-3 border-t border-border">
            <div className="flex items-center justify-between px-3">
              <LanguageSelector />
              <ThemeSelector />
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
