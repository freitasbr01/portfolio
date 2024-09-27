import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Defina as traduções
const resources = {
  en: {
    translation: {
      sidebar: {
        about: "About me",
        projects: "Projects",
        resume: "Resume",
        networks: "Networks"
      },
      header: {
        position: "Full Stack Developer"
      },
      about: {
        hello: "Hi!",
        am: "I'm",
        description: "A technology enthusiast and passionate about innovation …",
        title: "About me",
        text: "I am a <1>Web Developer</1>, studying <1>Systems Analysis and Development</1>, with a degree in Production Engineering. I have gained experience in personal and academic projects, involving interface design, code management, and systems integration. <br /><br /> I have solid experience in the technology field within the communication sector. During my time at <1>Globo</1>, I worked as a Technical Intern, Systems Technician, and Technology Analyst, where I gained knowledge in process flows, problem-solving, operational communication, and developed a strong sense of dedication, commitment, and quality assurance. <br /><br /> Additionally, I have <1>international experience</1> in volunteer work, having spent five months in <1>Canada</1>, where I helped organize events and did gardening work. My English is intermediate, and I continue studying to improve the language. <br /><br /> If my profile piqued your interest and you would like to discuss opportunities in development, collaborations, or projects, I am available for a conversation."
      },
      projects: {
        title: "Projects",
        technologiesUsed: "Technologies used",
        repository: "Repository",
        foodExplorer: {
          description: "It is a web application for a virtual restaurant, allowing administrators to manage the menu and customers to explore and place orders for dishes intuitively."
        },
        portfolio: {
          description: "In my portfolio as a developer, I implemented some features such as dark/light mode, responsive design for devices, transitions, and animations."
        },
        marketProducts: {
          description: "A project dedicated to the registration of products for a virtual marketplace website."
        },
        rocketMovies: {
          description: "Custom management system for favorite movie notes. Allows adding, categorizing, and launching a review."
        },
        biscoitoDaSorte: {
          description: "Project of an interactive web application called “Fortune Cookie” that allows users to open a virtual fortune cookie."
        },
        focusTimer: {
          description: "A countdown web application with the ability to increase or decrease the time in 5-minute intervals."
        },
        mentoringForm: {
          description: "Mentorship form that collects personal information from the user and the mentor chosen from a predefined list. Allows providing feedback and scheduling the next mentorship."
        },
        githubFavorites: {
          description: "An interactive web application that integrates with the GitHub API. This application allows users to favorite other GitHub users of interest."
        },
        rocketNotes: {
          description: "General notes management system. Allows users to keep an organized record of their notes on a variety of topics."
        },
        nlwExpert: {
          description: "Project of a JavaScript quiz to test technical knowledge and get feedback on the number of correct answers."
        },
        calculatorIMC: {
          description: "Project of a web application to calculate BMI, just provide height and weight to perform the calculation."
        }
      }
    }
  },


  pt: {
    translation: {
      sidebar: {
        about: "Sobre",
        projects: "Projetos",
        resume: "Currículo",
        networks: "Redes"
      },
      header: {
        position: "Desenvolvedor Full Stack"
      },
      about: {
        hello: "Olá!",
        am: "Eu sou",
        description: "Um entusiasta da tecnologia e apaixonado por inovação ...",
        title: "Sobre mim",
        text: "Sou <1>Desenvolvedor Web</1>, estudante de <1>Análise e Desenvolvimento de Sistemas</1>, com Graduação em Engenharia de Produção. Adquiri experiência em projetos pessoais e acadêmicos, envolvendo design de interfaces, gerenciamento de código e integração de sistemas. <br /><br /> Possuo sólida experiência na área de tecnologia no setor de comunicação. Durante minha trajetória na <1>Globo</1>, atuei como Estagiário Técnico, Técnico de Sistemas e Analista de Tecnologia, onde adquiri conhecimentos em fluxos de processos, resolução de problemas, comunicação operacional e desenvolvi um forte senso de dedicação, comprometimento e compromisso com a qualidade. <br /><br /> Além disso, tenho <1>experiência internacional</1> em trabalho voluntário, tendo passado cinco meses no <1>Canadá</1>, onde ajudei na organização de eventos e realizei trabalhos de jardinagem. Meu inglês é intermediário, e continuo estudando para aprimorar o idioma. <br /><br /> Se o meu perfil despertou interesse e você deseja discutir oportunidades na área de desenvolvimento, colaborações ou projetos, estou à disposição para uma conversa."
      },
      projects: {
        title: "Projetos",
        technologiesUsed: "Tecnologias utilizadas",
        repository: "Repositório",
        foodExplorer: {
          description: "É uma aplicação web para um restaurante virtual, permitindo que administradores gerenciem o menu e que clientes explorem e façam pedidos de pratos de forma intuitiva."
        },
        portfolio: {
          description: "No meu portfólio como desenvolvedor, apliquei algumas funcionalidades como dark/light mode, design responsivo para dispositivos, transições e animações."
        },
        marketProducts: {
          description: "Um projeto dedicado ao cadastro de produtos para um site de mercado virtual."
        },
        rocketMovies: {
          description: "Sistema de gerenciamento personalizado de anotações de filmes favoritos. Permite adicionar, categorizar e lançar uma avaliação."
        },
        biscoitoDaSorte: {
          description: "Projeto de um aplicativo web interativo chamado “Biscoito da Sorte” que permite aos usuários abrir um biscoito da sorte virtual."
        },
        focusTimer: {
          description: "Uma aplicação web de contagem regressiva com a capacidade de aumentar ou diminuir o tempo em intervalos de 5 minutos."
        },
        mentoringForm: {
          description: "Formulário de mentoria que coleta informações pessoais do usuário e do mentor escolhido de uma lista pré-definida. Permite fornecer feedback e agendar a próxima mentoria."
        },
        githubFavorites: {
          description: "Uma aplicação web interativa que se integra à API do GitHub. Esta aplicação permite aos usuários favoritar outros usuários do GitHub de seu interesse."
        },
        rocketNotes: {
          description: "Sistema de gerenciamento de anotações de gerais. Permite que os usuários mantenham um registro organizado de suas anotações em uma variedade de tópicos."
        },
        nlwExpert: {
          description: "Projeto de um quiz sobre JavaScript para testar os conhecimentos técnicos e ter um retorno sobre a quantidade de questões acertadas."
        },
        calculatorIMC: {
          description: "Projeto de um aplicativo web para calcular o IMC, basta fornecer a altura e o peso para realizar o cálculo."
        }
      }
    }
  }


};


// Inicialize o i18next
i18n.use(initReactI18next).init({
  resources,
  lng: 'en', 
  interpolation: {
    escapeValue: false,
  }
});

export default i18n;
