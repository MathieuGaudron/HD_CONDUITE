import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaPhoneAlt, FaEnvelope, FaInstagram, FaBars, FaTimes } from 'react-icons/fa';

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
        <div className="max-w-5xl mx-auto flex justify-center items-center space-x-6">
          <div className="flex items-center">
            <FaPhoneAlt className="mr-2" />
            <span>01 43 49 12 22</span>
          </div>
          <div className="flex items-center">
            <FaPhoneAlt className="mr-2" />
            <span>06 60 93 32 13</span>
          </div>

          <div className="flex items-center">
            <FaEnvelope className="mr-2" />
            <span>hdconduitebis@gmail.com</span>
          </div>

          <div className="flex items-center text-red-600 space-x-2">
            <Link to="https://www.instagram.com/hd.conduite/" target="_blank" rel="noopener noreferrer">
              <FaInstagram />
            </Link>
            <a href="https://www.instagram.com/hd.conduite/" target="_blank" rel="noopener noreferrer">
              <span className="font-bold">HD CONDUITE</span>
            </a>
          </div>
        </div>
      </div>

      <nav className="bg-black shadow-md z-50">
        <div className="max-w-5xl mx-auto flex justify-between items-center p-4">
          <div className="text-3xl font-bold text-red-600">
            <Link to="/" onClick={closeMenu}>HD CONDUITE</Link>
          </div>

          <div className="lg:hidden">
            <button onClick={toggleMenu} className="text-gray-300 focus:outline-none">
              {isOpen ? <FaTimes size={28} /> : <FaBars size={28} />}
            </button>
          </div>

          <ul
            className={`${
              isOpen ? 'block' : 'hidden'
            } lg:flex lg:space-x-8 text-lg font-semibold text-gray-300 space-y-2 lg:space-y-0`}
          >
            <li className="relative group">
              <Link
                to="/"
                onClick={closeMenu}
                className="hover:text-red-600 block lg:inline-block relative after:absolute after:w-0 after:h-[2px] after:bg-red-600 after:left-0 after:bottom-0 after:transition-all after:duration-300 after:ease-in-out group-hover:after:w-full"
              >
                ACCUEIL
              </Link>
            </li>

            {/* Lien direct vers Auto.js */}
            <li className="relative group">
              <Link
                to="/Auto"
                onClick={closeMenu}
                className="hover:text-red-600 block lg:inline-block relative after:absolute after:w-0 after:h-[2px] after:bg-red-600 after:left-0 after:bottom-0 after:transition-all after:duration-300 after:ease-in-out group-hover:after:w-full"
              >
                AUTO
              </Link>
            </li>

            {/* Lien direct vers Moto.js */}
            <li className="relative group">
              <Link
                to="/Moto"
                onClick={closeMenu}
                className="hover:text-red-600 block lg:inline-block relative after:absolute after:w-0 after:h-[2px] after:bg-red-600 after:left-0 after:bottom-0 after:transition-all after:duration-300 after:ease-in-out group-hover:after:w-full"
              >
                MOTO / SCOOTER
              </Link>
            </li>

            <li className="relative group">
              <Link
                to="/contact"
                onClick={closeMenu}
                className="hover:text-red-600 block lg:inline-block relative after:absolute after:w-0 after:h-[2px] after:bg-red-600 after:left-0 after:bottom-0 after:transition-all after:duration-300 after:ease-in-out group-hover:after:w-full"
              >
                CONTACT
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
