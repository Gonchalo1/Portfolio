// src/components/home/gridItem.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import '../../App.css';

const GridItem = ({ section, isHovered, onMouseEnter, onMouseLeave }) => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  const handleClick = () => {
    navigate(`/${section.area}`);
  };

  return (
    <div
      className={`grid-item ${isHovered ? 'hovered' : ''}`}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      onClick={handleClick}
      style={{ cursor: 'pointer' }}
    >
      <img src={section.image} alt={t(section.name)} className="hover-image" />
      <span className="grid-text">{t(section.name)}</span>
    </div>
  );
};

export default GridItem;
