import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './composant/Navbar';
import Accueil from './composant/Onglets/Accueil';
import Auto from './composant/Onglets/Auto'; 
import Moto from './composant/Onglets/Moto';
import Document from './composant/Document';
import Footer from './composant/Footer';

function App() {
  return (
    <Router>
      <div className="relative min-h-screen">
        {/* Navbar */}
        <Navbar />

        <div
          className="fixed inset-0 bg-cover bg-center z-[-1] opacity-70"
          style={{ backgroundImage: "url('/assets/background.png')" }}>
        </div>

        <div className="relative z-10 flex flex-col min-h-screen">
          <div className="flex flex-grow pt-16">
            <div className="flex-grow p-10">
              <Routes>
                <Route path="/" element={<Accueil />} />  
                <Route path="/Auto" element={<Auto />} />  
                <Route path="/Moto" element={<Moto />} />  
                <Route path="/document" element={<Document />} /> 
              </Routes>
            </div>
          </div>
          <Footer />
          
        </div>
      </div>
    </Router>
  );
}

export default App;
