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
}) {
  return (
    <>
      <Section mod="auth" sectionTitleMod="auth-title" sectionTitle={sectionTitle}>
        <Form
          buttonText={buttonText}
          caption={caption}
          linkPath={linkPath}
          linkText={linkText}
          onSubmit = {onSubmit}
          data = {data}
        >
         {children}
        </Form>
      </Section>
    </>
  );
}

export default AuthSection;
