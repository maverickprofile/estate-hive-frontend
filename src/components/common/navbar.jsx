import React, { useState, useEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { createClient } from '@supabase/supabase-js'; // Import Supabase client

// Supabase Configuration (ensure these match your AuthPage.jsx)
const supabaseUrl = 'https://qfmglenbyvhfrydozzqp.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFmbWdsZW5ieXZoZnJ5ZG96enFwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTI3Nzc1MTksImV4cCI6MjA2ODM1MzUxOX0.KgiS9wmPVCnGCxYxLE2wSKRgwYwXvLU-j8UtIpmDUfQ';

// Initialize Supabase client
const supabase = createClient(supabaseUrl, supabaseAnonKey);

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isScrollingDown, setIsScrollingDown] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [currentUser, setCurrentUser] = useState(null); // State to hold the logged-in user

  const navigate = useNavigate();

  const menuItems = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/#services', isDropdown: false },
    { name: 'AI Agents', path: '/ai-agent-ecosystem' },
    { name: 'Careers', path: '/careers' },
    { name: 'Blogs', path: '/blog' },
    { name: 'Contact', path: '/contact-us' },
  ];

  // Effect to handle scroll behavior
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsScrolled(currentScrollY > 50);
      setIsScrollingDown(currentScrollY > lastScrollY && currentScrollY > 150);
      setLastScrollY(currentScrollY);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  // Effect to listen for Supabase auth state changes
  useEffect(() => {
    // Get initial session
    supabase.auth.getSession().then(({ data: { session } }) => {
      setCurrentUser(session?.user || null);
    });

    // Subscribe to auth state changes
    const { data: authListener } = supabase.auth.onAuthStateChange((event, session) => {
      console.log('Navbar Auth State Change:', event, session);
      setCurrentUser(session?.user || null);
    });

    // Cleanup listener on component unmount
    return () => {
      if (authListener && authListener.data && authListener.data.subscription) {
        authListener.data.subscription.unsubscribe();
      }
    };
  }, []);

  const handleNavigation = (path) => {
    if (path.startsWith('/#')) {
      window.location.href = path;
    } else {
      navigate(path);
    }
    setIsOpen(false); // Close mobile menu after navigation
  };

  const handleLogout = async () => {
    try {
      const { error } = await supabase.auth.signOut();
      if (error) throw error;
      console.log('User logged out successfully.');
      navigate('/'); // Redirect to home or login page after logout
    } catch (error) {
      console.error('Error logging out:', error.message);
    }
  };

  const mobileMenuVariants = {
    hidden: { opacity: 0, y: '-100%' },
    visible: { opacity: 1, y: '0%', transition: { duration: 0.5, ease: 'easeOut' } },
    exit: { opacity: 0, y: '-100%', transition: { duration: 0.3, ease: 'easeIn' } },
  };

  const mobileLinkVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.3 } },
  };

  const staggerContainerVariants = {
    visible: {
      transition: {
        staggerChildren: 0.07,
        delayChildren: 0.2,
      },
    },
  };

  return (
    <motion.nav
      initial={false}
      animate={{
        y: isOpen ? '0%' : isScrollingDown ? '-100%' : '0%',
        backgroundColor: isScrolled || isOpen ? 'rgba(255, 255, 255, 0.9)' : 'transparent',
        boxShadow: isScrolled || isOpen ? '0 4px 12px rgba(0,0,0,0.1)' : 'none',
        backdropFilter: isScrolled || isOpen ? 'blur(8px)' : 'none',
      }}
      transition={{ duration: 0.3, ease: 'easeInOut' }}
      className="fixed top-0 left-0 w-full z-[9999]"
    >
      <div className="relative max-w-[1400px] mx-auto px-4 md:px-10 py-3 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center cursor-pointer" onClick={() => handleNavigation('/')}>
          <img src="/EH_Logo.svg" alt="Estate Hive Logo" className="h-12 md:h-16 object-contain" />
        </div>

        {/* Desktop Navigation */}
        <ul className={`hidden md:flex space-x-8 text-lg font-normal ${isScrolled ? 'text-gray-800' : 'text-white'}`}>
          {menuItems.map((item) => (
            <li key={item.name}>
              <a onClick={() => handleNavigation(item.path)} className="cursor-pointer hover:text-red-600">
                {item.name}
              </a>
            </li>
          ))}
        </ul>

        {/* Desktop Auth - Conditional Rendering */}
        <div className="hidden md:flex ml-8">
          {currentUser ? (
            <button
              onClick={handleLogout} // Logout on click
              className="relative z-10 p-1 rounded-full overflow-hidden transition-all duration-300 hover:opacity-80"
              title="Logout"
            >
              {/* User Avatar or Placeholder */}
              {currentUser.user_metadata?.avatar_url ? (
                <img
                  src={currentUser.user_metadata.avatar_url}
                  alt="User Avatar"
                  className="h-10 w-10 rounded-full object-cover border-2 border-white shadow-md"
                  onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/40x40/CCCCCC/333333?text=User'; }} // Fallback
                />
              ) : (
                <div className="h-10 w-10 rounded-full bg-gray-300 flex items-center justify-center text-gray-700 text-xl font-bold border-2 border-white shadow-md">
                  {currentUser.email ? currentUser.email[0].toUpperCase() : 'U'}
                </div>
              )}
            </button>
          ) : (
            <div className="relative flex items-center text-white text-sm font-semibold tracking-wide shadow rounded-full overflow-hidden">
              {/* Signup background (full pill shape) */}
              <div className="absolute inset-0 bg-white/30 backdrop-blur-lg rounded-full z-0" />

              {/* Login button (overlays left side) */}
              <button
                onClick={() => handleNavigation('/auth')}
                className="relative z-10 px-5 py-3 text-[#040449] rounded-l-full hover:opacity-90 transition-all"
              >
                Login
              </button>

              {/* Signup button (right side continues background) */}
              <button
                onClick={() => handleNavigation('/auth')}
                className="relative z-10 px-5 py-3 bg-[#040449] rounded-r-full text-white hover:opacity-90 transition-all" // Changed to rounded-r-full
              >
                Signup
              </button>
            </div>
          )}
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`text-2xl ${isOpen ? 'text-[#040449]' : isScrolled ? 'text-gray-800' : 'text-white'}`}
          >
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            variants={mobileMenuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="fixed top-0 left-0 w-full h-screen bg-white text-gray-800 z-[9999] flex flex-col items-center justify-start overflow-y-auto pt-28 px-6"
          >
            <motion.ul variants={staggerContainerVariants} initial="hidden" animate="visible" className="w-full flex flex-col space-y-6">
              {menuItems.map((item) => (
                <motion.li
                  key={item.name}
                  variants={mobileLinkVariants}
                  onClick={() => handleNavigation(item.path)}
                  className="cursor-pointer text-lg hover:text-red-600"
                >
                  {item.name}
                </motion.li>
              ))}
              <motion.li variants={mobileLinkVariants}>
                {currentUser ? (
                  <button
                    onClick={handleLogout} // Logout on click
                    className="w-full flex items-center justify-center py-3 bg-gray-300 hover:opacity-90 transition-all text-[#040449] rounded-full shadow"
                  >
                    {/* User Avatar or Placeholder for Mobile */}
                    {currentUser.user_metadata?.avatar_url ? (
                      <img
                        src={currentUser.user_metadata.avatar_url}
                        alt="User Avatar"
                        className="h-8 w-8 rounded-full object-cover mr-2"
                        onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/32x32/CCCCCC/333333?text=U'; }} // Fallback
                      />
                    ) : (
                      <div className="h-8 w-8 rounded-full bg-gray-300 flex items-center justify-center text-gray-700 text-md font-bold mr-2">
                        {currentUser.email ? currentUser.email[0].toUpperCase() : 'U'}
                      </div>
                    )}
                    Logout
                  </button>
                ) : (
                  <div className="w-full flex rounded-full overflow-hidden text-white font-semibold text-base mt-8 shadow">
                    <button
                      onClick={() => handleNavigation('/auth')}
                      className="w-1/2 py-3 bg-gray-300 hover:opacity-90 transition-all text-[#040449]"
                    >
                      Login
                    </button>
                    <button
                      onClick={() => handleNavigation('/auth')}
                      className="w-1/2 py-3 bg-[#040449] hover:opacity-90 transition-all"
                    >
                      Signup
                    </button>
                  </div>
                )}
              </motion.li>
            </motion.ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
