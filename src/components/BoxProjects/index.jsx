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
import imgMarket from '../../assets/market.png';
import imgFoodExplorer from '../../assets/imgFoodExplorer.png';

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
import { useTranslation } from 'react-i18next';



export function BoxProjects({setMenuIsOpen, ...rest}) {
  const { t } = useTranslation();
  
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
        <Title title={t('projects.title')} />

        <ScrollBar className="scrollbar">
          <Project 
            title={{h2: "Food Explorer", h3: t('projects.technologiesUsed')}} 
            description={t('projects.foodExplorer.description')}
            links={{repo: "https://github.com/freitasbr01/food-explorer-frontend", deploy: "https://github.com/freitasbr01/food-explorer-frontend"}}
            photo={imgFoodExplorer}
            icons={[ <JavaScriptIcon />, <NodeIcon />, <ReactIcon />, <SqliteIcon />, <HtmlIcon />, <ViteIcon />, <StyledIcon />, <GitIcon />, <GithubIcon /> ]}
          />

          <Project 
            title={{h2: "Portfólio", h3: t('projects.technologiesUsed')}} 
            description={t('projects.portfolio.description')}
            links={{repo: "https://github.com/freitasbr01/portfolio", deploy: "https://alanfreitas.netlify.app"}}
            photo={imgPortifolio}
            icons={[ <JavaScriptIcon />, <ReactIcon />, <HtmlIcon />, <ViteIcon />, <StyledIcon />, <GitIcon />, <GithubIcon /> ]}
          />

          <Project 
            title={{h2: "Market Products", h3: t('projects.technologiesUsed')}}           
            description={t('projects.marketProducts.description')}
            links={{repo: "https://github.com/freitasbr01/market-products", deploy: "https://market-products.netlify.app/"}}
            photo={imgMarket}
            icons={[ <JavaScriptIcon />, <NodeIcon />, <ReactIcon />, <SqliteIcon />, <HtmlIcon />, <ViteIcon />, <StyledIcon />, <GitIcon />, <GithubIcon /> ]}
          />

          <Project 
            title={{h2: "RocketMovies", h3: t('projects.technologiesUsed')}} 
            description={t('projects.rocketMovies.description')}
            links={{repo: "https://github.com/freitasbr01/rocketmovies-front", deploy: "https://rocketmovies01.netlify.app/"}}
            photo={imgRocketMovies}
            icons={[ <JavaScriptIcon />, <NodeIcon />, <ReactIcon />, <SqliteIcon />, <HtmlIcon />, <ViteIcon />, <StyledIcon />, <GitIcon />, <GithubIcon /> ]}
          />

          <Project 
            title={{h2: "Biscoito da Sorte", h3: t('projects.technologiesUsed')}} 
            description={t('projects.biscoitoDaSorte.description')}
            links={{repo: "https://github.com/freitasbr01/biscoito-da-sorte?tab=readme-ov-file", deploy: "https://biscoitodasorte01.netlify.app/"}}
            photo={imgBiscoito}
            icons={[ <JavaScriptIcon />, <HtmlIcon />, <CssIcon />, <GitIcon />, <GithubIcon /> ]}
          />

          <Project 
            title={{h2: "FocusTimer", h3: t('projects.technologiesUsed')}} 
            description={t('projects.focusTimer.description')}
            links={{repo: "https://github.com/freitasbr01/focustimer", deploy: "https://focustimer02.netlify.app/"}}
            photo={imgFocusTimer}
            icons={[ <JavaScriptIcon />, <HtmlIcon />, <CssIcon />, <GitIcon />, <GithubIcon /> ]}
          />

          <Project 
            title={{h2: "Formulário Avalie Mentoria", h3: t('projects.technologiesUsed')}} 
            description={t('projects.mentoringForm.description')}
            links={{repo: "https://github.com/freitasbr01/formulario-avalie-mentoria", deploy: "https://formulario-avalie-mentoria.netlify.app/"}}
            photo={imgFormularioMentoria}
            icons={[ <JavaScriptIcon />, <HtmlIcon />, <CssIcon />, <GitIcon />, <GithubIcon /> ]}
          />

          <Project 
            title={{h2: "Github Favorites", h3: t('projects.technologiesUsed')}} 
            description={t('projects.githubFavorites.description')}
            links={{repo: "https://github.com/freitasbr01/github-favorites", deploy: "https://github-favorites01.netlify.app/"}}
            photo={imgGithubFavorites}
            icons={[ <JavaScriptIcon />, <HtmlIcon />, <CssIcon />, <GitIcon />, <GithubIcon /> ]}
          />

          <Project 
            title={{h2: "RocketNotes", h3: t('projects.technologiesUsed')}} 
            description={t('projects.rocketNotes.description')}
            links={{repo: "https://github.com/freitasbr01/rocketnotes-front", deploy: "https://rocketnotes02.netlify.app/"}}
            photo={imgRocketNotes}
            icons={[ <JavaScriptIcon />, <NodeIcon />, <ReactIcon />, <SqliteIcon />, <HtmlIcon />, <ViteIcon />, <StyledIcon />, <GitIcon />, <GithubIcon /> ]}
          />

          <Project 
            title={{h2: "NLW Expert", h3: t('projects.technologiesUsed')}} 
            description={t('projects.nlwExpert.description')}
            links={{repo: "https://github.com/freitasbr01/nlw-experts?tab=readme-ov-file", deploy: "https://nlw-expert.netlify.app/"}}
            photo={imgNlwExpert}
            icons={[ <JavaScriptIcon />, <HtmlIcon />, <CssIcon />, <GitIcon />, <GithubIcon /> ]}
          />

          <Project 
            title={{h2: "Calculadora IMC", h3: t('projects.technologiesUsed')}} 
            description={t('projects.calculatorIMC.description')}
            links={{repo: "https://github.com/freitasbr01/CalculadoraIMC", deploy: "https://calc-imc01.netlify.app/"}}
            photo={imgCalculadora}
            icons={[ <JavaScriptIcon />, <HtmlIcon />, <CssIcon />, <GitIcon />, <GithubIcon /> ]}
          />

        </ScrollBar>
      </Container>

    </motion.div>
  )
}

