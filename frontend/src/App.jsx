// src/App.jsx
import React from 'react';
import MyNavbar from './components/Navbar'; // Uvozimo tvoj novi navbar
import './App.css';

function App() {
  return (
    <div className="min-vh-100" style={{ backgroundColor: '#0D0D15' }}>
      {/* Ovdje ubacujemo Navbar */}
      <MyNavbar />

      {/* Glavni sadržaj stranice */}
      <main className="container-fluid">
        {/* Ovdje će ići tvoj Search i Cinema dvorana */}
        <div className="text-center text-white mt-5">

        </div>
      </main>
    </div>
  );
}

export default App;