import React, { useState, useEffect } from 'react';
import { Outlet, Link } from 'react-router-dom';
import logo from '../assets/images/logo.png'; // Adjust the filename as needed

function Layout() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      {/* Navigation */}
      <nav
        className={`fixed top-0 w-full z-10 transition-colors duration-300 ${
          scrolled ? 'bg-green-100' : 'bg-white'
        } text-green-600 p-4`}
      >
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <Link to="/">
            <div className="h-12 w-24 overflow-hidden">
              <img
                src={logo}
                alt="ZPEOLFOODS NG Logo"
                className="h-full w-full object-cover object-center scale-200"
              />
            </div>
          </Link>
          <ul className="flex space-x-4">
            <li>
              <Link to="/" className="hover:text-yellow-600 hover:underline font-medium">
                Home
              </Link>
            </li>
            <li>
              <Link to="/products" className="hover:text-yellow-600 hover:underline font-medium">
                Products
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-yellow-600 hover:underline font-medium">
                About
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-yellow-600 hover:underline font-medium">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </nav>
      {/* Page Content */}
      <div className="max-w-6xl mx-auto pt-20 pb-8 flex-grow">
        <Outlet />
      </div>
      {/* Footer */}
      <footer className="bg-green-600 text-white p-8">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between gap-8">
          <div className="flex-1 text-center md:text-left">
            <h3 className="text-lg font-semibold mb-2 text-gray-900">ZPEOLFOODS NG</h3>
            <p className="text-sm text-white">
              Your trusted hub for premium cereals and spices in Nigeria.
            </p>
          </div>
          <div className="flex-1 text-center">
            <h3 className="text-lg font-semibold mb-2 text-gray-900">Contact Us</h3>
            <p className="text-sm text-white">
              Email: zpeolfoods@yahoo.com <br />
              Phone: +234 708 664 4262  <br />
              Address: Ajah junction, Lagos, Nigeria
            </p>
          </div>
          <div className="flex-1 text-center md:text-right">
            <h3 className="text-lg font-semibold mb-2 text-gray-900">Follow Us</h3>
            <ul className="text-sm text-white">
              <li><a href="#" className="hover:text-orange-500 hover:underline">Facebook</a></li>
              <li><a href="#" className="hover:text-orange-500 hover:underline">Instagram</a></li>
              <li><a href="#" className="hover:text-orange-500 hover:underline">Twitter</a></li>
            </ul>
          </div>
        </div>
        <div className="text-center text-xs text-gray-300 mt-8">
          &copy; {new Date().getFullYear()} ZPEOLFOODS NG. All rights reserved.
          <br />
          Designed by <a href="https://ofektomtechnologies.com" className="hover:text-orange-500 hover:underline">Ofektom Technologies</a>
        </div>
      </footer>
    </div>
  );
}

export default Layout;