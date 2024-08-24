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
    <div className="bg-gray-900 text-white min-h-screen p-10">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-5xl font-extrabold text-center mb-12 text-red-500">
          Permis B Manuelle / Automatique
        </h1>

        {/* Information sur les tarifs */}
        <div className="bg-yellow-500 text-gray-900 font-semibold p-4 rounded-lg text-center mb-12 shadow-lg">
          <p className="text-2xl">Les tarifs pour les boîtes manuelle et automatique sont au même prix !</p>
        </div>

        {/* Images des véhicules */}
        <div className="flex justify-center space-x-6 mb-12">
          <img 
            src="/assets/c3.png" 
            alt="Voiture C3"
            className="w-full h-64 object-cover rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300 cursor-pointer"
            style={{ maxWidth: '550px' }}
            onClick={() => openModal('/assets/c3.png')}
          />
          <img 
            src="/assets/c3_2.png" 
            alt="Voiture C3 2"
            className="w-full h-64 object-cover rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300 cursor-pointer"
            style={{ maxWidth: '550px' }}
            onClick={() => openModal('/assets/c3_2.png')}
          />
        </div>

        {/* Grille avec deux colonnes */}
        <div className={`section-infos grid grid-cols-1 lg:grid-cols-3 gap-8 transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
          {/* Colonne de gauche : Infos (2/3 de la largeur) */}
          <div className="lg:col-span-2">
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg mb-12 transform hover:scale-105 transition-transform duration-300">
            <h2 className="text-2xl font-semibold mb-4 text-red-500">Heure d'Évaluation</h2>
          <p className="text-lg">Prix : <span className="font-bold">50€</span></p>
          <p className="text-gray-500">En supplément du forfait choisi.</p>
            </div>

            {/* Formules */}
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg mb-6 border cursor-pointer transform hover:scale-105 transition-transform duration-300" onClick={() => toggleSection('formule10h')}>
              <h2 className="text-2xl font-bold text-red-500 mb-4">Formule 10H</h2>
              <div className={`overflow-hidden transition-all duration-500 ease-in-out ${openSection === 'formule10h' ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'}`}>
                <p className="text-lg font-semibold mb-2">Prix : 550€</p>
                <ul className="list-disc list-inside text-gray-200">
                  <li>10h de leçons de conduite</li>
                  <li>Inscription administrative - Démarche préfecture</li>
                  <li>1 kit pédagogique (Livret d'apprentissage + Fiche de suivi)</li>
                </ul>
              </div>
            </div>

            <div className="bg-gray-800 p-6 rounded-lg shadow-lg mb-6 border cursor-pointer transform hover:scale-105 transition-transform duration-300" onClick={() => toggleSection('formule20h')}>
              <h2 className="text-2xl font-bold text-red-500 mb-4">Formule 20H</h2>
              <div className={`overflow-hidden transition-all duration-500 ease-in-out ${openSection === 'formule20h' ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'}`}>
                <p className="text-lg font-semibold mb-2">Prix : 1100€</p>
                <ul className="list-disc list-inside text-gray-200">
                  <li>20h de leçons de conduite</li>
                  <li>Inscription administrative - Démarche préfecture</li>
                  <li>1 kit pédagogique (Livret d'apprentissage + Fiche de suivi)</li>
                  <li>Frais d'accompagnement et de présentation à l'examen pratique (1 seule présentation)</li>
                </ul>
              </div>
            </div>

            <div className="bg-gray-800 p-6 rounded-lg shadow-lg mb-6 border cursor-pointer transform hover:scale-105 transition-transform duration-300" onClick={() => toggleSection('formule30h')}>
              <h2 className="text-2xl font-bold text-red-500 mb-4">Formule 30H</h2>
              <div className={`overflow-hidden transition-all duration-500 ease-in-out ${openSection === 'formule30h' ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'}`}>
                <p className="text-lg font-semibold mb-2">Prix : 1500€</p>
                <ul className="list-disc list-inside text-gray-200">
                  <li>30h de leçons de conduite</li>
                  <li>Inscription administrative - Démarche préfecture</li>
                  <li>1 kit pédagogique (Livret d'apprentissage + Fiche de suivi)</li>
                  <li>Frais d'accompagnement et de présentation à l'examen pratique (1 seule présentation)</li>
                </ul>
              </div>
            </div>

            <div className="bg-gray-800 p-6 rounded-lg shadow-lg mb-6 border cursor-pointer transform hover:scale-105 transition-transform duration-300" onClick={() => toggleSection('conduiteAccompagnee')}>
              <h2 className="text-2xl font-bold text-red-500 mb-4">Formule Conduite Accompagnée</h2>
              <div className={`overflow-hidden transition-all duration-500 ease-in-out ${openSection === 'conduiteAccompagnee' ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'}`}>
                <p className="text-lg font-semibold mb-2">Prix : 1250€</p>
                <ul className="list-disc list-inside text-gray-200">
                  <li>20h de leçons de conduite</li>
                  <li>Inscription administrative - Démarche préfecture</li>
                  <li>1 kit pédagogique (Livret d'apprentissage + Fiche de suivi)</li>
                  <li>1 RDV préalable à la fin de la formation initiale (avec accompagnateur)</li>
                  <li>2 RDV pédagogiques (1 à 1000 km et 1 à 3000 km)</li>
                  <li>Frais d'accompagnement et de présentation à l'examen pratique (1 seule présentation)</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Colonne de droite */}
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300">
            <Document />
          </div>
        </div>

        {/* Modal */}
        {selectedImage && (
          <div className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50">
            <div className="relative w-3/4 h-3/4">
              <img
                src={selectedImage}
                alt="Voiture Enlarged"
                className="w-full h-full object-cover rounded-lg shadow-lg"
              />
              <button
                onClick={closeModal}
                className="absolute top-2 right-2 text-white text-2xl font-bold bg-red-500 hover:bg-red-700 rounded-full w-8 h-8 flex items-center justify-center"
              >
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
