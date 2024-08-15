import React from 'react';
import { useTranslation } from 'react-i18next';
import '../../App.css';
import back1Img from '../../img/components/back/backImagen1.webp';
import back2Img from '../../img/components/back/backImagen2.jpg';
import back3Img from '../../img/components/back/backImagen3.png';
import back4Img from '../../img/components/back/backImagen4.png';
import back5Img from '../../img/components/back/backImagen5.png';
import backBack1Img from '../../img/components/back/backBack1Img.jpeg';
import backBack2Img from '../../img/components/back/backBack2Img.png';
import backBack3Img from '../../img/components/back/backBack3Img.jpeg';
import backBack4Img from '../../img/components/back/backBack4Img.png';
import backBack5Img from '../../img/components/back/backBack5Img.png';

const Back = () => {
  const { t } = useTranslation();

  const projects = [
    {
      href: 'https://github.com/Gonchalo1/Fitnnes-webBack-End',
      label: t('projects.fitnessBackend'), // Traducción de Fitness Back-end
      imgSrc: back1Img,
      backImg: backBack1Img
    },
    {
      href: 'https://github.com/ElianFRagozo/TiendaOnline/tree/main/ApiUsuarios',
      label: t('projects.apiUsers'), // Traducción de ApiUsers
      imgSrc: back2Img,
      backImg: backBack2Img
    },
    {
      href: 'https://github.com/ElianFRagozo/TiendaOnline/tree/main/ApiProductos',
      label: t('projects.apiProducts'), // Traducción de ApiProducts
      imgSrc: back3Img,
      backImg: backBack3Img
    },
    {
      href: 'https://github.com/Jesusantiago/NebulaWear',
      label: t('projects.clothingECommerce'), // Traducción de Clothing E-Commerce
      imgSrc: back4Img,
      backImg: backBack4Img
    },
    {
      href: 'https://github.com/Gonchalo1/SearchFilter',
      label: t('projects.searchFilters'), // Traducción de Search filters
      imgSrc: back5Img,
      backImg: backBack5Img
    }
  ];
  
  return (
    <div className="back-container">
      <div className="back-inner-container">
        <div className="back-content">
          <h1 className="back-neon-text">{t('projects.title')}</h1> {/* Traducción de "Proyects" */}
          <div className="back-grid">
            {projects.map((pr, index) => (
              <a key={index} href={pr.href} target="_blank" rel="noopener noreferrer" className="back-item">
                <div className="back-card">
                  <div className="back-card-front">
                    <img src={pr.imgSrc} alt={pr.label} className="back-image" />
                    <p className="back-label">{pr.label}</p>
                  </div>
                  <div className="back-card-back">
                    <img src={pr.backImg} alt="Back Side" className="back-back-image" />
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

export default Back;
