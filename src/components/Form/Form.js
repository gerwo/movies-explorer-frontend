import React from 'react';
import { Link } from 'react-router-dom';
import './Form.css';

function Form({
  children,
  submitButtonMod = '',
  buttonText,
  caption = '',
  linkPath,
  linkText,
  linkMod = '',
  onSubmit,
  isFormDisabled,
  isValid,
  data = null,
  message,
}) {
  const handleSubmit = (evt) => {
    evt.preventDefault();

    onSubmit(data);
  };
  return (
    <form className="form" onSubmit={handleSubmit}>
      {children}
      <span className="form__error">{message}</span>
      <div className="form__buttons-container">
        <button
          className={`
            form__submit-button ${submitButtonMod}
            ${(!isValid || isFormDisabled) && 'form__submit-button_inactive'}
          `}
        >
          {buttonText}
        </button>
        <p className="form__caption">
          {caption}
          <Link to={linkPath} className={`form__link ${linkMod}`}>{linkText}</Link>
        </p>
      </div>
    </form>
  );
}

export default Form;
