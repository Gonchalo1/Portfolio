import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import GridItem from './gridItem';
import Image1 from '../../img/home/image10.png';
import Image2 from '../../img/home/image2.webp';
import Image3 from '../../img/home/image3.png';
import Image4 from '../../img/home/image4.jpg';
import Image5 from '../../img/home/image5.webp';
import Image6 from '../../img/home/image6.jpg';
import Image7 from '../../img/home/image7.png';
import Image8 from '../../img/home/image8.jpg';
import Image9 from '../../img/home/image9.png';
import BouncingBall from './customization/bouncingBall';
import ImageToGif from './customization/imageToGif';

const GridContainer = () => {
  const { t } = useTranslation();
  const [hovered, setHovered] = useState(null);

  const sections = [
    { name: t('sections.about'), area: 'about', image: Image1 },
    { name: t('sections.skills'), area: 'skills', image: Image2 },
    { name: t('sections.certifications'), area: 'certifications', image: Image3 },
    { name: t('sections.contact'), area: 'contact', image: Image4 },
    { name: t('sections.experience'), area: 'experience', image: Image5 },
    { name: t('sections.posts'), area: 'posts', image: Image6 },
    { name: t('sections.learning'), area: 'learning', image: Image7 },
    { name: t('sections.front'), area: 'front', image: Image8 },
    { name: t('sections.back'), area: 'back', image: Image9 },
  ];

  const handleClick = (section) => {
    if (section === 'Contact') {
      window.open('https://tu-dominio.com/cv.pdf', '_blank'); // Cambia por el enlace de tu CV
    }
  };

  const handleMouseEnter = (section) => {
    setHovered(section);
  };

  const handleMouseLeave = () => {
    setTimeout(() => {
      setHovered(null);
    }, 2500); // Mantiene el efecto de hover por 2.5 segundos después de quitar el mouse
  };

  return (
    <div className="grid-container">
      {/* Mostrar solo en pantallas grandes */}
      <div className="grid-content">
        {sections.map((section) => (
          <GridItem
            key={section.name}
            section={section}
            isHovered={section.area === hovered}
            onMouseEnter={() => handleMouseEnter(section.area)}
            onMouseLeave={handleMouseLeave}
            onClick={() => handleClick(section.area)} // Añadir evento de clic
          />
        ))}
        <h1 className="grid-container-h1">{t('name')}</h1>
        <h3 className="grid-container-h1">{t('title')}</h3>
        <BouncingBall />
        <ImageToGif />
      </div>
      {/* Mostrar solo en pantallas pequeñas */}
      <div className="mobile-message">
      <button>
  <a className="button-start" href="/about" style={{ backgroundColor: 'transparent', border: 'none', textDecoration: 'none', color: 'black' }}>
    {t('Lets start')}
  </a>
</button>
      </div>
    </div>
  );
};

export default GridContainer;
