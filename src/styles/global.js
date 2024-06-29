import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :root {
    font-size: 62.5%;
    
    --border-color: 1px solid ${({ theme }) => theme.COLORS.GRAY_600};
    --bg-color1: ${({ theme }) => theme.COLORS.GRAY_400};
    --bg-color2: ${({ theme }) => theme.COLORS.LIGHT_100};
    --bg-color-tech: ${({ theme }) => theme.COLORS.GRAY_400};
    --bg-color-tech-icon: ${({ theme }) => theme.COLORS.OPACITY_200};
    --bg-color-scroll: ${({ theme }) => theme.COLORS.DARK_500};
    --bg-color-scroll-hover: ${({ theme }) => theme.COLORS.DARK_1000};    
    --text-color1: ${({ theme }) => theme.COLORS.DARK_100};
    --text-color2: ${({ theme }) => theme.COLORS.DARK_300};
    --text-close-icon: ${({ theme }) => theme.COLORS.LIGHT_200};
    --text-close-icon-hover: ${({ theme }) => theme.COLORS.LIGHT_500};
    --button-menu-color: ${({ theme }) => theme.COLORS.DARK_100};
    --icon-menu-color: ${({ theme }) => theme.COLORS.DARK_100};
    --link-hover-active-focus: ${({ theme }) => theme.COLORS.GRAY_400};
    --text-mark-color: ${({ theme }) => theme.COLORS.SEA_500};
    --icon-arrow-color: ${({ theme }) => theme.COLORS.DARK_100};
  }

  [data-theme='dark'] {
    font-size: 62.5%;
    
    --border-color: 1px solid ${({ theme }) => theme.COLORS.GRAY_400};
    --bg-color1: ${({ theme }) => theme.COLORS.GRADIENT_100};
    --bg-color2: ${({ theme }) => theme.COLORS.GRADIENT_200};
    --bg-color-tech: ${({ theme }) => theme.COLORS.DARK_1000};
    --bg-color-tech-icon: ${({ theme }) => theme.COLORS.OPACITY_100};
    --bg-color-scroll: ${({ theme }) => theme.COLORS.LIGHT_800};
    --bg-color-scroll-hover: ${({ theme }) => theme.COLORS.GRAY_300};
    --text-color1: ${({ theme }) => theme.COLORS.LIGHT_200};
    --text-color2: ${({ theme }) => theme.COLORS.LIGHT_500};
    --text-close-icon: ${({ theme }) => theme.COLORS.LIGHT_200};
    --text-close-icon-hover: ${({ theme }) => theme.COLORS.LIGHT_500};
    --button-menu-color: ${({ theme }) => theme.COLORS.GRAY_200};
    --icon-menu-color: ${({ theme }) => theme.COLORS.SEA_100};
    --link-hover-active-focus: ${({ theme }) => theme.COLORS.SEA_400};
    --text-mark-color: ${({ theme }) => theme.COLORS.SEA_100};
    --icon-arrow-color: ${({ theme }) => theme.COLORS.SEA_100};
  }  

  body {
    font-family: "Open Sans", sans-serif;
    font-size: 1.6rem;
    color: var(--text-color1);
    background: var(--bg-color2);
  }

  button:hover, a:hover {
    filter: brightness(0.9);
  }

  button, a {
    font-weight: 500;
    outline: none;
    text-decoration: none;
    cursor: pointer;
    transition: filter 0.2s;
  }
`