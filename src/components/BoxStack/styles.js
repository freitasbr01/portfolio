import styled from "styled-components";
import { DEVICE_BREAKPOINTS } from '../../styles/deviceBreakpoints';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  border: 1px solid red;
  background: red;


  h2 {
    color: var(--text-color2);
    font-size: 2.2rem;
    margin-bottom: 2rem;
  }

  @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
    /* .scrollbar { max-height: 65rem; } */
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

export const BoxTech = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;
  margin-bottom: 4rem;

  @media (max-width: ${DEVICE_BREAKPOINTS.XL}) {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
  }
`