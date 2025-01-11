import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { 
  LayoutDashboard, 
  Users, 
  MapPin, 
  Settings,
  List,
  PlusCircle,
  ChevronDown,
  ChevronRight,
  Menu,
} from 'lucide-react';
import { useState } from 'react';

import { cn } from '@/lib/utils';

const ICON_SIZE = 20; // Define constant icon size
const SUB_ICON_SIZE = 16; // Define constant sub-menu icon size
const CHEVRON_SIZE = 16; // Define constant chevron icon size
const TOGGLE_ICON_SIZE = 16; // Define constant toggle button icon size

const Sidebar = () => {
  const location = useLocation();
  const { t } = useTranslation();
  const [expandedMenus, setExpandedMenus] = useState<string[]>([]);
  const [isCollapsed, setIsCollapsed] = useState(false);

  const toggleMenu = (menuPath: string) => {
    setExpandedMenus(prev => 
      prev.includes(menuPath) 
        ? prev.filter(p => p !== menuPath)
        : [...prev, menuPath]
    );
  };

  const menuItems = [
    { 
      path: '/panel/dashboard', 
      icon: <LayoutDashboard size={ICON_SIZE} />, 
      label: t('sidebar.dashboard'),
    },
    { 
      path: '/panel/users', 
      icon: <Users size={ICON_SIZE} />, 
      label: t('sidebar.users.title'),
      subMenus: [
        { 
          path: '/panel/users/list', 
          icon: <List size={SUB_ICON_SIZE} />, 
          label: t('sidebar.users.list')
        },
        { 
          path: '/panel/users/create', 
          icon: <PlusCircle size={SUB_ICON_SIZE} />, 
          label: t('sidebar.users.create')
        },
      ]
    },
    { 
      path: '/panel/addresses', 
      icon: <MapPin size={ICON_SIZE} />, 
      label: t('sidebar.addresses')
    },
    { 
      path: '/panel/configs', 
      icon: <Settings size={ICON_SIZE} />, 
      label: t('sidebar.configs')
    },
  ];

  const isActivePath = (path: string) => location.pathname.startsWith(path);
  const isExpandedMenu = (path: string) => expandedMenus.includes(path);

  return (
    <aside 
      className={cn(
        "min-h-[calc(100vh-4rem)] bg-background border-r border-border relative transition-all duration-300",
        isCollapsed ? "w-[4.5rem]" : "w-64"
      )}
    >
      <button
        onClick={() => setIsCollapsed(!isCollapsed)}
        className="absolute -right-4 top-2 bg-background border border-border rounded-full p-1.5 hover:bg-muted transition-colors"
      >
        {isCollapsed ? (
          <ChevronRight size={TOGGLE_ICON_SIZE} />
        ) : (
          <Menu size={TOGGLE_ICON_SIZE} />
        )}
      </button>
      <nav className="p-4">
        <ul className="space-y-2">
          {menuItems.map((item) => (
            <li key={item.path}>
              {item.subMenus ? (
                <div className="space-y-1">
                  <button
                    onClick={() => toggleMenu(item.path)}
                    className={cn(
                      "w-full flex items-center justify-between px-3 py-2 rounded-md transition-colors",
                      isActivePath(item.path)
                        ? "bg-primary/10 text-primary"
                        : "text-muted-foreground hover:bg-muted hover:text-foreground"
                    )}
                  >
                    <div className="flex items-center space-x-3">
                      <div className="w-5 h-5 flex items-center justify-center">
                        {item.icon}
                      </div>
                      {!isCollapsed && <span>{item.label}</span>}
                    </div>
                    {!isCollapsed && (
                      <ChevronDown 
                        size={CHEVRON_SIZE}
                        className={cn(
                          "transition-transform",
                          isExpandedMenu(item.path) && "rotate-180"
                        )} 
                      />
                    )}
                  </button>
                  {!isCollapsed && isExpandedMenu(item.path) && (
                    <ul className="pl-6 space-y-1">
                      {item.subMenus.map((subItem) => (
                        <li key={subItem.path}>
                          <Link
                            to={subItem.path}
                            className={cn(
                              "flex items-center space-x-3 px-3 py-2 rounded-md transition-colors text-sm",
                              isActivePath(subItem.path)
                                ? "bg-primary/10 text-primary"
                                : "text-muted-foreground hover:bg-muted hover:text-foreground"
                            )}
                          >
                            <div className="w-4 h-4 flex items-center justify-center">
                              {subItem.icon}
                            </div>
                            <span>{subItem.label}</span>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ) : (
                <Link
                  to={item.path}
                  className={cn(
                    "flex items-center space-x-3 px-3 py-2 rounded-md transition-colors",
                    isActivePath(item.path)
                      ? "bg-primary/10 text-primary"
                      : "text-muted-foreground hover:bg-muted hover:text-foreground"
                  )}
                >
                  <div className="w-5 h-5 flex items-center justify-center">
                    {item.icon}
                  </div>
                  {!isCollapsed && <span>{item.label}</span>}
                </Link>
              )}
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar; 