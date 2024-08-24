import React, { useState } from 'react';
import Document from '../Document';

const Auto = () => {
  const [openSection, setOpenSection] = useState(null);

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
        <h1 className="text-5xl font-extrabold text-center mb-12 text-red-500">
          Permis B Manuelle / Automatique
        </h1>

        {/* Information sur les tarifs */}
        <div className="bg-yellow-500 text-gray-900 font-semibold p-4 rounded-lg text-center mb-12 shadow-lg">
          <p className="text-2xl">Les tarifs pour les boîtes manuelle et automatique sont au même prix !</p>
        </div>

        {/* Images des véhicules */}
        <div className="flex justify-center space-x-4 mb-12">
          <img 
            src="/assets/c3.png" 
            alt="Voiture C3"
            className="w-full h-64 object-cover rounded-lg shadow-lg"
            style={{ maxWidth: '550px' }}
          />
          <img 
            src="/assets/c3_2.png" 
            alt="Voiture C3 2"
            className="w-full h-64 object-cover rounded-lg shadow-lg"
            style={{ maxWidth: '550px' }}
          />
        </div>

        {/* Grille avec deux colonnes */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Colonne de gauche : Infos (2/3 de la largeur) */}
          <div className="lg:col-span-2">
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg mb-12">
              <h2 className="text-2xl font-semibold mb-4 text-red-500">Comprenant :</h2>
              <ul className="list-disc list-inside text-gray-300 text-lg space-y-4">
                <li>Forfait code</li>
                <li>Livret d'apprentissage + mémo vérif</li>
                <li>Évaluation de départ</li>
                <li>Heures de conduite (de 8h à 20h du lundi au samedi)</li>
                <li className="font-bold text-yellow-500 mt-4">FRAIS ADMINISTRATIFS : (INCLUS)</li>
                <li className="text-gray-400 mt-2">FORFAIT CODE (INCLUS)</li>
              </ul>
            </div>

            {/* Formules */}
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg mb-6 border cursor-pointer" onClick={() => toggleSection('formule10h')}>
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

            <div className="bg-gray-800 p-6 rounded-lg shadow-lg mb-6 border cursor-pointer" onClick={() => toggleSection('formule20h')}>
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

            <div className="bg-gray-800 p-6 rounded-lg shadow-lg mb-6 border cursor-pointer" onClick={() => toggleSection('formule30h')}>
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

            <div className="bg-gray-800 p-6 rounded-lg shadow-lg mb-6 border cursor-pointer" onClick={() => toggleSection('conduiteAccompagnee')}>
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
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
            <Document />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Auto;
