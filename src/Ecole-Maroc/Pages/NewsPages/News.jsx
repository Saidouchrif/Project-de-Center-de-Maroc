import React from "react";
import { Link } from "react-router-dom";
import { FaNewspaper, FaDownload } from "react-icons/fa"; // إضافة أيقونة التحميل
import "./News.css"; // Ajoutez un fichier CSS pour le style si nécessaire.
import logo from '../images/8.jpg';
import logo2 from '../images/9.jpg';
import logo3 from '../images/10.jpg';
import logo4 from '../images/11.jpg';

export default function News() {
  // Exemple d'articles d'actualités (vous pourriez remplacer ces données par une API réelle)
  const newsArticles = [
    {
      id: 1,
      title: "توقيت الزمني",
      description: "يحدد هذا التوقيت الزمني مواعيد جميع الأنشطة والفعاليات التي ستقام في المدرسة، مع مراعاة الجداول الزمنية لجميع الأقسام.",
      imageTitle: "", // عنوان الصورة
      imageLink: logo, // رابط تحميل الصورة
      link: "/news/1",
    },
    {
      id: 2,
      title: "قانون داخلي للمركز",
      description: "ينظم هذا القانون الأنشطة والسلوكيات داخل المركز، لضمان بيئة تعليمية منظمة وآمنة لجميع الطلاب والمعلمين.",
      imageTitle: "", // عنوان الصورة
      imageLink: logo2, // رابط تحميل الصورة
      link: "/news/2",
    },
    {
      id: 3,
      title: "إعلان",
      description: "إعلان رسمي بخصوص الأحداث القادمة أو التغييرات في جدول الأنشطة المدرسية، والذي يتم إبلاغه لجميع الطلاب.",
      imageTitle: "", // عنوان الصورة
      imageLink: logo3, // رابط تحميل الصورة
      link: "/news/3",
    },
    {
      id: 4,
      title: "إعلان عن وقت اجتياز الامتحانات",
      description: "يحتوي هذا الإعلان على التفاصيل الخاصة بمواعيد امتحانات الطلاب وكيفية التحضير لها، إضافة إلى الإرشادات الهامة.",
      imageTitle: "", // عنوان الصورة
      imageLink: logo4, // رابط تحميل الصورة
      link: "/news/4",
    },
    // إضافة بقية المقالات بنفس الطريقة
  ];

  return (
    <div className="news-container">
      <h2 className="news-title">
        <FaNewspaper /> الأخبار
      </h2>
      <div className="news-list">
        {newsArticles.map((article) => (
          <div key={article.id} className="news-item">
            <h3 className="news-item-title">
              <Link >{article.title}</Link>
            </h3>
            <p className="news-item-description">{article.description}</p>
            <div className="news-item-image">
              <p>
                <a href={article.imageLink} download>
                  <FaDownload /> {article.imageTitle}
                </a>
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
