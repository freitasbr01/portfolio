import { Container } from './styles';
import { Project } from '../Project'

import imgPortifolio from '../../assets/portfolio.png';
import imgRocketMovies from '../../assets/rocketmovies.png';
import imgRocketNotes from '../../assets/rocketnotes.png';
import imgBiscoito from '../../assets/biscoito.png';
import imgNlwExpert from '../../assets/nlw-expert.png';
import imgCalculadora from '../../assets/calculadora.png';
import imgFocusTimer from '../../assets/contador.png';
import imgFormularioMentoria from '../../assets/formulario-avalie.png';
import imgGithubFavorites from '../../assets/github.png';

import { Title } from '../../components/Title';
import { ScrollBar } from '../../components/ScrollBar';


import HtmlIcon from '../Icons/HtmlIcon';
import CssIcon from '../Icons/CssIcon';
import JavaScriptIcon from '../Icons/JavaScriptIcon';
import ReactIcon from '../Icons/ReactIcon';
import ViteIcon from '../Icons/ViteIcon';
import StyledIcon from '../Icons/StyledIcon';
import GitIcon from '../Icons/GitIcon';
import GithubIcon from '../Icons/GithubIcon';
import NodeIcon from '../Icons/NodeIcon';
import SqliteIcon from '../Icons/SqliteIcon';

import { motion } from 'framer-motion';

export function BoxProjects({ ...rest}) {
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

      <Container>
        <Title title="Projetos" />

        <ScrollBar>
          <Project 
            title={{h2: "Portfólio", h3: "Tecnologias utilizadas"}} 
            description="No meu portfólio como desenvolvedor, apliquei algumas funcionalidades como dark/light mode, responsividade para dispositivos, transições e animações."
            links={{repo: "https://github.com/freitasbr01/portfolio", deploy: "https://alanfreitas.netlify.app"}}
            photo={imgPortifolio}
            icons={[ <JavaScriptIcon />, <ReactIcon />, <HtmlIcon />, <ViteIcon />, <StyledIcon />, <GitIcon />, <GithubIcon /> ]}
          />

          <Project 
            title={{h2: "RocketMovies", h3: "Tecnologias utilizadas"}} 
            description="Sistema de gerenciamento personalizado de anotações de filmes favoritos. Permite adicionar, categorizar e lançar uma avaliação."
            links={{repo: "https://github.com/freitasbr01/rocketmovies-front", deploy: "https://rocketmovies01.netlify.app/"}}
            photo={imgRocketMovies}
            icons={[ <JavaScriptIcon />, <NodeIcon />, <ReactIcon />, <SqliteIcon />, <HtmlIcon />, <ViteIcon />, <StyledIcon />, <GitIcon />, <GithubIcon /> ]}
          />


          <Project 
            title={{h2: "Biscoito da Sorte", h3: "Tecnologias utilizadas"}} 
            description="Projeto de um aplicativo web interativo chamado “Biscoito da Sorte” que permite aos usuários abrir um biscoito da sorte virtual."
            links={{repo: "https://github.com/freitasbr01/biscoito-da-sorte?tab=readme-ov-file", deploy: "https://biscoitodasorte01.netlify.app/"}}
            photo={imgBiscoito}
            icons={[ <JavaScriptIcon />, <HtmlIcon />, <CssIcon />, <GitIcon />, <GithubIcon /> ]}
          />

          <Project 
            title={{h2: "FocusTimer", h3: "Tecnologias utilizadas"}} 
            description="Uma aplicação web de contagem regressiva com a capacidade de aumentar ou diminuir o tempo em intervalos de 5 minutos."
            links={{repo: "https://github.com/freitasbr01/focustimer", deploy: "https://focustimer02.netlify.app/"}}
            photo={imgFocusTimer}
            icons={[ <JavaScriptIcon />, <HtmlIcon />, <CssIcon />, <GitIcon />, <GithubIcon /> ]}
          />

          <Project 
            title={{h2: "Formulário Avalie Mentoria", h3: "Tecnologias utilizadas"}} 
            description="Formulário de mentoria que coleta informações pessoais do usuário e do mentor escolhido de uma lista pré-definida. Permite fornecer feedback e agendar a próxima mentoria."
            links={{repo: "https://github.com/freitasbr01/formulario-avalie-mentoria", deploy: "https://formulario-avalie-mentoria.netlify.app/"}}
            photo={imgFormularioMentoria}
            icons={[ <JavaScriptIcon />, <HtmlIcon />, <CssIcon />, <GitIcon />, <GithubIcon /> ]}
          />

          <Project 
            title={{h2: "Github Favorites", h3: "Tecnologias utilizadas"}} 
            description="Uma aplicação web interativa que se integra à API do GitHub. Esta aplicação permite aos usuários favoritar outros usuários do GitHub de seu interesse."
            links={{repo: "https://github.com/freitasbr01/github-favorites", deploy: "https://github-favorites01.netlify.app/"}}
            photo={imgGithubFavorites}
            icons={[ <JavaScriptIcon />, <HtmlIcon />, <CssIcon />, <GitIcon />, <GithubIcon /> ]}
          />

          <Project 
            title={{h2: "RocketNotes", h3: "Tecnologias utilizadas"}} 
            description="Sistema de gerenciamento de anotações de gerais. Permite que os usuários mantenham um registro organizado de suas anotações em uma variedade de tópicos."
            links={{repo: "https://github.com/freitasbr01/rocketnotes-front", deploy: "https://rocketnotes02.netlify.app/"}}
            photo={imgRocketNotes}
            icons={[ <JavaScriptIcon />, <NodeIcon />, <ReactIcon />, <SqliteIcon />, <HtmlIcon />, <ViteIcon />, <StyledIcon />, <GitIcon />, <GithubIcon /> ]}
          />

          <Project 
            title={{h2: "NLW Expert", h3: "Tecnologias utilizadas"}} 
            description="Projeto de um quiz sobre JavaScript para testar os conhecimentos técnicos e ter um retorno sobre a quantidade de questões acertadas."
            links={{repo: "https://github.com/freitasbr01/nlw-experts?tab=readme-ov-file", deploy: "https://nlw-expert.netlify.app/"}}
            photo={imgNlwExpert}
            icons={[ <JavaScriptIcon />, <HtmlIcon />, <CssIcon />, <GitIcon />, <GithubIcon /> ]}
          />

          <Project 
            title={{h2: "Calculadora IMC", h3: "Tecnologias utilizadas"}} 
            description="Projeto de um aplicativo web para calcular o IMC, basta fornecer a altura e o peso para realizar o cálculo."
            links={{repo: "https://github.com/freitasbr01/CalculadoraIMC", deploy: "https://calc-imc01.netlify.app/"}}
            photo={imgCalculadora}
            icons={[ <JavaScriptIcon />, <HtmlIcon />, <CssIcon />, <GitIcon />, <GithubIcon /> ]}
          />

        </ScrollBar>
      </Container>

    </motion.div>
  )
}

