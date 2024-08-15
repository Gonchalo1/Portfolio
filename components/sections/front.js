import React from 'react';
import { useTranslation } from 'react-i18next';
import '../../App.css';
import front1Img from '../../img/components/front/frontImagen1.jpg';
import front2Img from '../../img/components/front/frontImagen2.jpg';
import front3Img from '../../img/components/front/frontImagen3.jpeg';
import front4Img from '../../img/components/front/frontImagen4.png';
import backFront1Img from '../../img/components/front/backFront1Img.png';
import backFront2Img from '../../img/components/front/backFront2Img.jpeg';
import backFront3Img from '../../img/components/front/backFront3Img.png';
import backFront4Img from '../../img/components/front/backFront4Img.jpg';

const Front = () => {
  const { t } = useTranslation();

  const projects = [
    {
      href: 'https://sparkly-chimera-6412a6.netlify.app/',
      label: t('front.athletics_web'),
      imgSrc: front1Img,
      backImg: backFront1Img
    },
    {
      href: 'https://github.com/Gonchalo1/Fitness-web',
      label: t('front.fitness_web'),
      imgSrc: front2Img,
      backImg: backFront2Img
    },
    {
      href: 'https://6691289a79b92c1b8df2afe3--celadon-cactus-7f62b5.netlify.app/',
      label: t('front.unturned_web'),
      imgSrc: front3Img,
      backImg: backFront3Img
    },
    {
      href: 'https://github.com/Jesusantiago/NebulaWear',
      label: t('front.clothing_ecommerce'),
      imgSrc: front4Img,
      backImg: backFront4Img
    }
  ];
  
  return (
    <div className="front-container">
      <div className="front-inner-container">
        <div className="front-content">
          <h1 className="front-neon-text">{t('front.title')}</h1>
          <div className="front-grid">
            {projects.map((pr, index) => (
              <a key={index} href={pr.href} target="_blank" rel="noopener noreferrer" className="front-item">
                <div className="front-card">
                  <div className="front-card-front">
                    <img src={pr.imgSrc} alt={pr.label} className="front-image" />
                    <p className="front-label">{pr.label}</p>
                  </div>
                  <div className="front-card-back">
                    <img src={pr.backImg} alt="Back Side" className="front-back-image" />
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Front;
