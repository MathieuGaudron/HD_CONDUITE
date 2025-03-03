import React, { useState, useEffect } from 'react';

const Accueil = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const section = document.querySelector('.section-emplacements');
      if (section && window.scrollY + window.innerHeight > section.offsetTop + section.clientHeight / 2) {
        setIsVisible(true);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const images = {
    telegraphe: "/assets/telegraphe.png",
    livry: "/assets/livry.png"
  };

  const openModal = (image) => {
    setSelectedImage(image);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <div className="bg-gray-900 text-white min-h-screen p-4 md:p-10">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 animate-fadeIn">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4 text-red-500">Bienvenue chez HD CONDUITE</h1>
          <p className="text-lg md:text-xl text-gray-300 leading-relaxed max-w-2xl mx-auto">
            Votre partenaire pour réussir votre permis de conduire. Nous offrons des formations de qualité pour le Code de la route, le permis voiture, moto et scooter.
          </p>
        </div>

        <div className={`section-emplacements grid grid-cols-1 md:grid-cols-2 gap-8 mb-12 transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
          {[{
            title: "HD CONDUITE - Paris 20ème",
            image: images.telegraphe,
            address: "28 rue du Télégraphe, 75020 Paris",
            phone: "01 43 49 12 22",
            mobile: "06 60 93 32 13",
            email: "hdconduitebis@gmail.com",
            hours: "Mardi au Vendredi : 11h - 14h | 15h - 19h | Samedi : 10h - 14h",
            map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5248.448389343!2d2.3944835878566724!3d48.87300249742143!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66d9653390c37%3A0x4bd097c3d12c3fd3!2s28%20Rue%20du%20T%C3%A9l%C3%A9graphe%2C%2075020%20Paris%2C%20France!5e0!3m2!1sfr!2sus!4v1724453342499!5m2!1sfr!2sus"
          }, {
            title: "HD CONDUITE - Livry-Gargan",
            image: images.livry,
            address: "38 Boulevard Chanzy, 93190 Livry-Gargan",
            phone: "09 70 98 07 31",
            mobile: "07 53 62 38 79",
            email: "hdconduitelivry@gmail.com",
            hours: "Lundi : 14h - 19h | Mardi au Vendredi : 10h - 13h | 15h - 19h | Samedi : 10h - 15h",
            map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2622.2292862008258!2d2.518056176308911!3d48.91102367133936!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e613bd05ee8031%3A0x6a6daa3ea005a87a!2s38%20Bd%20Chanzy%2C%2093190%20Livry-Gargan%2C%20France!5e0!3m2!1sfr!2sus!4v1724452746316!5m2!1sfr!2sus"
          }].map((location, index) => (
            <div key={index} className="bg-gray-800 p-4 md:p-6 rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-transform duration-300 cursor-pointer" onClick={() => openModal(location.image)}>
              <h3 className="text-xl md:text-2xl font-bold text-red-500">{location.title}</h3>
              <img src={location.image} alt={location.title} className="w-full h-48 md:h-64 object-cover rounded-lg mt-4" />
              <p className="mt-4 text-gray-400 text-sm md:text-base">
                <strong>Adresse :</strong> {location.address}<br />
                <strong>Téléphone :</strong> {location.phone}<br />
                <strong>Mobile :</strong> {location.mobile}<br />
                <strong>Email :</strong> {location.email}
              </p>
              <p className="mt-4 text-gray-400 text-sm md:text-base">
                <strong>Horaires :</strong> {location.hours}
              </p>
              <iframe
                title={location.title}
                src={location.map}
                className="w-full h-56 md:h-72 rounded-lg mt-4"
                allowFullScreen
                loading="lazy">
              </iframe>
            </div>
          ))}
        </div>

        <div className="bg-gray-800 p-6 rounded-lg shadow-lg text-center hover:shadow-xl transform hover:scale-105 transition-transform duration-300">
          <h2 className="text-xl md:text-3xl  font-bold text-red-500 mb-6">Financement Possible</h2>
          <div className="flex flex-wrap justify-center items-center space-x-6 mb-4">
            <img src="/assets/pole-emploi.png" alt="Pôle Emploi" className="w-24 h-24 md:w-32 md:h-32 object-contain" />
            <img src="/assets/mon-compte-formation.png" alt="Mon Compte Formation" className="w-24 h-24 md:w-32 md:h-32 object-contain" />
          </div>
          <p className="bg-red-500 text-white py-3 px-6 rounded-lg shadow-md hover:bg-red-600 transition-all duration-300 font-semibold inline-block">
            Paiement en 3 ou 4 fois possible (À verser avant la date d'examen)
          </p>
          <div className="flex justify-center items-center mt-6">
            <img src="/assets/certification.png" alt="Certification" className="w-24 h-24 md:w-32 md:h-32 object-contain" />
          </div>
        </div>

        {selectedImage && (
          <div className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50 p-4">
            <div className="relative max-w-3xl w-full">
              <img
                src={selectedImage}
                alt="Aperçu"
                className="w-full h-auto max-h-screen object-cover rounded-lg shadow-lg"/>
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

export default Accueil;