import styled from 'styled-components';
import { DEVICE_BREAKPOINTS } from '../../styles/deviceBreakpoints';

export const Container = styled.div`    

@media (max-width: ${DEVICE_BREAKPOINTS.LG}) {
  display: flex;
  flex-direction: column;
  align-items: center;

  h1 {
    margin-right: 2rem;
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