import React from "react";
import './Contact.css'; // Importation du fichier CSS

const Contact = () => (
  <div className="contact-container">
    <h1 className="contact-title">📩 تواصل معنا</h1>
    
    <div className="contact-info">
      <p className="contact-description">
        نحن سعداء بالتواصل معكم! إذا كان لديكم أي استفسارات أو اقتراحات أو تحتاجون إلى معلومات إضافية، لا تترددوا في مراسلتنا عبر البريد الإلكتروني أو الاتصال بنا.
      </p>

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
);

export default Contact;
