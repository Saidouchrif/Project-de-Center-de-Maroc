import React from "react";
import { Link } from "react-router-dom";
import { FaNewspaper, FaDownload } from "react-icons/fa"; 
import "./News.css"; 
import logo from '../images/8.jpg';
import logo2 from '../images/9.jpg';
import logo3 from '../images/10.jpg';
import logo4 from '../images/11.jpg';

export default function News() {
  const newsArticles = [
    {
      id: 1,
      title: "توقيت الزمني",
      description: "يحدد هذا التوقيت الزمني مواعيد جميع الأنشطة والفعاليات التي ستقام في المدرسة، مع مراعاة الجداول الزمنية لجميع الأقسام.",
      imageTitle: "", 
      imageLink: logo, 
      link: "/news/1",
    },
    {
      id: 2,
      title: "قانون داخلي للمركز",
      description: "ينظم هذا القانون الأنشطة والسلوكيات داخل المركز، لضمان بيئة تعليمية منظمة وآمنة لجميع الطلاب والمعلمين.",
      imageTitle: "", 
      imageLink: logo2, 
      link: "/news/2",
    },
    {
      id: 3,
      title: "إعلان",
      description: "إعلان رسمي بخصوص الأحداث القادمة أو التغييرات في جدول الأنشطة المدرسية، والذي يتم إبلاغه لجميع الطلاب.",
      imageTitle: "", 
      imageLink: logo3, 
      link: "/news/3",
    },
    {
      id: 4,
      title: "إعلان عن وقت اجتياز الامتحانات",
      description: "يحتوي هذا الإعلان على التفاصيل الخاصة بمواعيد امتحانات الطلاب وكيفية التحضير لها، إضافة إلى الإرشادات الهامة.",
      imageTitle: "", 
      imageLink: logo4,
      link: "/news/4",
    },
   
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
