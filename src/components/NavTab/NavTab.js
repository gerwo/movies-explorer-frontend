import React from 'react';
import './NavTab.css';
import { HashLink as Link } from 'react-router-hash-link';

function NavTab() {
  return (
    <nav className="nav-tab">
      <div className="nav-tab__container">
        <Link to="#about-project" className="nav-tab__link">О проекте</Link>
        <Link to="#techs" className="nav-tab__link">Технологии</Link>
        <Link to="#about-me" className="nav-tab__link">Студент</Link>
      </div>
    </nav>
  );
}

export default NavTab;
