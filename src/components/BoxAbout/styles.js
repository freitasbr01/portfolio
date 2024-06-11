import styled from "styled-components";
// import { DEVICE_BREAKPOINTS } from '../../styles/deviceBreakpoints';

export const Container = styled.div`
  max-width: 180.0rem;
  color: ${({ theme }) => theme.COLORS.LIGHT_400};  

    ::-webkit-scrollbar {
      width: 8px;
    }

    ::-webkit-scrollbar-track {
      background-color: transparent;
    }

    ::-webkit-scrollbar-thumb {
      background-color: ${({ theme }) => theme.COLORS.GRAY_200}; 
      border-radius: .3rem;
    }

  .scrollbar {
    height: 56rem;
    padding-top: .4rem;
    padding-right: 4rem;
    overflow-y: scroll;
  }

  p {    
    font-family: "Poppins", sans-serif;
    font-size: 1.5rem;
    text-align: justify;
  }

  span {
    font-style: italic;
    color: ${({ theme }) => theme.COLORS.LIGHT_200};
  }

  Button {
    border: 1px solid red;
    max-width: 14rem;
    color: ${({ theme }) => theme.COLORS.MINT_200};
    background-color: ${({ theme }) => theme.COLORS.DARK_800};
    border: 2px solid ${({ theme }) => theme.COLORS.MINT_200};
    border-radius: .5rem;
    padding: .6rem 2rem;
    margin-top: 6rem;
    margin-bottom: 5rem;

    svg {
      font-size: 1.7rem;
    }
  }

`