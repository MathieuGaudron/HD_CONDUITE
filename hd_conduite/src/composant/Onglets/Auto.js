import React, { useState, useEffect } from 'react';
import Document from '../Document';

const Auto = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      const section = document.querySelector('.section-infos');
      if (section && window.scrollY + window.innerHeight > section.offsetTop + section.clientHeight / 2) {
        setIsVisible(true);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const [openSection, setOpenSection] = useState(null);

  const toggleSection = (section) => {
    if (openSection === section) {
      setOpenSection(null);
    } else {
      setOpenSection(section);
    }
  };

  const openModal = (image) => {
    setSelectedImage(image);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <div className="bg-gray-900 text-white min-h-screen p-6 sm:p-10">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-center mb-8 sm:mb-12 text-red-500">
          Permis B Manuelle / Automatique
        </h1>

        <div className="bg-yellow-500 text-gray-900 font-semibold p-3 sm:p-4 rounded-lg text-center mb-8 sm:mb-12 shadow-lg">
          <p className="text-lg sm:text-2xl">Les tarifs pour les boîtes manuelle et automatique sont au même prix !</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
          <img 
            src="/assets/c3.png" 
            alt="Voiture C3"
            className="w-full h-48 sm:h-64 md:h-72 object-cover rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300 cursor-pointer"
            onClick={() => openModal('/assets/c3.png')}/>
          <img 
            src="/assets/c3_2.png" 
            alt="Voiture C3 2"
            className="w-full h-48 sm:h-64 md:h-72 object-cover rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300 cursor-pointer"
            onClick={() => openModal('/assets/c3_2.png')}/>
        </div>

        <div className={`section-infos grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>

          <div className="lg:col-span-2">
            <div className="bg-gray-800 p-4 sm:p-6 rounded-lg shadow-lg mb-6 sm:mb-12 transform hover:scale-105 transition-transform duration-300">
              <h2 className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4 text-red-500">Heure d'Évaluation</h2>
              <p className="text-base sm:text-lg">Prix : <span className="font-bold">50€</span></p>
              <p className="text-gray-500 text-sm sm:text-base">En supplément du forfait choisi.</p>
            </div>

            {['formule10h', 'formule20h', 'formule30h', 'Conduite Accompagnée'].map((section, index) => (
              <div 
                key={index} 
                className="bg-gray-800 p-4 sm:p-6 rounded-lg shadow-lg mb-6 border cursor-pointer transform hover:scale-105 transition-transform duration-300"
                onClick={() => toggleSection(section)}>
                <h2 className="text-xl sm:text-2xl font-bold text-red-500 mb-3 sm:mb-4 capitalize">{section.replace('formule', 'Formule ')}</h2>
                <div className={`overflow-hidden transition-all duration-500 ease-in-out ${openSection === section ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'}`}>
                  <p className="text-base sm:text-lg font-semibold mb-2">Prix : {section === 'formule10h' ? '550€' : section === 'formule20h' ? '1100€' : section === 'formule30h' ? '1500€' : '1250€'}</p>
                  <ul className="list-disc list-inside text-gray-200 text-sm sm:text-base">
                    <li>{section === 'formule30h' ? '30h' : '20h'} de leçons de conduite</li>
                    <li>Inscription administrative - Démarche préfecture</li>
                    <li>1 kit pédagogique (Livret d'apprentissage + Fiche de suivi)</li>
                    {section !== 'formule10h' && <li>Frais d'accompagnement et de présentation à l'examen pratique (1 seule présentation)</li>}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-gray-800 p-4 sm:p-6 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300">
            <Document />
          </div>
        </div>

        {selectedImage && (
          <div className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50">
            <div className="relative w-11/12 sm:w-3/4 h-3/4">
              <img
                src={selectedImage}
                alt="Voiture Enlarged"
                className="w-full h-full object-contain rounded-lg shadow-lg"/>
              <button
                onClick={closeModal}
                className="absolute top-2 right-2 text-white text-xl sm:text-2xl font-bold bg-red-500 hover:bg-red-700 rounded-full w-6 h-6 sm:w-8 sm:h-8 flex items-center justify-center">
                &times;
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Auto;