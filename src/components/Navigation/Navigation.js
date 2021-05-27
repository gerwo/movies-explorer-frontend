import React, { useState, useEffect } from 'react';
import Menu from '../Menu/Menu';
import MobileMenu from '../MobileMenu/MobileMenu';

function Navigation({ navWhite }) {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const updateWindowSize = () => setWindowWidth(window.innerWidth);

  useEffect(() => {
    window.addEventListener('resize', updateWindowSize);

    return () => window.removeEventListener('resize', updateWindowSize);
  });

  return (
    <>
      {
        (windowWidth > 768) ? <Menu navWhite={navWhite}/> : <MobileMenu navWhite={navWhite}/>
      }
    </>
  );
}
export default Navigation;
