import React from 'react';

const Document = () => {
  return (
    <div className="bg-gray-800 p-6 rounded-lg shadow-lg text-center hover:shadow-xl transition-shadow duration-300 mb-12">
      <h2 className="text-3xl font-bold text-red-500 mb-6">Pièces à Fournir pour l'Inscription</h2>
      <ul className="text-gray-300 text-lg space-y-4 text-center pt-2">
        <li>- 4 photos d'identité aux normes ANTS</li>
        <li>- Copie recto verso pièce d'identité</li>
        <li>- Justificatif de domicile de moins de 3 mois</li>
        <li>- Copie de la pièce d'identité de l'hébergeant</li>
        <li>- 1 attestation d'hébergement</li>
        <li>- 2 enveloppes timbrées 50g</li>
        <li className="mt-4 font-bold underline">POUR LES MOINS DE 25 ANS :</li>
        <li>- Copie ASSR2</li>
        <li>- Copie journée d'appel</li>
      </ul>
    </div>
  );
};

export default Document;
