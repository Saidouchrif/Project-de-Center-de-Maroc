import React from "react";
import { Link } from "react-router-dom";
import './NotFound.css'; // تأكد من إضافة التأثيرات في ملف CSS الخاص بك.

const NotFound = () => (
  <div className="not-found-container">
    <div className="not-found-content">
      <h1 className="error-title">404 - Page Not Found</h1>
      <p className="error-message">The page you are looking for doesn't exist. Let's get you back on track.</p>
      <Link to="/" className="go-home-button">Go to Home</Link>
    </div>
  </div>
);

export default NotFound;
