import styled from 'styled-components';
import { DEVICE_BREAKPOINTS } from '../../styles/deviceBreakpoints';

export const Container = styled.div`

  @media (max-width: ${DEVICE_BREAKPOINTS.XXL}) {
    .scrollbar { max-height: 60rem; }
  }

  @media (max-width: ${DEVICE_BREAKPOINTS.XL}) {
    display: flex;
    flex-direction: column;
    align-items: center;

    h1 {
      margin-right: 1rem;
    }
  }

  @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
    .scrollbar { max-height: 65rem; }
  }

  @media (max-width: ${DEVICE_BREAKPOINTS.SM}) {
    h1 {
      font-size: 2.4rem;
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