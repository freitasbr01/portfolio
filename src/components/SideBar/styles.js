import styled from "styled-components";
// import { DEVICE_BREAKPOINTS } from '../../styles/deviceBreakpoints';

export const Container = styled.aside`
  width: 100%;
  height: 100vh;
  border-right: 1px solid ${({ theme }) => theme.COLORS.DARK_1000};
  font-size: 1.5rem;
  padding: 3rem 1.5rem 0 1.5rem;
  background-color: ${({ theme }) => theme.COLORS.DARK_800};

  h5 {
    color: ${({ theme }) => theme.COLORS.GRAY_200};
    margin-bottom: 1.5rem;
  }

  h5:nth-of-type(2) {
    margin-top: 4rem;
  }

  ul {
    padding-left: .6rem;
  }

  svg {
    color: ${({ theme }) => theme.COLORS.LIGHT_200};
  }

  li, a {
    color: ${({ theme }) => theme.COLORS.LIGHT_200};
    list-style: none;    
    font-weight: 400;
  }

  li {
    display: flex;
    align-items: center;
    gap: 1rem;
    padding: .9rem;
    cursor: pointer;

    transition: background-color 0.2s ease;
  }

  li:hover {
    background-color: ${({ theme }) => theme.COLORS.MINT_500};
    border-radius: .6rem;
  }

  /* li:active {
    background-color: ${({ theme }) => theme.COLORS.MINT_500};
  }

  li:focus {
    background-color: ${({ theme }) => theme.COLORS.MINT_500};
  } */

  .arrow {
    color: ${({ theme }) => theme.COLORS.MINT_200};
    display: flex;
    margin-left: auto;
  }
`

