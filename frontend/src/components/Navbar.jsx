import React from 'react';
import { LuArmchair } from "react-icons/lu"; // Ikona kauča

const Navbar = () => {
  // Tvoja paleta boja
    const colors = {
    deepNavy: '#0D0D15', 
    cinemaGold: '#C5A059',
    offWhite: '#E0E0E0'
    };

    return (
    <nav className="navbar navbar-expand-lg navbar-dark shadow-lg" 
        style={{ 
            backgroundColor: colors.deepNavy, 
            borderBottom: `1px solid rgba(197, 160, 89, 0.3)` // Suptilna zlatna linija
        }}>
        <div className="container-fluid px-4">
        
        {/* LOGO */}
        <a className="navbar-brand d-flex align-items-center" href="/" 
            style={{ color: colors.cinemaGold, fontWeight: '500', letterSpacing: '1px' }}>
            <LuArmchair className="me-2" style={{ fontSize: '1.8rem' }} />
            FILMLY
        </a>

        {/* LINKOVI - koristimo font-weight 300 ili 400 za elegantniji izgled */}
        <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto align-items-center">
            <li className="nav-item">
                <a className="nav-link px-3" href="#" style={{ color: colors.offWhite, fontSize: '0.9rem' }}>Movies</a>
            </li>
            <li className="nav-item">
                <a className="nav-link px-3" href="#" style={{ color: colors.offWhite, fontSize: '0.9rem' }}>Top Rated</a>
            </li>
            {/* LOGIN GUMB kao na slici */}
            <li className="nav-item ms-lg-3">
                <button className="btn" 
                        style={{ 
                        backgroundColor: colors.cinemaGold, 
                        color: '#000', 
                        fontSize: '0.85rem',
                        fontWeight: 'bold',
                        borderRadius: '4px',
                        padding: '6px 18px'
                        }}>
                Sign In
                </button>
            </li>
            </ul>
        </div>
        </div>
    </nav>
    );
};

export default Navbar;