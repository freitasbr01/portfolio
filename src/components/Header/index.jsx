import { Container } from './styles';
import perfil from '../../assets/perfil2.jpg'

export function Header({ ...rest }) {
  return (
    <Container>
      <img src={perfil} alt="Foto de perfil" />
      <div className='profile'>
        <h2>Alan Freitas</h2>
        <p className='dev'>Full-stack developer</p>
        <div className="tag">
          <p>JavaScript</p>
          <p>NodeJS</p>
          <p>ReactJS</p>
          <p>HTML</p>
          <p>CSS</p>
        </div>
      </div>
    </Container>
  )
}