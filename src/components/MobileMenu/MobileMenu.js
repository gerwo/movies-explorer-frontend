import React from 'react';
import { NavLink } from 'react-router-dom';
import Menu from '../Menu/Menu';
import './MobileMenu.css';

const MobileMenu = () => (
  <div className="mobile-menu">
    <input className="mobile-menu__checkbox" type="checkbox" id="checkbox" />
    <label className="mobile-menu__label" htmlFor="checkbox">
      <span className="mobile-menu__button" />
    </label>

    <div className="mobile-menu__navigation-container">
      <Menu
        mod="mobile-menu__navigation"
        navigationListMod="mobile-menu__navigation-list"
        navigationListItemMod="mobile-menu__navigation-list-item"
        navigationLinkMod="mobile-menu__navigation-link"
        navigationLinkActiveMode="navigation__mobile-link_active"
        navigationAccountMod="navigation__mobile-account-container"
      >
        <li className="navigation__list-item mobile-menu__navigation-list-item">
          <NavLink exact to="/" className="navigation__link mobile-menu__navigation-link" activeClassName="navigation__mobile-link_active">Главная</NavLink>
        </li>
      </Menu>
    </div>
  </div>
);

export default MobileMenu;
