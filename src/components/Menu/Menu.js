import React from 'react';
import { NavLink } from 'react-router-dom';
import './Menu.css';

function Menu({
  children,
  mod = '',
  navigationListMod = '',
  navigationListItemMod = '',
  navigationLinkMod = '',
  navigationLinkActiveMode = '',
  navigationAccountMod = '',
}) {
  return (
    <nav className={`navigation ${mod}`}>
      <ul className={`navigation__list ${navigationListMod}`}>
        {children}
        <li className={`navigation__list-item ${navigationListItemMod}`}>
          <NavLink
            to="/movies"
            className={`navigation__link ${navigationLinkMod}`}
            activeClassName={`navigation__link_active ${navigationLinkActiveMode}`}>
              Фильмы
          </NavLink>
        </li>
        <li className={`navigation__list-item ${navigationListItemMod}`}>
          <NavLink
            to="/saved-movies"
            className={`navigation__link ${navigationLinkMod}`}
            activeClassName={`navigation__link_active ${navigationLinkActiveMode}`}>
              Сохраненные фильмы
          </NavLink>
        </li>
      </ul>
      <div className={`navigation__account-container ${navigationAccountMod}`}>
        <NavLink to="/profile" className="navigation__account-link">Аккаунт</NavLink>
      </div>
    </nav>
  );
}

export default Menu;
