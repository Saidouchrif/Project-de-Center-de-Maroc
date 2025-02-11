import React from 'react';
import logo from '../images/GoogleMapTA.jpg'; // تأكد من أن المسار صحيح
import './Map.css';

export default function Map() {
  return(
    <div className="map-container">
      <div className="text-container">
        <h2 className="instruction-text">
          اضغط على الصورة للانتقال إلى <strong>Google Maps</strong>
        </h2>
        <p className="sub-text">ستتمكن من رؤية الموقع على الخريطة مباشرة.</p>
        <div className="arrow-container">
          <span className="arrow">↓</span> {/* السهم يشير إلى الصورة */}
        </div>
      </div>
      <a href="https://www.google.com/maps?q=G8M2+582, Casablanca, Maroc" target="_blank" rel="noopener noreferrer">
        <img src={logo} alt="Logo" className="map-image" />
      </a>
    </div>
  )
}
