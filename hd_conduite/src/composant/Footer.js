import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-black text-gray-200 w-full pt-2 pb-2 ">
      <div className="container mx-auto px-4 flex flex-wrap justify-between">

        <div className="w-full sm:w-1/3 mb-8 sm:mb-0 flex flex-col justify-center items-center text-center">
          <h1 className="text-2xl font-bold mb-4 text-red-600">HD CONDUITE</h1>
          <p className="text-gray-400 w-2/3">Votre partenaire pour réussir votre permis de conduire. Nous offrons des formations de qualité pour le Code, le permis voiture, moto et scooter.</p>
        </div>

        <div className="w-full sm:w-1/3 mb-8 sm:mb-0 flex flex-col justify-center items-center text-center">
          <h2 className="text-xl font-bold mb-4">Liens rapides</h2>
          <ul className="list-none">
            <li className="mb-2"><a href="/Auto" className="text-gray-400 hover:text-white">Permis Auto</a></li>
            <li className="mb-2"><a href="/Moto" className="text-gray-400 hover:text-white">Permis Moto / Scooter</a></li>
          </ul>
        </div>

        <div className="w-full sm:w-1/3 flex flex-col justify-center items-center text-center">
          <h2 className="text-xl font-bold mb-4">Contactez-nous</h2>
          <p className="text-gray-400">28 rue du Télégraphe 75020 - Paris</p>
          <p className="text-gray-400">38 Boulevard Chanzy, 93190 Livry-Gargan</p>
          <p className="text-gray-400">Email: hdconduitebis@gmail.com</p>
          <p className="text-gray-400">Téléphone : 01 43 49 12 22</p>
          <p className="text-gray-400">Téléphone : 06 60 93 32 13</p>
        </div>
      </div>

      <div className="border-t border-gray-700 mt-8 pt-4 text-center">
        <p className="text-gray-500">&copy; {new Date().getFullYear()} HD_CONDUITE. Tous droits réservés.</p>
      </div>
    </footer>
  );
};

export default Footer;
