import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaInstagram, FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <header className="bg-black text-gray-100">
      {/* Informations */}
      <div className="bg-gray-900 text-gray-400 py-2">
        <div className="max-w-5xl mx-auto flex justify-center items-center">
          <div className="flex items-center text-red-600 space-x-2">
            <Link to="https://www.instagram.com/hd.conduite/" target="_blank" rel="noopener noreferrer">
              <FaInstagram className="mr-2" />
            </Link>
            <a href="https://www.instagram.com/hd.conduite/" target="_blank" rel="noopener noreferrer">
              <span className="font-bold">HD CONDUITE</span>
            </a>
          </div>
        </div>
      </div>

      <nav className="bg-black shadow-md z-50">
        <div className="max-w-5xl mx-auto flex justify-between items-center p-2">
          <div className="text-3xl font-bold text-red-600">
            <Link to="/" onClick={closeMenu}>
              <img 
                src="/assets/logo_hdconduite.png" 
                alt="HD CONDUITE" 
                className="h-28 w-auto"
                style={{ maxHeight: '100%', objectFit: 'contain' }}/>
            </Link>
          </div>

          <div className="lg:hidden">
            <button onClick={toggleMenu} className="text-gray-300 focus:outline-none">
              {isOpen ? <FaTimes size={28} /> : <FaBars size={28} />}
            </button>
          </div>

          <div
            className={`fixed top-0 right-0 w-64 h-full bg-black transform transition-transform duration-300 ease-in-out ${
              isOpen ? 'translate-x-0' : 'translate-x-full'
            } lg:hidden z-50`}>

            <div className="p-4 flex justify-end">
              <button onClick={closeMenu} className="text-gray-300 focus:outline-none">
                <FaTimes size={28} />
              </button>
            </div>

            <ul className="text-lg font-semibold text-gray-300 p-4">
              <li className="mb-4">
                <Link to="/" onClick={closeMenu} className="hover:text-red-600">
                  ACCUEIL
                </Link>
              </li>
              <li className="mb-4">
                <Link to="/Auto" onClick={closeMenu} className="hover:text-red-600">
                  AUTO
                </Link>
              </li>
              <li className="mb-4">
                <Link to="/Moto" onClick={closeMenu} className="hover:text-red-600">
                  MOTO / SCOOTER
                </Link>
              </li>
            </ul>
          </div>

          {/* Desktop Menu */}
          <ul className="hidden lg:flex lg:space-x-8 text-lg font-semibold text-gray-300 space-y-2 lg:space-y-0">
            <li className="relative group">
              <Link
                to="/"
                className="hover:text-red-600 block lg:inline-block relative after:absolute after:w-0 after:h-[2px] after:bg-red-600 after:left-0 after:bottom-0 after:transition-all after:duration-300 after:ease-in-out group-hover:after:w-full">
                ACCUEIL
              </Link>
            </li>
            <li className="relative group">
              <Link
                to="/Auto"
                className="hover:text-red-600 block lg:inline-block relative after:absolute after:w-0 after:h-[2px] after:bg-red-600 after:left-0 after:bottom-0 after:transition-all after:duration-300 after:ease-in-out group-hover:after:w-full">
                AUTO
              </Link>
            </li>
            <li className="relative group">
              <Link
                to="/Moto"
                className="hover:text-red-600 block lg:inline-block relative after:absolute after:w-0 after:h-[2px] after:bg-red-600 after:left-0 after:bottom-0 after:transition-all after:duration-300 after:ease-in-out group-hover:after:w-full">
                MOTO / SCOOTER
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
