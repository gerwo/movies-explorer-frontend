import React from 'react';
import Header from '../Header/Header';
import AuthSection from '../AuthSection/AuthSection';

import './Register.css';

function Register() {
  return (
    <div className="auth">
      <Header mod="header-auth" />
      <AuthSection
        buttonText="Зарегистрироваться"
        caption="Уже зарегистрированы? "
        linkPath="/signin"
        linkText="Войти"
        sectionTitle="Добро пожаловать!">
          <fieldset className="form__fieldset">
            <div className="form__input-container">
              <label className="form__label" htmlFor="name">
                Имя
                <input name="name" className="form__input" required minLength={2} maxLength={30} placeholder="Имя"/>
              </label>
              <span className="form__error"></span>
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
    </div>
  );
}

export default Register;
