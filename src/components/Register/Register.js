import React from 'react';
import Header from '../Header/Header';
import AuthSection from '../AuthSection/AuthSection';

import useForm from '../../hooks/useForm';

import './Register.css';

function Register({
  onRegister,
  isFormDisabled,
  message,
}) {
  const {
    values,
    handleChange,
    errors,
    isValid,
  } = useForm({ name: '', email: '', password: '' });
  return (
    <div className="auth">
      <Header mod="header-auth" />
      <AuthSection
        buttonText="Зарегистрироваться"
        caption="Уже зарегистрированы? "
        linkPath="/signin"
        linkText="Войти"
        sectionTitle="Добро пожаловать!"
        onSubmit={onRegister}
        isValid={isValid}
        isFormDisabled={isFormDisabled}
        data={values}
        message = {message}
        >
          <fieldset className="form__fieldset" disabled={isFormDisabled}>
            <div className="form__input-container">
              <label className="form__label" htmlFor="name">
                Имя
                <input name="name" className="form__input" required minLength={2} maxLength={30} placeholder="Имя" onChange={handleChange} pattern="^[а-яА-ЯЁёa-zA-Z\s\-]+$"/>
              </label>
              <span className="form__error">{errors.name}</span>
              <label className="form__label" htmlFor="email">
                E-mail
                <input name="email" type="email" className="form__input" required placeholder="E-mail" onChange={handleChange} pattern="^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"/>
              </label>
              <span className="form__error">{errors.email}</span>
              <label className="form__label" htmlFor="email">
                Пароль
                <input name="password" type="password" className="form__input" required placeholder="Пароль" onChange={handleChange} minLength={8}/>
              </label>
              <span className="form__error">{errors.password}</span>
            </div>
          </fieldset>
      </AuthSection>
    </div>
  );
}

export default Register;
