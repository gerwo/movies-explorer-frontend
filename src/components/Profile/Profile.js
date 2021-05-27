import React from 'react';
import Header from '../Header/Header';
import Navigation from '../Navigation/Navigation';
import Section from '../Section/Section';
import Form from '../Form/Form';

import './Profile.css';

function Profile() {
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
        >
          <div className="form__containter form__containter_section_profile">
            <div className="form__input-container form__input-container_section_profile">
              <label className="form__label form__label_section_profile" htmlFor="name">
                Имя
                <input name="name" className="form__input form__input_section_profile" required minLength={2} maxLength={30}/>
              </label>
              <span className="form__error"></span>
            </div>
            <div className="form__input-container">
              <label className="form__label form__label_section_profile" htmlFor="email">
                Почта
                <input name="email" type="email" className="form__input form__input_section_profile" required/>
              </label>
              <span className="form__error"></span>
            </div>
          </div>
        </Form>
      </Section>
    </>
  );
}

export default Profile;
