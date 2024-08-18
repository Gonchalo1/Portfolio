import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next'; // Importa el hook useTranslation
import '../../App.css';

import Img1 from '../../img/nav/about-icon.png';
import Img2 from '../../img/nav/skills-icon.png';
import Img3 from '../../img/nav/certifications-icon.png';
import Img4 from '../../img/nav/contact-icon.png';
import Img5 from '../../img/nav/experience-icon.png';
import Img6 from '../../img/nav/socialMedia-icon.png';
import Img7 from '../../img/nav/learning-icon.png';
import Img8 from '../../img/nav/front-icon.png';
import Img9 from '../../img/nav/back-icon.png';
import Img10 from '../../img/nav/home-icon.png';

import About from './about';
import Skills from './skills';
import Certifications from './certifications';
import Experience from './experience';
import Posts from './posts';
import Learning from './learning';
import Front from './front';
import Back from './back';

const Nav = () => {
  const { t } = useTranslation(); // Usa el hook useTranslation para acceder a las traducciones
  const [content, setContent] = useState(''); 
  const navigate = useNavigate();

  const handleNavClick = (path, content) => {
    setContent(content);
    navigate(path);
  };

  return (
    <div className="nav-container">
      <nav className="nav">
        <ul>
          <li><Link to="/about" onClick={() => handleNavClick('/about', <About/>)}><img  className='icons' src={Img1} alt={t('nav.about')}/> {t('nav.about')}</Link></li>
          <li><Link to="/skills" onClick={() => handleNavClick('/skills', <Skills/> )}><img  className='icons' src={Img2} alt={t('nav.skills')}/> {t('nav.skills')}</Link></li>
          <li><Link to="/certifications" onClick={() => handleNavClick('/certifications', <Certifications/>)}><img  className='icons' src={Img3} alt={t('nav.certifications')}/> {t('nav.certifications')}</Link></li>
          <li><a href="https://drive.google.com/file/d/1yG13X6514OxQKaoNTrfHPdYOS_1senpE/view?usp=sharing" target="_blank" rel="noopener noreferrer" onClick={() => handleNavClick('/contact')} ><img className='icons' src={Img4} alt={t('nav.contact')} /> {t('nav.contact')}</a></li>
          <li><Link to="/experience" onClick={() => handleNavClick('/experience', <Experience/>)}><img  className='icons' src={Img5} alt={t('nav.experience')}/> {t('nav.experience')}</Link></li>
          <li><Link to="/posts" onClick={() => handleNavClick('/posts', <Posts/>)}><img  className='icons' src={Img6} alt={t('nav.posts')}/> {t('nav.posts')}</Link></li>
          <li><Link to="/learning" onClick={() => handleNavClick('/learning', <Learning/>)}><img  className='icons' src={Img7} alt={t('nav.learning')}/> {t('nav.learning')}</Link></li>
          <li><Link to="/front" onClick={() => handleNavClick('/front', <Front/>)}><img  className='icons' src={Img8} alt={t('nav.front')}/> {t('nav.front')}</Link></li>
          <li><Link to="/back" onClick={() => handleNavClick('/back', <Back/>)}><img  className='icons' src={Img9} alt={t('nav.back')}/> {t('nav.back')}</Link></li>
          <li><Link to="/"><img  className='icons' src={Img10} alt={t('nav.home')}/> {t('nav.home')}</Link></li>
        </ul>
      </nav>
      <div className="content-box">
        {content}
      </div>
    </div>
  );
};

export default Nav;
