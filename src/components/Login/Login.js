import React from 'react';
import Header from '../Header/Header';
import AuthSection from '../AuthSection/AuthSection';

import './Login.css';

function Login() {
  return (
    <>
      <Header mod="header-auth" />
      <AuthSection
        buttonText="Войти"
        caption="Ещё не зарегистрированы? "
        linkPath="/signup"
        linkText="Регистрация"
        sectionTitle="Рады видеть!">
          <fieldset className="form__fieldset">
            <div className="form__input-container">
              <label className="form__label" htmlFor="email">
                E-mail
                <input name="email" type="email" className="form__input" required placeholder="E-mail"/>
              </label>
              <span className="form__error"></span>
              <label className="form__label" htmlFor="email">
                Пароль
                <input name="password" type="password" className="form__input" required placeholder="Пароль"/>
              </label>
              <span className="form__error"></span>
            </div>
          </fieldset>
      </AuthSection>
    </>
  );
}

export default Login;
