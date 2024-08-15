import { Container, Profile, ButtonMenu } from './styles';
import perfil from '../../assets/perfil2.jpg'
import { PiListBold } from "react-icons/pi";

export function Header({ onOpenMenu, ...rest }) {
  return (
    <Container>

      <ButtonMenu onClick={onOpenMenu}>
        <PiListBold />
      </ButtonMenu>

      <img src={perfil} loading="lazy" alt="Foto de perfil" />
      
      <Profile>
        <h2><span>Alan Freitas</span></h2>
        <p className='dev'>Desenvolvedor Full-Stack</p>
        <div className="tag">
          <p>JavaScript</p>
          <p>NodeJS</p>
          <p>ReactJS</p>
          <p>HTML</p>
          <p>CSS</p>
        </div>
      </Profile>
    </Container>
  )
}