import { Container, Profile, ButtonMenu } from './styles';
import perfil from '../../assets/perfil2.jpg'
import { PiListBold } from "react-icons/pi";
import { useTranslation } from 'react-i18next';


export function Header({ onOpenMenu, ...rest }) {
  const { t } = useTranslation();
  
  return (
    <Container>

      <ButtonMenu onClick={onOpenMenu}>
        <PiListBold />
      </ButtonMenu>

      <img src={perfil} loading="lazy" alt="Foto de perfil" />
      
      <Profile>
        <h2><span>Alan Freitas</span></h2>
        <p className='dev'>{t('header.position')}</p>
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