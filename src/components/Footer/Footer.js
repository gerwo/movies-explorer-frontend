import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__container">
        <p className="footer__text">Учебный проект Яндекс.Практикум х BeatFilm.</p>
        <div className="footer__content-info">
          <div className="footer__copy">&copy; {new Date().getFullYear()}</div>
          <nav className="footer__nav">
            <Link to="#" className="footer__nav-link">Яндекс.Практикум</Link>
            <Link to="#" className="footer__nav-link">Github</Link>
            <Link to="#" className="footer__nav-link">Facebook</Link>
          </nav>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
