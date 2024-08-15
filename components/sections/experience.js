import React from 'react';
import { useTranslation } from 'react-i18next';
import '../../App.css';
import certificado1Img from '../../img/components/experience/experienciaImagen1.jpg';
import certificado2Img from '../../img/components/experience/experienciaImagen2.webp';
import certificado3Img from '../../img/components/experience/experienciaImagen3.gif';
import backCertificado1Img from '../../img/components/experience/backExperiencia1.png';
import backCertificado2Img from '../../img/components/experience/backExperiencia2.webp';
import backCertificado3Img from '../../img/components/experience/backExperiencia3.avif';

const Experience = () => {
  const { t } = useTranslation();

  const experience = [
    {
      href: 'https://www.linkedin.com/company/digital-shakers/posts/?feedView=all',
      label: t('experience.digital_shakers'),
      imgSrc: certificado1Img,
      backImg: backCertificado1Img
    },
    {
      href: 'https://github.com/ElianFRagozo/TiendaOnline',
      label: t('experience.community_projects'),
      imgSrc: certificado2Img,
      backImg: backCertificado2Img
    },
    {
      href: 'https://www.linkedin.com/in/gonzalo-calder%C3%B3n-b50a0724a/details/experience/?locale=en_US',
      label: t('experience.truck_driver_assistant'),
      imgSrc: certificado3Img,
      backImg: backCertificado3Img
    }
  ];
  
  return (
    <div className="experience-container">
      <div className="experiencie-inner-container">
        <div className="experiencie-content">
          <h1 className="experience-neon-text">{t('experience.title')}</h1>
          <div className="experience-grid">
            {experience.map((exp, index) => (
              <a key={index} href={exp.href} target="_blank" rel="noopener noreferrer" className="experience-item">
                <div className="experience-card">
                  <div className="experience-card-front">
                    <img src={exp.imgSrc} alt={exp.label} className="experience-image" />
                    <p className="experience-label">{exp.label}</p>
                  </div>
                  <div className="experience-card-back">
                    <img src={exp.backImg} alt="Back Side" className="experience-back-image" />
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

export default Experience;
