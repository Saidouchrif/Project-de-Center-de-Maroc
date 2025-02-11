import React from "react";
import { FaCalendarAlt, FaClock, FaBook } from "react-icons/fa";
import "./Programme.css"; // استيراد ملف الأنماط CSS

export default function Programme() {
  // البرنامج الدراسي المستخرج من الصور
  const schedule = [
    { id: 1, period: "1/10/2024 - 11/10/2024", unit: "La rentrée", topic: "Accueil + Évaluation diagnostique" },
    { id: 2, period: "14/10/2024 - 18/10/2024", unit: "Correction + Soutien", topic: "Révision et exercices" },
    { id: 3, period: "21/10/2024 - 26/10/2024", unit: "Vacances", topic: "Pause scolaire" },
    
    // مثال لوحدة في مادة علوم الحياة والأرض
    { id: 4, period: "28/10/2024 - 1/11/2024", unit: "Nutrition et digestion", topic: "Analyse des aliments, Rôle des enzymes" },
    { id: 5, period: "4/11/2024 - 8/11/2024", unit: "Système digestif", topic: "Organisation de l'appareil digestif" },
    
    // مثال لوحدة في مادة الفيزياء والكيمياء
    { id: 6, period: "11/11/2024 - 15/11/2024", unit: "Matière", topic: "Les atomes et les ions" },
    { id: 7, period: "18/11/2024 - 22/11/2024", unit: "Réactions chimiques", topic: "Réactions des métaux avec l’air" },

    // مثال لوحدة في مادة الرياضيات
    { id: 8, period: "25/11/2024 - 29/11/2024", unit: "Mathématiques", topic: "Les racines carrées et puissances" },
    { id: 9, period: "2/12/2024 - 6/12/2024", unit: "Théorème de Thalès", topic: "Applications et exercices" },

    // إضافة المزيد من الأسابيع وفقًا للجدول
  ];

  return (
    <div className="programme-container">
      {/* عنوان الجدول */}
      <div className="programme-header" dir="ltr">
        <h2 className="programme-title">
          <FaCalendarAlt className="programme-icon" />
          البرنامج الدراسي السنوي
        </h2>
      </div>

      {/* عرض الجدول */}
      <div className="programme-grid">
        {schedule.map((item) => (
          <div key={item.id} className="programme-card">
            <div className="programme-card-content">
              <h3 className="programme-card-title">{item.unit}</h3>
              <p className="programme-card-detail">
                <FaClock className="programme-icon-small" /> {item.period}
              </p>
              <p className="programme-card-detail">
                <FaBook className="programme-icon-small" /> {item.topic}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
