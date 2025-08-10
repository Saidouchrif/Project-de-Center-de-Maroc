import React, { useState, useEffect } from 'react';
import logo from '../images/5.jpg';
import logo2 from '../images/Photopro.jpg';
import './Home.css';
import About from '../AboutPages/About';
import Programme from '../ProgrammePages/Programme';
import News from '../NewsPages/News';
import SEO from '../../components/SEO';
import StructuredData from '../../components/StructuredData';

export default function Home() {
  const [showPages, setShowPages] = useState(false);
  const [currentLogo, setCurrentLogo] = useState(logo); 

  useEffect(() => {
    const logos = [logo];
    let index = 0;

    const logoInterval = setInterval(() => {
      setCurrentLogo(logos[index]);
      index = (index + 1) % logos.length; 
    }, 3500); 

    return () => clearInterval(logoInterval); 
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
      <SEO 
        title="الرئيسية"
        description="مرحباً بكم في مركز الفرصة الثانية - مدرسة تعليمية خاصة في المغرب تقدم برامج تعليمية حديثة ومهنية. اكتشفوا برامجنا في النجارة والعلوم والرياضيات."
        keywords="مركز الفرصة الثانية, مدرسة مغربية, تعليم خاص, برامج تعليمية, نجارة, علوم, رياضيات, تعليم مهني, الدار البيضاء, المغرب, مدرسة ابتدائية, تعليم عالي الجودة, الفرصة الثانية للتعلم, الصفحة الرئيسية"
        image="/images/5.jpg"
      />
      
      <StructuredData type="organization" />
      <StructuredData type="school" />
      
      <div className="home-container" style={{ backgroundImage: `url(${currentLogo})` }}>
        <h1 className="home-title">الفرصة الثانية</h1>
      </div>

     
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

      <div className="pages">
        <Programme />
        <News />
        <About />
      </div>

      <div className="developers-section">
  <h1>مطورون الموقع</h1>
  <p>فريقنا يعمل بكل جهد لتقديم أفضل تجربة لكم. شكرًا لكم على دعمكم المستمر!</p>


  <p className="developer-note desktop">
  واستكشاف المزيد عن خلفياتهم ومهاراتهم المهنية
  <strong>LinkedIn</strong>
  ندعوكم للنقر على الصورة أدناه للانتقال إلى حساب المطور على
</p>

<p className="developer-note mobile">
 <strong>LinkedIn</strong>  اضغط على الصورة لتذهب إلى 
</p>


  
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
