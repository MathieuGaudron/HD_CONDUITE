import React, { useState, useEffect } from 'react';
import Document from '../Document';

const Moto = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

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

  const [openSection, setOpenSection] = useState(null);

  const toggleSection = (section) => {
    setOpenSection(openSection === section ? null : section);
  };

  const openModal = (image) => {
    setSelectedImage(image);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <div className="bg-gray-900 text-white min-h-screen p-6 md:p-10">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl md:text-5xl font-extrabold text-center mb-8 md:mb-12 text-red-500">Formules Permis Moto & Scooter</h1>

        <div className={`section-moto grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8 transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
          <div className="lg:col-span-2">
            <div className="bg-gray-800 p-4 md:p-6 rounded-lg shadow-lg mb-6 md:mb-12 transform hover:scale-105 transition-transform duration-300">
              <h2 className="text-xl md:text-2xl font-bold text-red-500 mb-4">Permis Moto A2</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 mb-6 md:mb-12">
                <img 
                  src="/assets/cb500.png" 
                  alt="Permis Moto A2" 
                  className="w-full h-56 sm:h-64 md:h-72 object-cover rounded-lg cursor-pointer transform hover:scale-105 transition-transform duration-300"
                  onClick={() => openModal('/assets/cb500.png')}
                />
                <img 
                  src="/assets/moto_eleve.png" 
                  alt="Permis Moto A2" 
                  className="w-full h-56 sm:h-64 md:h-72 object-cover rounded-lg cursor-pointer transform hover:scale-105 transition-transform duration-300"
                  onClick={() => openModal('/assets/moto_eleve.png')}
                />
              </div>
              <p className="text-lg font-semibold mb-2">Prix : 790€</p>
              <ul className="list-disc list-inside text-gray-200">
                <li>12h de formation plateau</li>
                <li>8h de formation en circulation</li>
                <li>Équipements obligatoires : casque, gants, veste, chaussures</li>
              </ul>
            </div>

            {[{ title: "Passerelle A2 vers A", price: "350€", id: "passerelleA2A", details: [
              "2 heures de théorie", "2 heures de maniement de la moto sur notre piste privée", "3 heures en circulation", "Équipements obligatoires : casque, gants, veste, chaussures"]
            }, {
              title: "Permis Scooter 125cc", price: "350€", id: "permis125cc", details: [
                "7 heures de formation", "Conduite en circulation et plateau", "Évaluation des compétences", "Permis pour scooter 125cc", "Âge minimum : 16 ans"]
            }].map((item) => (
              <div key={item.id} className="bg-gray-800 p-4 md:p-6 rounded-lg shadow-lg mb-6 border cursor-pointer transform hover:scale-105 transition-transform duration-300" onClick={() => toggleSection(item.id)}>
                <h2 className="text-xl md:text-2xl font-bold text-red-500 mb-4">{item.title}</h2>
                <div className={`overflow-hidden transition-all duration-500 ease-in-out ${openSection === item.id ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'}`}>
                  <p className="text-lg font-semibold mb-2">Prix : {item.price}</p>
                  <ul className="list-disc list-inside text-gray-200">
                    {item.details.map((detail, index) => (
                      <li key={index}>{detail}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-gray-800 p-4 md:p-6 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300">
            <Document />
          </div>
        </div>

        {selectedImage && (
          <div className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50 p-4">
            <div className="relative w-full max-w-3xl">
              <img
                src={selectedImage}
                alt="Moto Enlarged"
                className="w-full h-auto object-contain rounded-lg shadow-lg"
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

export default Moto;