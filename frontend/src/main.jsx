import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './components/Login.jsx';
import Register from './components/Register.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Register />
  </StrictMode>,
)
