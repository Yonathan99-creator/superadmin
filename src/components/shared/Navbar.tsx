import React, { useState, useEffect } from 'react';
import { 
  Home, Users, Calendar, Settings, CreditCard, 
  BarChart3, FileText, UserCheck, Star, 
  Sun, Moon, User, LogOut, ChevronDown,
  Bell, Search, Menu, X
} from 'lucide-react';
import { useTheme } from '../../contexts/ThemeContext';

interface NavbarProps {
  activeModule: string;
  onModuleChange: (module: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({ activeModule, onModuleChange }) => {
  const { theme, toggleTheme } = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isNotificationOpen, setIsNotificationOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigationItems = [
    { name: 'Home', icon: Home, href: '#home' },
    { name: 'Professionals', icon: Users, href: '#professionals' },
    { name: 'Appointments', icon: Calendar, href: '#appointments' },
    { name: 'Services', icon: Settings, href: '#services' },
    { name: 'Subscriptions', icon: CreditCard, href: '#subscriptions' },
    { name: 'Reports', icon: BarChart3, href: '#reports' },
    { name: 'Logs', icon: FileText, href: '#logs' },
    { name: 'Clients', icon: UserCheck, href: '#clients' },
    { name: 'Reviews', icon: Star, href: '#reviews' },
  ];

  const notifications = [
    { id: 1, title: 'System Alert', message: 'New professional registration pending approval', time: '2 min ago', unread: true },
    { id: 2, title: 'Revenue Update', message: 'Monthly revenue target exceeded by 15%', time: '15 min ago', unread: true },
    { id: 3, title: 'Maintenance', message: 'Scheduled maintenance completed successfully', time: '1 hour ago', unread: false },
    { id: 4, title: 'New Review', message: 'Platform received 50+ new reviews today', time: '2 hours ago', unread: false },
  ];

  const unreadCount = notifications.filter(n => n.unread).length;

  const handleModuleChange = (moduleName: string) => {
    onModuleChange(moduleName);
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
      isScrolled 
        ? 'bg-white/90 dark:bg-gray-900/90 backdrop-blur-2xl shadow-2xl border-b border-gray-200/50 dark:border-gray-700/50' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center flex-shrink-0">
            <div className="flex items-center space-x-3 group">
              <div className="relative">
                <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl flex items-center justify-center transform group-hover:scale-105 transition-all duration-500">
                  <Calendar className="w-6 h-6 text-white group-hover:rotate-12 transition-transform duration-500" />
                </div>
                <div className="absolute inset-0 bg-blue-600/20 rounded-xl scale-0 group-hover:scale-150 transition-transform duration-700 animate-pulse"></div>
              </div>
              <div>
                <h1 className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  ProBooking
                </h1>
                <p className="text-xs text-gray-500 dark:text-gray-400">SuperAdmin</p>
              </div>
            </div>
          </div>

          {/* Navigation Items - Hidden on mobile */}
          <div className="hidden lg:block flex-1 max-w-6xl mx-8">
            <div className="flex items-center justify-center space-x-1">
              {navigationItems.map((item, index) => {
                const Icon = item.icon;
                const isActive = activeModule === item.name;
                
                return (
                  <button
                    key={item.name}
                    onClick={() => handleModuleChange(item.name)}
                    className={`relative px-3 py-2 rounded-lg text-sm font-medium transition-all duration-300 hover:bg-white/60 dark:hover:bg-gray-800/60 hover:shadow-lg hover:scale-105 group whitespace-nowrap ${
                      isActive
                        ? 'text-blue-600 dark:text-blue-400 bg-white/60 dark:bg-gray-800/60 shadow-md'
                        : 'text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400'
                    }`}
                    style={{ animationDelay: `${index * 50}ms` }}
                  >
                    <Icon className="h-4 w-4 inline mr-2 group-hover:scale-110 transition-transform duration-300" />
                    <span className="hidden xl:inline">{item.name}</span>
                    {/* Active indicator */}
                    {isActive && (
                      <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full"></div>
                    )}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Right Side Actions */}
          <div className="flex items-center space-x-2 flex-shrink-0">
            {/* Search Button */}
            <button className="hidden lg:flex items-center space-x-2 px-3 py-2 bg-gray-100/80 dark:bg-gray-800/80 hover:bg-white dark:hover:bg-gray-700 rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-md group backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/50">
              <Search className="h-4 w-4 text-gray-600 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors group-hover:rotate-12 duration-300" />
              <span className="text-sm text-gray-600 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors hidden xl:inline">Search</span>
            </button>

            {/* Notifications */}
            <div className="relative">
              <button
                onClick={() => setIsNotificationOpen(!isNotificationOpen)}
                className="relative p-2 rounded-xl hover:bg-white/60 dark:hover:bg-gray-800/60 transition-all duration-300 hover:scale-105 hover:shadow-md group border border-transparent hover:border-gray-200/50 dark:hover:border-gray-700/50"
              >
                <Bell className="h-5 w-5 text-gray-600 dark:text-gray-300 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors group-hover:animate-bounce" />
                {unreadCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center animate-pulse shadow-lg">
                    {unreadCount}
                  </span>
                )}
              </button>

              {/* Notifications Dropdown */}
              {isNotificationOpen && (
                <div className="absolute right-0 mt-2 w-80 bg-white dark:bg-gray-800 rounded-2xl shadow-2xl border border-gray-200 dark:border-gray-600 animate-in slide-in-from-top-2 duration-200 z-50 backdrop-blur-xl">
                  <div className="p-4 border-b border-gray-200 dark:border-gray-700">
                    <h3 className="font-semibold text-gray-900 dark:text-gray-100">System Notifications</h3>
                  </div>
                  <div className="max-h-96 overflow-y-auto">
                    {notifications.map((notification) => (
                      <div
                        key={notification.id}
                        className={`p-4 border-b border-gray-100 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors cursor-pointer ${
                          notification.unread ? 'bg-blue-50 dark:bg-blue-900/10' : ''
                        }`}
                      >
                        <div className="flex justify-between items-start">
                          <div className="flex-1">
                            <h4 className="font-medium text-gray-900 dark:text-gray-100 text-sm">
                              {notification.title}
                            </h4>
                            <p className="text-gray-600 dark:text-gray-400 text-sm mt-1">
                              {notification.message}
                            </p>
                            <p className="text-gray-500 dark:text-gray-500 text-xs mt-2">
                              {notification.time}
                            </p>
                          </div>
                          {notification.unread && (
                            <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-xl hover:bg-white/60 dark:hover:bg-gray-800/60 transition-all duration-300 hover:scale-105 hover:shadow-md group border border-transparent hover:border-gray-200/50 dark:hover:border-gray-700/50"
              title={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
            >
              {theme === 'dark' ? (
                <Sun className="h-5 w-5 text-yellow-500 group-hover:rotate-180 group-hover:scale-110 transition-transform duration-700" />
              ) : (
                <Moon className="h-5 w-5 text-gray-600 dark:text-gray-300 group-hover:rotate-180 group-hover:scale-110 transition-transform duration-700" />
              )}
            </button>

            {/* Profile Dropdown */}
            <div className="relative">
              <button
                onClick={() => setIsProfileOpen(!isProfileOpen)}
                className="flex items-center space-x-2 p-1 rounded-xl hover:bg-white/60 dark:hover:bg-gray-800/60 transition-all duration-300 hover:scale-105 hover:shadow-md group border border-transparent hover:border-gray-200/50 dark:hover:border-gray-700/50"
              >
                <img
                  src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=1"
                  alt="Profile"
                  className="w-8 h-8 rounded-full ring-2 ring-white dark:ring-gray-700 group-hover:ring-blue-400 transition-all duration-300"
                />
                <div className="hidden sm:block text-left">
                  <p className="text-sm font-medium text-gray-900 dark:text-white">Admin User</p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">SuperAdmin</p>
                </div>
                <ChevronDown className={`h-4 w-4 text-gray-600 dark:text-gray-300 transition-transform duration-300 ${isProfileOpen ? 'rotate-180' : ''}`} />
              </button>

              {/* Profile Dropdown Menu */}
              {isProfileOpen && (
                <div className="absolute right-0 mt-2 w-56 bg-white dark:bg-gray-800 rounded-2xl shadow-2xl border border-gray-200 dark:border-gray-600 animate-in slide-in-from-top-2 duration-200 z-50 backdrop-blur-xl overflow-hidden">
                  <div className="p-4 border-b border-gray-200 dark:border-gray-700">
                    <div className="flex items-center space-x-3">
                      <img
                        src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=1"
                        alt="Profile"
                        className="w-10 h-10 rounded-full ring-2 ring-blue-500"
                      />
                      <div>
                        <p className="font-medium text-gray-900 dark:text-white">Admin User</p>
                        <p className="text-sm text-gray-600 dark:text-gray-400">admin@probooking.com</p>
                      </div>
                    </div>
                  </div>
                  <div className="py-2">
                    <button className="flex items-center space-x-3 w-full px-4 py-3 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200">
                      <User className="w-4 h-4" />
                      Profile
                    </button>
                    <button className="flex items-center space-x-3 w-full px-4 py-3 text-sm text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-900/20 transition-colors duration-200">
                      <LogOut className="w-4 h-4" />
                      Close Session
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 rounded-xl hover:bg-white/60 dark:hover:bg-gray-800/60 transition-all duration-300"
            >
              {isMobileMenuOpen ? (
                <X className="h-5 w-5 text-gray-600 dark:text-gray-300" />
              ) : (
                <Menu className="h-5 w-5 text-gray-600 dark:text-gray-300" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 animate-in slide-in-from-top-2 duration-200">
            <div className="flex flex-col space-y-1">
              {navigationItems.map((item) => {
                const Icon = item.icon;
                const isActive = activeModule === item.name;
                
                return (
                  <button
                    key={item.name}
                    onClick={() => handleModuleChange(item.name)}
                    className={`flex items-center px-4 py-3 rounded-xl transition-all duration-300 ${
                      isActive
                        ? 'text-blue-600 dark:text-blue-400 bg-white/60 dark:bg-gray-800/60'
                        : 'text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-white/60 dark:hover:bg-gray-800/60'
                    }`}
                  >
                    <Icon className="h-4 w-4 mr-3" />
                    {item.name}
                  </button>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;