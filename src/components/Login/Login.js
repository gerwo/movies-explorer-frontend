import React from 'react';
import Header from '../Header/Header';
import AuthSection from '../AuthSection/AuthSection';

import useForm from '../../hooks/useForm';

import './Login.css';

function Login({ onLogin, message }) {
  const {
    values,
    handleChange,
    errors,
    isValid,
  } = useForm({ email: '', password: '' });
  return (
    <>
      <Header mod="header-auth" />
      <AuthSection
        buttonText="Войти"
        caption="Ещё не зарегистрированы? "
        linkPath="/signup"
        linkText="Регистрация"
        sectionTitle="Рады видеть!"
        onSubmit={onLogin}
        isValid={isValid}
        data={values}
        message = {message}>
          <fieldset className="form__fieldset">
            <div className="form__input-container">
              <label className="form__label" htmlFor="email">
                E-mail
                <input name="email" type="email" className="form__input" required placeholder="E-mail" onChange={handleChange} pattern="^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"/>
              </label>
              <span className="form__error">{errors.email}</span>
              <label className="form__label" htmlFor="email">
                Пароль
                <input name="password" type="password" className="form__input" required onChange={handleChange} placeholder="Пароль" minLength={8}/>
              </label>
              <span className="form__error">{errors.password}</span>
            </div>
          </fieldset>
      </AuthSection>
    </>
  );
}

export default Login;
