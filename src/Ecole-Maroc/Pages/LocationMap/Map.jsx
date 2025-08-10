import React from 'react';
import logo from '../images/GoogleMapTA.jpg'; 
import './Map.css';
import SEO from '../../components/SEO';

export default function Map() {
  return(
    <>
      <SEO 
        title="موقع المدرسة"
        description="اكتشف موقع مركز الفرصة الثانية على الخريطة. مدرسة تعليمية خاصة تقع في الدار البيضاء، المغرب. اضغط على الصورة للانتقال إلى Google Maps."
        keywords="موقع المدرسة, خريطة المدرسة, عنوان المدرسة, الدار البيضاء, المغرب, Google Maps, مركز الفرصة الثانية, مدرسة تعليمية, تعليم خاص, موقع جغرافي"
        image="/images/GoogleMapTA.jpg"
      />
      
      <div className="map-container">
      <div className="text-container">
        <h2 className="instruction-text">
          اضغط على الصورة للانتقال إلى <strong>Google Maps</strong>
        </h2>
        <p className="sub-text">ستتمكن من رؤية الموقع على الخريطة مباشرة.</p>
        <div className="arrow-container">
          <span className="arrow">↓</span> 
        </div>
      </div>
      <a href="https://www.google.com/maps/place/%D9%85%D8%AF%D8%B1%D8%B3%D8%A9+%D8%A5%D8%A8%D8%AA%D8%AF%D8%A7%D8%A6%D9%8A%D8%A9+%D8%A5%D9%8A%D9%86+%D8%AD%D9%86%D8%A8%D9%84,+Ave+Abdelkader+Torres%D8%8C+%D8%A7%D9%84%D8%AF%D8%A7%D8%B1+%D8%A7%D9%84%D8%A8%D9%8A%D8%B6%D8%A7%D8%A1+20250%E2%80%AD/@33.586685,-7.5623884,18z/data=!4m12!1m5!3m4!2zMzPCsDM1JzEzLjIiTiA3wrAzMyc0Ni40Ilc!8m2!3d33.5869889!4d-7.5628967!3m5!1s0xda7ccde0434a095:0xb6503eb59ef1d7e1!8m2!3d33.587172!4d-7.563149!16s%2Fg%2F11bvtf3wqc?entry=ttu&g_ep=EgoyMDI1MDIwOS4wIKXMDSoJLDEwMjExMjMzSAFQAw%3D%3D" target="_blank" rel="noopener noreferrer">
        <img src={logo} alt="Logo" className="map-image" />
      </a>
    </div>
    </>
  )
}
