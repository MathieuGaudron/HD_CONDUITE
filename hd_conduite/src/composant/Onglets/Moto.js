import React, { useState, useEffect } from 'react';
import Document from '../Document';

const Moto = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const section = document.querySelector('.section-moto');
      if (section && window.scrollY + window.innerHeight > section.offsetTop + section.clientHeight / 2) {
        setIsVisible(true);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [openSection, setOpenSection] = useState(null);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const toggleSection = (section) => {
    if (openSection === section) {
      setOpenSection(null);
    } else {
      setOpenSection(section);
    }
  };

  return (
    <div className="bg-gray-900 text-white min-h-screen p-10">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-5xl font-extrabold text-center mb-12 text-red-500">Formules Permis Moto & Scooter</h1>

        {/* Grille avec deux colonnes */}
        <div className={`section-moto grid grid-cols-1 lg:grid-cols-3 gap-8 transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
          {/* Colonne de gauche : Infos (2/3 de la largeur) */}
          <div className="lg:col-span-2">
            {/* Informations sur le permis A2 */}
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg mb-12 transform hover:scale-105 transition-transform duration-300">
              <h2 className="text-2xl font-bold text-red-500 mb-4">Permis Moto A2</h2>
              <div className="flex justify-center space-x-6 mb-12">
                <img 
                  src="/assets/cb500.png" 
                  alt="Permis Moto A2" 
                  className="w-full h-72 object-cover rounded-lg cursor-pointer"
                  onClick={openModal}/>
                <img 
                  src="/assets/moto_eleve.png" 
                  alt="Permis Moto A2" 
                  className="w-full h-72 object-cover rounded-lg cursor-pointer"
                  onClick={openModal}/>
              </div>
              <p className="text-lg font-semibold mb-2">Prix : 790€</p>
              <ul className="list-disc list-inside text-gray-200">
                <li>12h de formation plateau</li>
                <li>8h de formation en circulation</li>
                <li>Équipements obligatoires : casque, gants, veste, chaussures</li>
              </ul>
            </div>

            {/* Passerelle A2 vers A avec toggle */}
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg mb-6 border cursor-pointer transform hover:scale-105 transition-transform duration-300" onClick={() => toggleSection('passerelleA2A')}>
              <h2 className="text-2xl font-bold text-red-500 mb-4">Passerelle A2 vers A</h2>
              <div className={`overflow-hidden transition-all duration-500 ease-in-out ${openSection === 'passerelleA2A' ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'}`}>
                <p className="text-lg font-semibold mb-2">Prix : 350€</p>
                <ul className="list-disc list-inside text-gray-200">
                  <li>2 heures de théorie</li>
                  <li>2 heures de maniement de la moto sur notre piste privée</li>
                  <li>3 heures en circulation</li>
                  <li>Équipements obligatoires : casque, gants, veste, chaussures</li>
                </ul>
              </div>
            </div>

            {/* Permis Scooter 125cc avec toggle */}
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg mb-6 border cursor-pointer transform hover:scale-105 transition-transform duration-300" onClick={() => toggleSection('permis125cc')}>
              <h2 className="text-2xl font-bold text-red-500 mb-4">Permis Scooter 125cc</h2>
              <div className={`overflow-hidden transition-all duration-500 ease-in-out ${openSection === 'permis125cc' ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'}`}>
                <p className="text-lg font-semibold mb-2">Prix : 350€</p>
                <ul className="list-disc list-inside text-gray-200">
                  <li>7 heures de formation</li>
                  <li>Conduite en circulation et plateau</li>
                  <li>Évaluation des compétences</li>
                  <li>Permis pour scooter 125cc</li>
                  <li>Âge minimum : 16 ans</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Colonne de droite : Documents (1/3 de la largeur) */}
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300">
            <Document />
          </div>
        </div>

        {/* Modal */}
        {isModalOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50">
            <div className="relative w-3/4 h-3/4">
              <img
                src="/assets/cb500.png"
                alt="Moto A2 Enlarged"
                className="w-full h-full object-cover rounded-lg shadow-lg"/>
              <button
                onClick={closeModal}
                className="absolute top-2 right-2 text-white text-2xl font-bold bg-red-500 hover:bg-red-700 rounded-full w-8 h-8 flex items-center justify-center">
                &times;
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Moto;
