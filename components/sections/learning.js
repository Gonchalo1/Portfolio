import React from 'react';
import { useTranslation } from 'react-i18next';
import '../../App.css'; // Importamos los estilos CSS

import Image1 from '../../img/components/learning/typescript.png';
import Image2 from '../../img/components/learning/docker.png';
import Image3 from '../../img/components/learning/especializacionBack.jpeg';
import Image4 from '../../img/components/learning/tailwindCss.webp';

const Learning = () => {
  const { t } = useTranslation();

  return (
    <div className="learning-container">
      <div className="learning-inner-container">
        <div className="learning-content">
          <h1 className="learning-neon-text">{t('learning.title')}</h1>
          <span className="learning-span-skills">
            <h1 className="learning-span-skills-h1">
              {t('learning.subtitle')}
            </h1>
          </span>
          <div className="grid-learning">
            <div className="learning-item">
              <img src={Image1} alt={t('learning.typescript')} className="learning-img" />
              {t('learning.typescript')}
            </div>
            <div className="learning-item">
              <img src={Image2} alt={t('learning.docker')} className="learning-img" />
              {t('learning.docker')}
            </div>
            <div className="learning-item">
              <img src={Image3} alt={t('learning.specialization')} className="learning-img" />
              {t('learning.specialization')}
            </div>
            <div className="learning-item">
              <img src={Image4} alt={t('learning.tailwind')} className="learning-img" />
              {t('learning.tailwind')}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Learning;
