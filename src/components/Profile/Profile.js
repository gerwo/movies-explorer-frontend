import React, { useContext } from 'react';
import Header from '../Header/Header';
import Navigation from '../Navigation/Navigation';
import Section from '../Section/Section';
import Form from '../Form/Form';

import CurrentUserContext from '../../contexts/CurrentUserContext';
import useForm from '../../hooks/useForm';

import './Profile.css';

function Profile({
  onSignout,
  onUpdateProfile,
  isLoggedIn,
  isFormDisabled,
}) {
  const currentUser = useContext(CurrentUserContext);

  const initValues = { name: currentUser.name, email: currentUser.email };

  const {
    values, handleChange, errors, isValid,
  } = useForm(initValues);

  const isProfileValid = isValid
    && (values.name !== initValues.name || values.email !== initValues.email);

  return (
    <>
      <Header mod="header-authorized">
        <Navigation/>
      </Header>
      <Section mod="profile" sectionTitleMod="profile__title" sectionTitle='Привет, Роман!'>
        <Form
          buttonText="Редактировать"
          submitButtonMod="form__submit-button_section_profile"
          linkPath="/"
          linkText="Выйти из аккаунта"
          linkMod="form__link_type_exit"
          onLinkClick={onSignout}
          data={values}
          onSubmit={onUpdateProfile}
          isLoggedIn={isLoggedIn}
          isValid={isProfileValid}
        >
          <fieldset className="form__containter form__containter_section_profile" disabled={isFormDisabled}>
            <div className="form__input-container form__input-container_section_profile">
              <label className="form__label form__label_section_profile" htmlFor="name">
                Имя
                <input name="name" className="form__input form__input_section_profile" required minLength={2} maxLength={30} value={values.name} onChange={handleChange}/>
              </label>
              <span className="form__error">{errors.name}</span>
            </div>
            <div className="form__input-container">
              <label className="form__label form__label_section_profile" htmlFor="email">
                Почта
                <input name="email" type="email" className="form__input form__input_section_profile" required value={values.email} onChange={handleChange}/>
              </label>
              <span className="form__error">{errors.email}</span>
            </div>
          </fieldset>
        </Form>
      </Section>
    </>
  );
}

export default Profile;
