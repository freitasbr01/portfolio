import { Container, ButtonClose, Nav, TitleSection, ButtonToggleMode  } from './styles';

import { Link, useLocation } from "react-router-dom";
import useTheme from '../../hook/useTheme';

import { IoBookOutline } from "react-icons/io5";
import { MdOutlineMailOutline } from "react-icons/md";
import { FaInstagram } from "react-icons/fa";
import { SlSocialLinkedin } from "react-icons/sl";
import { FiArrowUpRight } from "react-icons/fi";
import { LuFolderDot, LuLaptop, LuGithub } from "react-icons/lu";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { LuSun } from "react-icons/lu";
import { IoClose } from "react-icons/io5";
import { LuDownload } from "react-icons/lu";


export function SideBar({ menuIsOpen, onCloseMenu, ...rest }) {
  const location = useLocation();
  const [theme, toggleTheme] = useTheme();

  return (
    <Container data-menu-is-open={menuIsOpen}>
      <div className="line"></div>
      <div className="sub-container">

        <div className="button-top">
          <ButtonToggleMode onClick={toggleTheme}>
            <div>
              {theme === 'light' ? <BsFillMoonStarsFill /> : <LuSun />}
            </div>
          </ButtonToggleMode>

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
                <span>Sobre</span>
              </Link>
            </li>

            <li>
              <Link
              onClick={onCloseMenu}
              className={`link ${location.pathname === '/projects' ? 'active' : ''}`}
              to="/projects"
            >
                <LuFolderDot className={location.pathname === '/projects' ? 'icon-color' : ''}/>
                <span>Projetos</span>
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


          <TitleSection>Redes</TitleSection>
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
              <a href="https://instagram.com/freitasbr01" target="_blank">
                <FaInstagram />
                <span>Instagram</span>
                <FiArrowUpRight className='arrow'/>
              </a>
            </li>

            <li>
              <a href="https://raw.githubusercontent.com/freitasbr01/portfolio/main/src/assets/file/Alan_Pereira_de_Freitas.pdf" target="_blank">
                <LuDownload />
                <span>Currículo</span>
                <FiArrowUpRight className='arrow'/>
              </a>
            </li>

          </ul>
        </Nav>
      </div>

    </Container>
  )
}
