import React from 'react';
import Logo from '../Logo/Logo';
import './Header.css';

function Header({ children, mod }) {
  return (
    <header className={`header ${mod}`}>
      <div className={`header__container ${mod}__container`}>
        <Logo />
        {children}
      </div>
    </header>
  );
}

export default Header;
