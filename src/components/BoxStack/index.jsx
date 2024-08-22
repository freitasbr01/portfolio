import { Container, BoxTech } from './styles';

import { ScrollBar } from '../ScrollBar';
import { Title } from '../Title/index';
import { Tech } from '../Tech';

import CssIcon from '../Icons/CssIcon';
import HtmlIcon from '../Icons/HtmlIcon';
import JavaScriptIcon from '../Icons/JavaScriptIcon';
import ReactIcon from '../Icons/ReactIcon';
import ViteIcon from '../Icons/ViteIcon';
import StyledIcon from '../Icons/StyledIcon';
import NodeIcon from '../Icons/NodeIcon';
import ExpressIcon from '../Icons/ExpressIcon';
import KnexIcon from '../Icons/KnexIcon';
import SqliteIcon from '../Icons/SqliteIcon';
import GitIcon from '../Icons/GitIcon';
import GithubIcon from '../Icons/GithubIcon';
import JestIcon from '../Icons/JestIcon';

import PhotoshopIcon from '../Icons/PhotoshopIcon';
import FigmaIcon from '../Icons/FigmaIcon';
import VscodeIcon from '../Icons/VscodeIcon';
import BeekeeperIcon from '../Icons/BeekeeperIcon';
import InsomniaIcon from '../Icons/InsomniaIcon';
import TypescriptIcon from '../Icons/TypescriptIcon';

// import DiscordIcon from '../Icons/DiscordIcon';
// import TeamsIcon from '../Icons/TeamsIcon';
// import NotionIcon from '../Icons/NotionIcon';

import { motion } from 'framer-motion';

export function BoxStack({ ...rest }) {
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
        <Title title="Tech Stack" />

        <ScrollBar>
          <h2>Front-end</h2>
          <BoxTech>
            <Tech title="HTML" icon={HtmlIcon} />
            <Tech title="CSS" icon={CssIcon} />
            <Tech title="JavaScript" icon={JavaScriptIcon} />
            <Tech title="TypeScript" icon={TypescriptIcon} />        
            <Tech title="ReactJS" icon={ReactIcon} />
            <Tech title="Vite" icon={ViteIcon} />
            <Tech title="Styled Components" icon={StyledIcon} />
          </BoxTech>

          <h2>Back-end</h2>
          <BoxTech>
            <Tech title="JavaScript" icon={JavaScriptIcon} />
            <Tech title="TypeScript" icon={TypescriptIcon} />
            <Tech title="NodeJS" icon={NodeIcon} />
            <Tech title="Express" icon={ExpressIcon} />
            <Tech title="Knex" icon={KnexIcon} />        
          </BoxTech>
          
          <h2>Database</h2>
          <BoxTech>
            <Tech title="SQLite" icon={SqliteIcon} />
          </BoxTech>

          <h2>Controle de versão</h2>
          <BoxTech>
            <Tech title="Git" icon={GitIcon} />
            <Tech title="Github" icon={GithubIcon} />
          </BoxTech>

          <h2>Testes</h2>
          <BoxTech>
            <Tech title="Jest" icon={JestIcon} />
          </BoxTech>

          <h2>Design</h2>
          <BoxTech>
            <Tech title="Photoshop" icon={PhotoshopIcon} />
            <Tech title="Figma" icon={FigmaIcon} />

          </BoxTech>

          <h2>Apps</h2>
          <BoxTech>
            <Tech title="VScode" icon={VscodeIcon} />
            <Tech title="Beekeeper" icon={BeekeeperIcon} />
            <Tech title="Insomnia" icon={InsomniaIcon} />
            {/* <Tech title="Discord" icon={DiscordIcon} /> */}
            {/* <Tech title="Teams" icon={TeamsIcon} /> */}
            {/* <Tech title="Notion" icon={NotionIcon} /> */}
          </BoxTech>
        </ScrollBar>

      </Container>
    </motion.div>
  )
}