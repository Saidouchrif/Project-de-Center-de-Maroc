import React from "react";
import './Contact.css';
import SEO from '../../components/SEO';

const Contact = () => (
  <>
    <SEO 
      title="تواصل معنا"
      description="تواصل مع مركز الفرصة الثانية - مدرسة تعليمية خاصة في المغرب. اتصل بنا عبر البريد الإلكتروني أو الهاتف للحصول على معلومات حول برامجنا التعليمية والمهنية."
      keywords="تواصل معنا, اتصل بنا, مركز الفرصة الثانية, مدرسة مغربية, تعليم خاص, البريد الإلكتروني, رقم الهاتف, ساعات العمل, الدار البيضاء, المغرب, معلومات الاتصال"
      image="/images/logo.jpg"
    />
    
    <div className="contact-container">
      <h1 className="contact-title">📩 تواصل معنا</h1>
      
      <div className="contact-info">
        <p className="contact-description">
          نحن سعداء بالتواصل معكم! إذا كان لديكم أي استفسارات أو اقتراحات أو تحتاجون إلى معلومات إضافية، لا تترددوا في مراسلتنا عبر البريد الإلكتروني أو الاتصال بنا.
        </p>
        <div className="contact-box">
          <p className="contact-text">✉️ البريد الإلكتروني:</p>
          <a href="mailto:ibnhanbal49@gmail.com" className="contact-email">
          ibnhanbal49@gmail.com
          </a>
        </div>
        <div className="contact-box">
          <p className="contact-text">📞 رقم الهاتف:</p>
          <a href="tel:+212529590183" className="contact-phone">
              83 01 59 29 5 212+
          </a>
        </div>

        <div className="contact-box">
          <p className="contact-text">⏳ وقت الاستجابة:</p>
          <p>نحن نحاول الرد في أقرب وقت ممكن، عادة خلال 24 ساعة.</p>
        </div>

        <div className="contact-box">
          <p className="contact-text">📆 ساعات العمل:</p>
          <p>من الأحد إلى الخميس - 8:30 صباحًا حتى 12:30 مساءً</p>
        </div>
      </div>

      <div className="contact-footer">
        <p>شكرًا لثقتكم بنا! 😊</p>
      </div>
    </div>
  </>
);

export default Contact;
