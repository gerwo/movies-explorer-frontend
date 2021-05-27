import React from 'react';
import './Section.css';

function Section({
  children,
  sectionTitle = '',
  sectionTitleMod = '',
  mod = '',
  id = '',
}) {
  return (
    <section className={`section ${mod}__section`} id= { id }>
      <div className={`section__container ${mod}__container`}>
        <h2 className={`section__title ${sectionTitleMod}`}>{ sectionTitle }</h2>
        { children }
      </div>
    </section>
  );
}

export default Section;
