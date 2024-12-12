import styled from "styled-components";
import { DEVICE_BREAKPOINTS } from '../../styles/deviceBreakpoints';

export const Container = styled.div`
  color: var(--text-color2);
  font-family: "Poppins", sans-serif;
  position: relative;
  overflow: visible;
  border: 1px solid blue;
  
  h2 {
    font-size: 1.7rem;
    color: var(--text-color1);
    margin: 0rem 0 1rem;
  }

  p {
    max-width: 100rem;
    height: 100%;
    font-size: 1.5rem;
    text-align: justify;
    hyphens: auto;

    .mark {
      color: var(--text-mark-color);
      font-style: italic;
      font-weight: normal;
    }
  }

  .scrollbar {
    margin-top: 2rem;
    max-height: 35rem;
  }

  ::-webkit-scrollbar {
    width: 8px;
  }
  ::-webkit-scrollbar-track {
    background-color: transparent;
  }
  ::-webkit-scrollbar-thumb {
    background-color: var(--bg-color-scroll);
    border-radius: .5rem;
    cursor: grab;
  }
  ::-webkit-scrollbar-thumb:hover {
    background-color: var(--bg-color-scroll-hover);
  }

  @media (max-width: ${DEVICE_BREAKPOINTS.SM}) {
    h1 { font-size: 2.1rem; }
    h2 { font-size: 1.5rem; }
    p { font-size: 1.4rem; }
  }
`

export const Title = styled.div`
  color: var(--text-color2);
  font-family: "Poppins", sans-serif;
  max-width: 90rem;
  overflow: hidden;
  padding: 1rem;

  .h2 {
    color: var(--text-color1);
    font-size: 2.8rem;
    font-weight: 600;
    margin-top: 1rem;
  }

  h1 {
    color: var(--text-color1);
    font-size: 4rem;
    font-weight: 600;
    margin-top: -1.5rem;

    span {
      background: linear-gradient(to right, rgb(255, 165, 0), rgb(230, 98, 55));
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
  }

  .description {
    margin-top: 1rem;
    margin-bottom: 4rem;
  }

  .links {
    display: flex;
    align-items: center;
    gap: 3rem;
    margin-bottom: 1rem;
    flex-wrap: wrap;

    .linkedin, .github {
      color: var(--text-color2);
      display: flex;
      align-items: center;
      gap: .2rem;

      svg {
        font-size: 1.8rem;
        font-family: 400;
      }

      span {
        font-size: 1.4rem;
        font-style: italic;
        &:hover {
          color: var(--text-color1);
        }
      }
    }
  }

  @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
    .h2 { font-size: 2rem;}
    h1 { font-size: 3rem; }
  }

  @media (max-width: ${DEVICE_BREAKPOINTS.SM}) {
    .h2 { font-size: 1.8rem; }
    h1 { font-size: 2.5rem; }
  }
`

export const Button = styled.button`
  color: ${({ theme }) => theme.COLORS.PRIMARY_300};
  background: none;
  border: none;
  margin: -0.2rem 0rem 0rem 4rem;

  transform: translateX(-50%);
  cursor: pointer;
  border-radius: 0.375rem;
  transition: color 0.3s ease;

  .see-more {
    font-size: 1.4rem;
    font-weight: 500;
    font-style: italic;
  }

  svg {
    height: 3rem;
    width: 3rem;
    animation: bounce 1s cubic-bezier(.1, 0, 0.58, 1) infinite;
    margin-top: -.5rem;
    margin-left: .5rem;

    @keyframes bounce {
    0% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(5px);
    }

    100% {
      transform: translateY(0); 
    }
  }
 }
`;

