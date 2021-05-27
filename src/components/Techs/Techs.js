import React from 'react';
import Section from '../Section/Section';
import { techs } from '../../utils/constants';

import './Techs.css';

function Techs() {
  return (
    <Section sectionTitle="Технологии" mod="techs" id="techs">
      <div className="techs__info">
        <h3 className="techs__subtitle">7 технологий</h3>
        <p className="techs__text">На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте</p>
        <ul className="techs__list">
          {techs.map((tech, index) => (
            <li className="techs__list-item" key={index}>
              {tech}
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}

export default Techs;
