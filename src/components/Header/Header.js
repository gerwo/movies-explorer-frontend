import React from 'react';
import Logo from '../Logo/Logo';
import './Header.css';

function Header({ children, mod = '' }) {
  return (
    <header className="header">
      <div className={`header__container ${mod}`}>
        <Logo />
        {children}
      </div>
    </header>
  );
}

export default Header;
