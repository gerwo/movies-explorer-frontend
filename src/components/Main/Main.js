import React from 'react';

import Header from '../Header/Header';
import AuthNav from '../AuthNav/AuthNav';
import Navigation from '../Navigation/Navigation';
import Promo from '../Promo/Promo';
import AboutProject from '../AboutProject/AboutProject';
import Techs from '../Techs/Techs';
import AboutMe from '../AboutMe/AboutMe';
import Portfolio from '../Portfolio/Portfolio';
import Footer from '../Footer/Footer';

import './Main.css';

function Main({ isLoggedIn }) {
  return (
    <main className="main">
      <Header mod="header_dark-theme">
      {
        !isLoggedIn ? <AuthNav /> : <Navigation navWhite={true}/>
      }
      </Header>
      <Promo />
      <AboutProject />
      <Techs />
      <AboutMe>
        <Portfolio />
      </AboutMe>
      <Footer></Footer>
    </main>
  );
}

export default Main;
