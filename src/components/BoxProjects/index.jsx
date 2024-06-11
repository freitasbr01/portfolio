import { Container } from './styles';
import { Project } from '../Project'

import imgPortifolio from '../../assets/portfolio.png';

import { Title } from '../../components/Title';
import { FcOpenedFolder } from "react-icons/fc";

export function BoxProjects({ ...rest}) {
  return (
    <Container>

      <Title title="Projetos" icon={FcOpenedFolder} />

      <div className="scrollbar">

        <Project 
          title={{h2: "Portfólio", h3: "Tecnologias utilizadas"}} 
          description="Meu portfólio como desenvolvedor web." 
          links={{repo: "https://github.com/seuusuario/seuprojeto", deploy: "https://seuprojeto.com"}}
          photo={imgPortifolio}  
        />

        <Project 
          title={{h2: "Portfólio", h3: "Tecnologias utilizadas"}} 
          description="Meu portfólio como desenvolvedor web." 
          links={{repo: "https://github.com/seuusuario/seuprojeto", deploy: "https://seuprojeto.com"}}
          photo={imgPortifolio}  
        />

        <Project 
          title={{h2: "Portfólio", h3: "Tecnologias utilizadas"}} 
          description="Meu portfólio como desenvolvedor web." 
          links={{repo: "https://github.com/seuusuario/seuprojeto", deploy: "https://seuprojeto.com"}}
          photo={imgPortifolio}  
        />

        <Project 
          title={{h2: "Portfólio", h3: "Tecnologias utilizadas"}} 
          description="Meu portfólio como desenvolvedor web." 
          links={{repo: "https://github.com/seuusuario/seuprojeto", deploy: "https://seuprojeto.com"}}
          photo={imgPortifolio}  
        />

      </div>
    </Container>
  )
}