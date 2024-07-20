import React, { useState, useEffect } from 'react';
import logo from '../assets/Icon.png';
import { Link } from 'react-scroll';

// react icons
import { FaTimes, FaBars } from 'react-icons/fa';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  //set toggle menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navItems = [
    { link: 'Home', path: 'home' },
    { link: 'Service', path: 'service' },
    { link: 'About', path: 'about' },
    { link: 'Product', path: 'product' },
    { link: 'Testimonial', path: 'testimonial' },
    { link: 'FAQ', path: 'faq' },
  ];

  return (
    <header className="w-full fixed top-0 left-0 right-0 z-50">
      <nav
        className={`py-4 lg:px-14 px-4 transition-all duration-300 ${
          isSticky ? 'sticky top-0 left-0 right-0 bg-white border-b' : 'bg-transparent'
        }`}
      >
        <div className="flex justify-between items-center">
          <a href="/" className="text-2xl font-semibold flex items-center space-x-3">
            <img src={logo} alt="Logo" className="w-10" />
            <span className="text-[#263238]">NEXCENT</span>
          </a>
          {/* for large devices */}
          <ul className="hidden md:flex space-x-12">
            {navItems.map(({ link, path }) => (
              <Link
                to={path}
                spy={true}
                smooth={true}
                offset={-100}
                key={path}
                className="block text-base text-grey900 cursor-pointer hover:text-brandPrimary first:font-medium"
              >
                {link}
              </Link>
            ))}
          </ul>
          {/* btn for large devices */}
          <div className="hidden lg:flex items-center space-x-4">
            <a
              href="/"
              className="text-brandPrimary border-2 border-[#4CAF50] py-2 px-4 rounded hover:text-grey900"
            >
              Login
            </a>
            <button className="bg-brandPrimary text-white py-2 px-4 rounded hover:bg-neutralDGrey">
              Sign Up
            </button>
          </div>
          {/* nav for mobile */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-neutralDGrey focus:outline-none focus:text-green-500"
            >
              {isMenuOpen ? <FaTimes className="h-6 w-6" /> : <FaBars className="h-6 w-6" />}
            </button>
          </div>
        </div>
        {/* nav items for mobile devices */}
        <div
          className={`space-y-4 px-4 mt-16 py-7 bg-brandPrimary ${
            isMenuOpen ? 'block fixed top-0 right-0 left-0' : 'hidden'
          }`}
        >
          {navItems.map(({ link, path }) => (
            <Link
              to={path}
              spy={true}
              smooth={true}
              offset={-100}
              key={path}
              className="block text-base text-white hover:text-brandPrimary first:font-medium"
            >
              {link}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
