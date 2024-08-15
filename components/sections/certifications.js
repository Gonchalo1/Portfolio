import React from 'react';
import { useTranslation } from 'react-i18next';
import '../../App.css';
import certificado1Img from '../../img/components/certifications/certificadoImagen1.png';
import certificado2Img from '../../img/components/certifications/certificadoImagen2.png';
import certificado3Img from '../../img/components/certifications/certificadoImagen3.png';
import backCertificado1Img from '../../img/components/certifications/backCertificadoImagen1.png';
import backCertificado2Img from '../../img/components/certifications/backCertificadoImagen2.png';
import backCertificado3Img from '../../img/components/certifications/backCertificadoImagen3.png';

const Certificates = () => {
  const { t } = useTranslation();

  const certificates = [
    {
      href: 'https://drive.google.com/file/d/1u6s8hvOT6iscivRBZ26F40eg13apJkxI/view?usp=drive_link',
      label: t('certifications.argentina_programa_web_cert'),
      imgSrc: certificado1Img,
      backImg: backCertificado1Img
    },
    {
      href: 'https://drive.google.com/file/d/1c9kU3FYR6ZnyosxRCdweWJBqVLFj90I9/view?usp=drive_link',
      label: t('certifications.junior_achievement_web_cert'),
      imgSrc: certificado2Img,
      backImg: backCertificado2Img
    },
    {
      href: 'https://drive.google.com/file/d/1k1epfnhVXzyC_27codDGUt9_Vjt7Zh2f/view?usp=drive_link',
      label: t('certifications.inclusive_capacitation-web-cert'),
      imgSrc: certificado3Img,
      backImg: backCertificado3Img
    }
  ];
  
  return (
    <div className="certifications-container">
      <div className="certifications-inner-container">
        <div className="certifications-content">
          <h1 className="certifications-neon-text">{t('certifications.title')}</h1>
          <div className="certifications-grid">
            {certificates.map((cert, index) => (
              <a key={index} href={cert.href} target="_blank" rel="noopener noreferrer" className="certificate-item">
                <div className="certificate-card">
                  <div className="certificate-card-front">
                    <img src={cert.imgSrc} alt={cert.label} className="certificate-image" />
                    <p className="certificate-label">{cert.label}</p>
                  </div>
                  <div className="certificate-card-back">
                    <img src={cert.backImg} alt="Back Side" className="certificate-back-image" />
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

export default Certificates;
