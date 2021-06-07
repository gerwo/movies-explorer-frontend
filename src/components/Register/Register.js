import React from 'react';
import Header from '../Header/Header';
import AuthSection from '../AuthSection/AuthSection';

import useForm from '../../hooks/useForm';

import './Register.css';

function Register({
  onRegister,
  isFormDisabled,
}) {
  const {
    values, handleChange,
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
        isFormDisabled={isFormDisabled}
        data={values}>
          <fieldset className="form__fieldset">
            <div className="form__input-container">
              <label className="form__label" htmlFor="name">
                Имя
                <input name="name" className="form__input" required minLength={2} maxLength={30} placeholder="Имя" onChange={handleChange}/>
              </label>
              <span className="form__error"></span>
              <label className="form__label" htmlFor="email">
                E-mail
                <input name="email" type="email" className="form__input" required placeholder="E-mail" onChange={handleChange}/>
              </label>
              <span className="form__error"></span>
              <label className="form__label" htmlFor="email">
                Пароль
                <input name="password" type="password" className="form__input" required placeholder="Пароль" onChange={handleChange}/>
              </label>
              <span className="form__error"></span>
            </div>
          </fieldset>
      </AuthSection>
    </div>
  );
}

export default Register;
