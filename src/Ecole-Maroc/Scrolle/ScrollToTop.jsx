import './ScrollToTop.css'
import React, { useState, useEffect } from 'react';

export default function ScrollToTop() {
  const [showButton, setShowButton] = useState(false);

  
  const handleScroll = () => {
    if (window.scrollY > 300) {
      setShowButton(true);
    } else {
      setShowButton(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <>
      {showButton && (
        <button
          onClick={scrollToTop}
          className="scroll-to-top-btn"
        >
          ↑
        </button>
      )}
    </>
  );
}
