import React, { useState, useEffect } from 'react';
import logo from '../images/5.jpg';
import logo2 from '../images/Photopro.jpg';
import logo3 from '../images/1.jpg';
import logo4 from '../images/2.jpg';
import logo5 from '../images/3.jpg';
import logo6 from '../images/4.jpg';
import logo7 from '../images/5.jpg';
import logo8 from '../images/6.jpg';
import logo9 from '../images/7.jpg';
import logo10 from '../images/444.jpg';
import logo11 from '../images/111.jpg';
import logo12 from '../images/333.jpg';
import logo13 from '../images/555.jpg';
import './Home.css';
import About from '../AboutPages/About';
import Programme from '../ProgrammePages/Programme';
import News from '../NewsPages/News';

export default function Home() {
  const [showPages, setShowPages] = useState(false);
  const [currentLogo, setCurrentLogo] = useState(logo); // Default logo

  useEffect(() => {
    const logos = [logo, logo3, logo4, logo12 ,logo7, logo5, logo6, logo8, logo9, logo10, logo11 , logo13];
    let index = 0;

    const logoInterval = setInterval(() => {
      setCurrentLogo(logos[index]);
      index = (index + 1) % logos.length; // Loop back to the first logo
    }, 1000); // Change logo every 1 second

    return () => clearInterval(logoInterval); // Cleanup the interval when component unmounts
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > window.innerHeight * 0.5) {
        setShowPages(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Section d’accueil avec image et titre animé */}
      <div className="home-container" style={{ backgroundImage: `url(${currentLogo})` }}>
        <h1 className="home-title">الفرصة الثانية</h1>
      </div>

      {/* Contenu des autres pages après le défilement */}
      <div className={`pages-container ${showPages ? 'show' : ''}`}>
        <h2>صفحات الموقع</h2>
        <p>مرحبًا بكم في موقعنا، استكشفوا جميع الأقسام المتاحة</p>
        <div className="pages-grid">
          <div className="page-card">
            <h3>البرنامج</h3>
            <p>تعرف على برامجنا التعليمية والمهنية</p>
          </div>
          <div className="page-card">
            <h3>الأخبار</h3>
            <p>اطلع على آخر الأخبار والمستجدات</p>
          </div>
          <div className="page-card">
            <h3>من نحن</h3>
            <p>تعرف على رؤيتنا ورسالتنا</p>
          </div>
        </div>
      </div>

      {/* Sections des pages */}
      <div className="pages">
        <Programme />
        <News />
        <About />
      </div>

      <br />
      <br />
      <br />

      {/* Section développeurs */}
      {/* Section développeurs */}
      <div className="developers-section">
  <h1>مطورون الموقع</h1>
  <p>فريقنا يعمل بكل جهد لتقديم أفضل تجربة لكم. شكرًا لكم على دعمكم المستمر!</p>

  {/* الفقرة المضافة */}
  <p className="developer-note desktop">
  واستكشاف المزيد عن خلفياتهم ومهاراتهم المهنية
  <strong>LinkedIn</strong>
  ندعوكم للنقر على الصورة أدناه للانتقال إلى حساب المطور على
</p>

<p className="developer-note mobile">
 <strong>LinkedIn</strong>  اضغط على الصورة لتذهب إلى 
</p>


  {/* صور المطورين */}
  <div className="developers-images">
    <div className="developer">
      <a href="https://www.linkedin.com/in/said-ouchrif-990947194/" target="_blank" rel="noopener noreferrer">
        <img src={logo2} alt="Développeur" loading="lazy" />
      </a>
      <p>المطور</p>
    </div>
  </div>
</div>


    </>
  );
}
