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


              <Button onClick={handleButtonClick}>
                {/* <p className='see-more'>{showContent ? 'ver menos' : 'ver mais'}</p> */}
                {showContent ? <IoArrowUpOutline /> : <IoArrowDownOutline />}
              </Button>
            </div>
          </Title>    


          
          {showContent && (
            <ScrollBar className="scrollbar">
              <h2>Sobre mim</h2>
              <p>
                Sou Desenvolvedor Web, estudante de <span className='mark'>Análise e Desenvolvimento de Sistemas</span>, com Graduação em Engenharia de Produção. Adquiri experiência em projetos pessoais e acadêmicos, envolvendo design de interfaces, gerenciamento de código e integração de sistemas. <br/><br/>
                Possuo sólida experiência na área de tecnologia no setor de comunicação. Durante minha trajetória na <span className='mark'>Globo</span>, atuei como Estagiário Técnico, Técnico de Sistemas e Analista de Tecnologia, onde adquiri conhecimentos em fluxos de processos, resolução de problemas, comunicação operacional e desenvolvi um forte senso de dedicação, comprometimento e compromisso com a qualidade. <br/><br/>
                Além disso, tenho <span className='mark'>experiência internacional</span> em trabalho voluntário, tendo passado cinco meses no <span className='mark'>Canadá</span>, onde ajudei na organização de eventos e realizei trabalhos de jardinagem. Meu inglês é intermediário, e continuo estudando para aprimorar o idioma. <br/><br/>
                Se o meu perfil despertou interesse e você deseja discutir oportunidades na área de desenvolvimento, colaborações ou projetos, estou à disposição para uma conversa.
              </p>
            </ScrollBar>
          )}

      </Container>

    </motion.div>
  )
}