import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaHome, FaNewspaper, FaMapMarkedAlt, FaInfoCircle, FaPhoneAlt, FaMoon, FaSun, FaCalendarAlt } from 'react-icons/fa';
import "./Navbar.css";
import logo from './logo.jpg';  // Assurez-vous que le chemin est correct

export default function Navbar() {
  const [darkMode, setDarkMode] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleDarkMode = () => setDarkMode(!darkMode);
  const toggleMenu = () => setMenuOpen(!menuOpen);

  const handleLinkClick = () => {
    // إغلاق القائمة عندما يضغط المستخدم على أي رابط
    setMenuOpen(false);
  };

  return (
    <nav 
      className={`navbar navbar-expand-lg ${darkMode ? 'navbar-dark bg-dark' : 'navbar-light bg-primary'}`}
      dir="rtl"
    >
      <div className="container-fluid">
        {/* Logo et Brand */}
        <Link className="navbar-brand" to="/" onClick={handleLinkClick}>
          <img src={logo} alt="Logo" className="logo-cycle" />
          الفرصة الثانية
        </Link>

        {/* Menu toggler */}
        <button 
          className="navbar-toggler" 
          type="button" 
          onClick={toggleMenu}
          aria-controls="navbarNav"
          aria-expanded={menuOpen}
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navigation menu */}
        <div className={`collapse navbar-collapse ${menuOpen ? 'show' : ''}`} id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link d-flex align-items-center gap-2" to="/" onClick={handleLinkClick}>
                الرئيسية
                <FaHome />
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link d-flex align-items-center gap-2" to="/Programe" onClick={handleLinkClick}>
                البرنامج
                <FaCalendarAlt />
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link d-flex align-items-center gap-2" to="/News" onClick={handleLinkClick}>
                الأخبار
                <FaNewspaper />
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link d-flex align-items-center gap-2" to="/Location" onClick={handleLinkClick}>
                الموقع
                <FaMapMarkedAlt />
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link d-flex align-items-center gap-2" to="/About" onClick={handleLinkClick}>
                عن المدرسة
                <FaInfoCircle />
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link d-flex align-items-center gap-2" to="/Contact" onClick={handleLinkClick}>
                الاتصال
                <FaPhoneAlt />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
