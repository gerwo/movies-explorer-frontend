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
}) {
  return (
    <form className="form">
      {children}
      <div className="form__buttons-container">
        <button
          className={`form__submit-button ${submitButtonMod}`}
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
