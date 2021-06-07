import React from 'react';
import Section from '../Section/Section';
import Form from '../Form/Form';

import './AuthSection.css';

function AuthSection({
  children,
  buttonText = '',
  caption = '',
  linkPath = '',
  linkText = '',
  sectionTitle = '',
  onSubmit,
  data,
  isValid,
  isFormDisabled,
}) {
  return (
    <>
      <Section mod="auth" sectionTitleMod="auth-title" sectionTitle={sectionTitle}>
        <Form
          buttonText={buttonText}
          caption={caption}
          linkPath={linkPath}
          linkText={linkText}
          onSubmit={onSubmit}
          data={data}
          isValid={isValid}
          isFormDisabled={isFormDisabled}
        >
         {children}
        </Form>
      </Section>
    </>
  );
}

export default AuthSection;
