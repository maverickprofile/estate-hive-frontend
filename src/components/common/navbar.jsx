import React, { useState, useEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const menuItems = [
    'Home',
    'Services',
    'AI Agents',
    'Careers',
    'Blogs',
    'Contact',
    'Log In',
    'Sign Up',
  ];

  // Track scroll to apply background blur + color changes
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'backdrop-blur-md shadow-md' : ''
      }`}
    >
      <div className="relative max-w-[1400px] mx-auto px-4 md:px-10 py-3 flex items-center justify-center">

        {/* Logo pinned to left */}
        <div className="absolute left-4 md:left-20 flex items-center">
          <img
            src="/EH_Logo.svg"
            alt="Estate Hive Logo"
            className="h-10 object-contain"
          />
        </div>

        {/* Desktop Menu */}
        <ul
  className={`hidden md:flex space-x-7 text-[18px]  transition-colors duration-300 ${
    isScrolled ? 'text-white' : 'text-[#2B2A6C]'
  }`}
>

          {menuItems.map((item) => (
            <li
              key={item}
              className="hover:text-[#FF6B00] transition duration-200 cursor-pointer"
            >
              <a href="#">{item}</a>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <div className="absolute right-4 md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle Menu"
            className={`text-xl transition-colors duration-300 ${
              isScrolled ? 'text-[#1F275E]' : 'text-white'
            }`}
          >
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden bg-white/90 backdrop-blur-md shadow-md px-6 py-4">
          <ul className="flex flex-col space-y-4 text-[15px] font-medium text-[#1F275E]">
            {menuItems.map((item) => (
              <li
                key={item}
                className="hover:text-[#FF6B00] transition duration-200 cursor-pointer"
              >
                <a href="#">{item}</a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
