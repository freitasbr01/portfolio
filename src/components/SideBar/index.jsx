import { Container, ButtonClose, Nav, TitleSection, /*Crawler*/ } from './styles';
import { Link, useLocation } from "react-router-dom";
import { useTranslation } from 'react-i18next';

import { IoBookOutline } from "react-icons/io5";
import { MdOutlineMailOutline } from "react-icons/md";
import { SlSocialLinkedin } from "react-icons/sl";
import { FiArrowUpRight } from "react-icons/fi";
import { LuFolderDot, LuLaptop, LuGithub } from "react-icons/lu";
import { IoClose } from "react-icons/io5";
import { LuDownload } from "react-icons/lu";

import { useState } from 'react';

export function SideBar({ menuIsOpen, onCloseMenu, ...rest }) {
  const location = useLocation();
  const { t, i18n } = useTranslation();
  const [currentLang, setCurrentLang] = useState('en'); 

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
    setCurrentLang(lang);
  };

  return (
    <Container data-menu-is-open={menuIsOpen}>
      <div className="line"></div>
      <div className="sub-container">

        <div className="button-top">
          {currentLang === 'en' ? (
              <button className='button-language' onClick={() => changeLanguage('pt')}><span className='color-brazil'>PT</span></button>
            ) : (
              <button className='button-language' onClick={() => changeLanguage('en')}><span className='color-eua'>EN</span></button>
            )}

          {
            menuIsOpen &&
            <ButtonClose onClick={onCloseMenu}>
              <IoClose />
            </ButtonClose>
          }
        </div>

        <Nav>
          <TitleSection>Perfil</TitleSection>
          <ul>
            <li>
              <Link
                onClick={onCloseMenu}
                className={`link ${location.pathname === '/about' ? 'active' : ''}`}
                to="/about"
              >
                <IoBookOutline className={location.pathname === '/about' ? 'icon-color' : ''} />
                <span>{t('sidebar.about')}</span>
              </Link>
            </li>

            <li>
              <Link
              onClick={onCloseMenu}
              className={`link ${location.pathname === '/projects' ? 'active' : ''}`}
              to="/projects"
            >
                <LuFolderDot className={location.pathname === '/projects' ? 'icon-color' : ''}/>
                <span>{t('sidebar.projects')}</span>
              </Link>
            </li>

            <li>
            <Link
              onClick={onCloseMenu} 
              className={`link ${location.pathname === '/stack' ? 'active' : ''}`}
              to="/stack"
            >
              <LuLaptop className={location.pathname === '/stack' ? 'icon-color' : ''} />
              <span>Tech Stack</span>
            </Link>
            </li>          
          </ul>


          <TitleSection>{t('sidebar.networks')}</TitleSection>
          <ul>          
            <li>
              <a href="https://github.com/freitasbr01" target="_blank">      
                <LuGithub />
                <span>Github</span>
                <FiArrowUpRight className='arrow' />
              </a>
            </li>

            <li>
              <a href="https://www.linkedin.com/in/alanfreitasbr01" target="_blank">
                <SlSocialLinkedin />        
                <span>LinkedIn</span>
                <FiArrowUpRight className='arrow' />
              </a>
            </li>

            <li>
              <a href="mailto:freitasbr01l@gmail.com" target="_blank">
                <MdOutlineMailOutline />
                <span>Email</span>
                <FiArrowUpRight className='arrow' />
              </a>
            </li>

            <li>
              <a href="https://raw.githubusercontent.com/freitasbr01/portfolio/main/src/assets/file/Alan_Pereira_de_Freitas.pdf" target="_blank">
                <LuDownload />
                <span>{t('sidebar.resume')}</span>
                <FiArrowUpRight className='arrow'/>
              </a>
            </li>

          </ul>
        </Nav>

      </div>

    </Container>
  )
}
