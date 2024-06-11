import styled from 'styled-components';
// import { DEVICE_BREAKPOINTS } from '../../styles/deviceBreakpoints';

export const Container = styled.div`    
  max-width: 180.0rem;
  
  ::-webkit-scrollbar {
    width: 10px;
  }

  ::-webkit-scrollbar-track {
    background-color: transparent;
  }

  ::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme.COLORS.DARK_1000}; 
    border-radius: .3rem;
    cursor: grab;

  }

    .scrollbar {
    height: 56rem;

    display: flex;
    flex-direction: column;
    gap: 3rem;
    padding-right: 3rem;
    overflow-y: scroll;
  }

  /* border: 2px solid green; */

`