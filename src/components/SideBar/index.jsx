// import { Link } from "react-router-dom";
import { Container } from './styles';

import { IoBookOutline } from "react-icons/io5";
import { MdOutlineMailOutline } from "react-icons/md";
import { FaInstagram } from "react-icons/fa";
import { SlSocialLinkedin } from "react-icons/sl";
import { FiArrowUpRight } from "react-icons/fi";
import { LuFolderDot, LuLaptop, LuGithub } from "react-icons/lu";


export function SideBar({ ...rest }) {
  return (
    <Container>
      <nav>
        <h5>Perfil</h5>
        <ul>
          <li>
            <IoBookOutline />
            <a to="/about">Sobre</a>
          </li>
          <li>
            <LuFolderDot />
            <a to="/project">Projetos</a>
          </li>
          <li>
            <LuLaptop />
            <a to="/skills">Skills</a>
          </li>
        </ul>

        <h5>Redes</h5>
        <ul>
          <li>
            <LuGithub />
            <a href="https://github.com/freitasbr01" target="_blank">Github</a>
            <FiArrowUpRight className='arrow' />
          </li>
          <li>
            <SlSocialLinkedin />        
            <a href="https://www.linkedin.com/in/alanfreitasbr01" target="_blank">LinkedIn</a>
            <FiArrowUpRight className='arrow' />
          </li>
          <li>
            <MdOutlineMailOutline />
            <a href="mailto:freitasbr01l@gmail.com" target="_blank">Email</a>
            <FiArrowUpRight className='arrow' />
          </li>
          <li>
            <FaInstagram />
            <a href="https://instagram.com/freitasbr01" target="_blank">Instagram</a>
            <FiArrowUpRight className='arrow'/>
          </li>
        </ul>
      </nav>
    </Container>
  )
}
