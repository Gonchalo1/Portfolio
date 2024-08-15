import React from 'react';
import { useTranslation } from 'react-i18next';
import '../../App.css'; // Importa el archivo CSS específico para About
import Gif from '../../img/about.gif';

const About = () => {
  const { t } = useTranslation(); // Hook para la traducción

  return (
    <div className="about-main-container">
      <div className="about-first-container">
        <h1 className='about-span-skills-h1'>&lt; {t('name')} &gt;</h1> 
        <h2 className='about-span-skills-h1'>{t('title')}</h2>
      </div>
      <div className="about-second-container">
        <div className="about-text-container">
          {t('aboutText')}
        </div>
        <div className="gif-container">
          <img src={Gif} alt='gif-skeleton' className='about-gif'/>
        </div>
      </div>
    </div>
  );
};

export default About;
