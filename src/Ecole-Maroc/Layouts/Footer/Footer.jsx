import React from "react";
import { Link } from "react-router-dom";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer bg-dark text-white py-4">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <h5>الفرصة الثانية</h5>
            <p>© 2025 مركز الفرصة الثانية. جميع الحقوق محفوظة</p>
          </div>
          <div className="col-md-4">
            <h5>روابط سريعة</h5>
            <ul className="list-unstyled">
              <li><Link to="/" className="text-white">الرئيسية</Link></li>
              <li><Link to="/News" className="text-white">الأخبار</Link></li>
              <li><Link to="/Location" className="text-white">الموقع</Link></li>
              <li><Link to="/About" className="text-white">عن المدرسة</Link></li>
              <li><Link to="/Contact" className="text-white">الاتصال</Link></li>
            </ul>
          </div>
          <div className="col-md-4">
            <h5>تابعنا</h5>
            <div className="social-icons">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-white me-3">
                <FaFacebookF />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-white me-3">
                <FaTwitter />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-white me-3">
                <FaInstagram />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-white">
                <FaLinkedinIn />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
