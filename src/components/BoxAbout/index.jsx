import { Container, Title, Button } from './styles';
import { ScrollBar } from '../../components/ScrollBar';
import { motion } from 'framer-motion';
import { useState } from 'react';

import { IoLogoLinkedin } from "react-icons/io";
import { IoLogoGithub } from "react-icons/io";

import { IoArrowDownOutline } from "react-icons/io5";
import { IoArrowUpOutline } from "react-icons/io5";



export function BoxAbout({ ...rest }) {
  const [showContent, setShowContent] = useState(false);

  const pageVariants = {
    initial: {
      opacity: 0,
    },
    in: {
      opacity: 1,
    },
    out: {
      opacity: 0,
    },
  };

  const pageTransition = {
    type: "tween",
    duration: 0.5,
  };
  
  const handleButtonClick = () => {
    setShowContent(!showContent);
  };

  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
    >

      <Container {...rest}>

        <Title>
          <h2 className='h2'>Olá!</h2>
          <h1>Eu sou <span>Alan Freitas</span></h1>
          <p className='description'>Um entusiasta da tecnologia e apaixonado por inovação ... </p>

          <div className="links">
            <a href="https://github.com/freitasbr01" target="_blank" className='github'>
              <IoLogoGithub />
              <span>@freitasbr01</span>
            </a>

            <a href="https://www.linkedin.com/in/alanfreitasbr01" target="_blank" className='linkedin'>
              <IoLogoLinkedin />
              <span>freitasbr01</span>
            </a>


            <p className='see-more'>{showContent ? 'ver menos' : 'ver mais'}</p>

            <Button onClick={handleButtonClick}>
              {showContent ? <IoArrowUpOutline /> : <IoArrowDownOutline />}
            </Button>
          </div>
        </Title>    


        
        {showContent && (
          <ScrollBar>
            <h2>Sobre mim</h2>
            <p>
              Estudo <span className='spanBold'>Análise e Desenvolvimento de Sistemas</span> e possuo graduação em Engenharia de Produção. <br />
              Tenho experiência em projetos pessoais e estudos acadêmicos, envolvendo design de interfaces, gerenciamento de código e integração de sistemas. Algumas das minhas habilidades são <span className='mark'>HTML, CSS, JavaScript, ReactJs e NodeJs</span>.<br/><br/>
              Além disso, possuo sólida experiência em infraestrutura tecnológica, fluxos de processos e gerenciamento de softwares em uma grande empresa de comunicação, participando ativamente de grandes coberturas jornalísticas e eventos esportivos.
            </p>

            <h2>Objetivos Futuros</h2>          
            <p>
              Atualmente tenho me dedicado no aperfeiçoamento das habilidades em React.js e Node.js, realizando projetos pessoais e com estudos acadêmicos. Estou comprometido com o aprendizado contínuo, e aberto para aprender novas tecnologias. A curto prazo vou iniciar uma pós-graduação em Engenharia de Software.<br/>
            </p>

            <h2>Jornada e Aprendizados</h2>
            <p>
              Atuei como <span className='spanBold'>Técnico de Sistemas</span> e, posteriormente, como <span className='spanBold'>Analista de Tecnologia</span> no departamento de tecnologia da <span className='spanBold'>TV Globo</span>. Eu era responsável pelo planejamento, preparação e disponibilização dos recursos necessários para a gravação e transmissão de programas ao vivo.<br/><br/>

              Foi durante um projeto para as Eleições de 2022, onde tive a oportunidade de ver a participação da equipe de desenvolvimento, que minha paixão pela programação realmente se acendeu. Fiquei fascinado pela dinâmica e pelo impacto da aplicação que desenvolveram para coletar dados das urnas recebidas através do TSE, em tempo real. A elaboração do design e as funcionalidades criadas para a interação do apresentador com a aplicação rodando no telão do estúdio foram incríveis e despertaram em mim uma grande vontade de conhecer como tudo isso funciona e, um dia, também poder trabalhar com isso.<br/><br/>
            </p>          
          </ScrollBar>
        )}

      </Container>

    </motion.div>
  )
}