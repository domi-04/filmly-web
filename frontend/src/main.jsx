// src/main.jsx
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import App from './App.jsx'; // Uvezi App

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App /> {/* Sada renderiramo App, a App u sebi sadrži Navbar */}
  </StrictMode>,
)
