import React from 'react';
import { useTranslation } from 'react-i18next';
import '../../App.css'; // Importamos los estilos CSS

import Image1 from '../../img/components/skills/css.png';
import Image2 from '../../img/components/skills/express.svg';
import Image3 from '../../img/components/skills/github.png';
import Image4 from '../../img/components/skills/javascript.png';
import Image5 from '../../img/components/skills/json.png';
import Image6 from '../../img/components/skills/nodejs.png';
import Image7 from '../../img/components/skills/php.png';
import Image8 from '../../img/components/skills/postgres.png';
import Image9 from '../../img/components/skills/react.png';
import Image10 from '../../img/components/skills/compañerismo.png';
import Image11 from '../../img/components/skills/perseverante.png';
import Image12 from '../../img/components/skills/comunicacion.png';
import Image13 from '../../img/components/skills/stress.png';

const Skills = () => {
  const { t } = useTranslation();

  return (
    <div className="skills-container">
      <div className="inner-container">
        <div className="skills-content">
          <h1 className="neon-text">{t('skills.title')}</h1>
          <span className="span-skills">
            <h1 className="span-skills-h1">{t('skills.description')}</h1>
          </span>
          <div className="grid-skills">
            <div className="div1"><img src={Image1} alt="CSS" className="skills-img" />CSS</div>
            <div className="div2"><img src={Image2} alt="Express" className="skills-img" />Express</div>
            <div className="div3"><img src={Image3} alt="GitHub" className="skills-img" />Git/GitHub</div>
            <div className="div4"><img src={Image4} alt="JavaScript" className="skills-img" />JavaScript</div>
            <div className="div5"><img src={Image5} alt="JSON" className="skills-img" />JSON</div>
            <div className="div6"><img src={Image6} alt="Node.js" className="skills-img" />NodeJS</div>
            <div className="div7"><img src={Image7} alt="PHP" className="skills-img" />PHP</div>
            <div className="div8"><img src={Image8} alt="PostgreSQL" className="skills-img" />PostgreSQL</div>
            <div className="div9"><img src={Image9} alt="React" className="skills-img" />React</div>
            <div className="div10"><img src={Image10} alt={t('skills.testing_qa')} className="skills-img" />{t('skills.testing_qa')}</div>
            <div className="div11"><img src={Image11} alt={t('skills.persevering')} className="skills-img" />{t('skills.persevering')}</div>
            <div className="div12"><img src={Image12} alt={t('skills.communication')} className="skills-img" />{t('skills.communication')}</div>
            <div className="div13"><img src={Image13} alt={t('skills.stress_dealing')} className="skills-img" />{t('skills.stress_dealing')}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
