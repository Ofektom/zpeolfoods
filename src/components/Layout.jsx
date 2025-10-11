import React, { useState, useEffect } from 'react';
import { Outlet, Link } from 'react-router-dom';
import logo from '../assets/images/logo.png'; // Adjust if in public/images/

function Layout() {
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <nav
        className={`fixed top-0 w-full z-20 transition-colors duration-300 ${
          scrolled ? 'bg-green-100' : 'bg-white'
        } text-green-600 p-4`}
      >
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <Link to="/" onClick={() => setIsMenuOpen(false)}>
            <div className="h-10 w-20 sm:h-12 sm:w-24 overflow-hidden">
              <img
                src={logo}
                alt="ZPEOLFOODS NG Logo"
                className="h-full w-full object-cover object-center scale-150"
              />
            </div>
          </Link>
          {/* Hamburger Button */}
          <button
            className="md:hidden text-green-600 focus:outline-none"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={isMenuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
              />
            </svg>
          </button>
          {/* Navigation Links */}
          <ul
            className={`${
              isMenuOpen ? 'flex' : 'hidden'
            } md:flex flex-col md:flex-row absolute md:static top-16 left-0 w-full md:w-auto bg-green-100 md:bg-transparent p-4 md:p-0 space-y-4 md:space-y-0 md:space-x-4 z-10`}
          >
            {['Home', 'Products', 'About', 'Contact', 'Blog'].map((item) => (
              <li key={item}>
                <Link
                  to={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                  className="block text-green-600 hover:text-yellow-600 hover:underline font-medium text-lg"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>
      <div className="max-w-6xl mx-auto pt-20 pb-8 flex-grow px-4 sm:px-6">
        <Outlet />
      </div>
      <footer className="bg-green-600 text-white p-6 sm:p-8">
        <div className="max-w-6xl mx-auto flex flex-col gap-6 sm:gap-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 text-center sm:text-left">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">ZPEOLFOODS NG</h3>
              <p className="text-sm text-white">
                Your trusted hub for premium cereals and spices in Nigeria.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Contact Us</h3>
              <p className="text-sm text-white">
                Email: info@zpeolfoodsng.com <br />
                Phone: +234 123 456 7890 <br />
                Address: 123 Spice Street, Lagos, Nigeria
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Follow Us</h3>
              <ul className="text-sm text-white space-y-1">
                <li><a href="#" className="hover:text-orange-500 hover:underline">Facebook</a></li>
                <li><a href="#" className="hover:text-orange-500 hover:underline">Instagram</a></li>
                <li><a href="#" className="hover:text-orange-500 hover:underline">Twitter</a></li>
              </ul>
            </div>
          </div>
          <div className="text-center text-xs text-gray-200 mt-6">
            &copy; {new Date().getFullYear()} ZPEOLFOODS NG. All rights reserved.
            <br />
            Designed by{' '}
            <a href="https://ofektomtechnologies.com" className="hover:text-orange-500 hover:underline">
              Ofektom Technologies
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Layout;