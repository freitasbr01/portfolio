import { Container } from './styles';

import { Button } from '../Button/index';
import { Title } from '../Title/index';

import { LuDownload } from "react-icons/lu";
import { FcWikipedia } from "react-icons/fc";


export function BoxAbout({ ...rest }) {
  return (
    <Container {...rest}>

      <Title title="Sobre mim" icon={FcWikipedia} />
      
      <div className="scrollbar">
        <p>
          Olá, meu nome é Alan Freitas, sou um desenvolvedor web, algumas das minhas habilidades são <span>HTML, CSS, JavaScript, ReactJS e NodeJS</span>. <br/><br/>

          Atuei como técnico de sistemas e, posteriormente, como analista no departamento de tecnologia da Plataforma de Produção da TV Globo. Lá, eu era responsável pelo planejamento, preparação e disponibilização dos recursos necessários para a gravação e transmissão de programas ao vivo.<br/><br/>

          Foi durante um projeto especial para as Eleições, onde tive a oportunidade de ver de perto a participação da equipe de desenvolvimento, que minha paixão pela programação realmente se acendeu. Fiquei fascinado pela dinâmica e pelo impacto da aplicação que desenvolveram para coletar dados das urnas recebidas através do TSE em tempo real. A elaboração do design e as funcionalidades criadas para interação do apresentador com a aplicação rodando no telão do estúdio foram incríveis e despertaram em mim uma grande vontade de conhecer como tudo isso funciona e um dia também poder trabalhar com isso.<br/><br/>

          Tenho certeza de que as habilidades que desenvolvi em minha carreira anterior, como comunicação, resolução de problemas e conflitos, e trabalho sob pressão, serão valiosas em minha nova função como desenvolvedor. 

          Meu objetivo no futuro próximo é iniciar uma pós-graduação em Engenharia de Software, estudar AWS e continuar aprendendo e crescendo como desenvolvedor. <br/><br/>
          
          Nunca gostei de estar parado, sempre gostei de aprender e entender o porquê das coisas, entendo que o comprometimento e a dedicação são pilares importantes para obter êxito em qualquer area da vida, não existe meio termo para isso, é algo que levo sempre comigo. <br/><br/>
          Estou ansioso para continuar minha jornada e explorar novas oportunidades na área de desenvolvimento web.
        </p>       
        
        <Button title="CURRÍCULO" icon={LuDownload}/>        
      </div>

    </Container>
  )
}