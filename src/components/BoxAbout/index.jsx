import { Container } from './styles';

import { ScrollBar } from '../../components/ScrollBar';

import { DownloadButton } from '../DownloadButton/index';
import { Title } from '../Title/index';
import { motion } from 'framer-motion';

export function BoxAbout({ ...rest }) {
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

  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
    >

      <Container {...rest}>

        <Title title="Sobre mim" />
        
        <ScrollBar>
          <p>
            Olá, meu nome é Alan Freitas, moro no Rio de Janeiro!
            Sou um desenvolvedor full-stack, atualmente estou fazendo <span className='spanBold'>Análise e Desenvolvimento de Sistemas</span> e possuo graduação em Engenharia de Produção.
          </p>

          <h2>Habilidades e Objetivos Futuros</h2>          
          <p>
            Tenho me dedicado ao estudo de desenvolvimento web por aproximadamente um ano, com foco na criação de interfaces front-end criativas e na construção de soluções back-end. Algumas das minhas habilidades são <span className='mark'>HTML, CSS, JavaScript, ReactJs e NodeJs</span>.<br/><br/>

            Estou comprometido com o aprendizado contínuo, sempre em busca de novos conhecimentos para aprimorar minhas habilidades. A curto prazo pretendo iniciar uma pós-graduação em Engenharia de Software.<br/><br/>

            Entendo que o comprometimento e a dedicação são pilares importantes para obter êxito em qualquer área da vida, é algo que levo sempre comigo.
            Estou ansioso para continuar minha jornada e explorar novas oportunidades na área de desenvolvimento.
          </p>

          <h2>Jornada e Aprendizados</h2>
          <p>
            Atuei como <span className='spanBold'>Técnico de Sistemas</span> e, posteriormente, como <span className='spanBold'>Analista de Tecnologia</span> no departamento de tecnologia da Plataforma de Produção da <span className='spanBold'>TV Globo</span>. Lá, eu era responsável pelo planejamento, preparação e disponibilização dos recursos necessários para a gravação e transmissão de programas ao vivo.<br/><br/>

            Foi durante um projeto especial para as Eleições, onde tive a oportunidade de ver de perto a participação da equipe de desenvolvimento, que minha paixão pela programação realmente se acendeu. Fiquei fascinado pela dinâmica e pelo impacto da aplicação que desenvolveram para coletar dados das urnas recebidas através do TSE, em tempo real. A elaboração do design e as funcionalidades criadas para a interação do apresentador com a aplicação rodando no telão do estúdio foram incríveis e despertaram em mim uma grande vontade de conhecer como tudo isso funciona e, um dia, também poder trabalhar com isso.<br/><br/>

            Tenho certeza de que as habilidades que desenvolvi em minha carreira anterior, como comunicação, resolução de problemas e conflitos, e trabalho sob pressão, serão valiosas em minha nova função como desenvolvedor.
          </p>          

          <h2>Vamos Conversar</h2>
          <p>
            Se meu trabalho despertou seu interesse e você deseja discutir colaborações, projetos ou oportunidades na área de desenvolvimento, estou à disposição para batermos um papo.
          </p>

          <DownloadButton />
        </ScrollBar>

      </Container>

    </motion.div>
  )
}