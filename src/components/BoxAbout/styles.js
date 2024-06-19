import styled from "styled-components";
// import { DEVICE_BREAKPOINTS } from '../../styles/deviceBreakpoints';

export const Container = styled.div`
  color: var(--text-color2);
  font-family: "Poppins", sans-serif;

  h2 {
    font-size: 1.7rem;
    color: var(--text-color1);
    margin: 3rem 0 1rem;
  }

  p {    
    font-size: 1.5rem;
    text-align: justify;

    .spanBold {
      color: var(--text-color2);
      font-weight: bold;
    }

    span {
      color: ${({ theme }) => theme.COLORS.SEA_100};
    }
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
`