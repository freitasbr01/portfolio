import styled from 'styled-components';
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakpoints";

export const Container = styled.div`
  /* border: 1px solid red; */
  max-width: 180.0rem;
  border-radius: .5rem;
  margin: 0 auto;
  padding: 2rem;
  display: flex;
  align-items: center;
  gap: 3rem;

  img {
    max-width: 8rem;
    border-radius: 1rem;
  }
`

export const Profile = styled.div`
  width: 100%;

  h2 {
    font-size: 2rem;
  }

  .dev {
    color: ${({ theme }) => theme.COLORS.GRAY_300};
    font-size: 1.4rem; 
    margin: .1rem 0rem .8rem 0rem;
  }

  .tag {
    display: flex;
    gap: 1.5rem;  
  }

  .tag p {
    background: var(--bg-color1);
    border: var(--border-color);
    padding: .4rem;
    border-radius: .5rem;
    font-family: "Montserrat", sans-serif;
    font-size: 1.2rem;    
  }
`

export const ButtonMenu = styled.button`
  background: none;
  border: none;
  display: none;

  > svg {
    font-size: 3rem;
    color: ${({ theme }) => theme.COLORS.GRAY_200}
  }

  @media (max-width: ${DEVICE_BREAKPOINTS.LG}) {
    display: flex;
    align-self: flex-start;
    margin-right: 2.5rem
  }

`