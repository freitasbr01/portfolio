import styled from "styled-components";
import { DEVICE_BREAKPOINTS } from '../../styles/deviceBreakpoints';

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: grid;
  grid-template-columns: 30rem auto;
  grid-template-rows: 15rem minmax(0, 1fr);
  grid-template-areas: 
  "sidebar header"
  "sidebar main";
`

export const Menu = styled.div`
  grid-area: sidebar;
`

export const Top = styled.div`
  grid-area: header;  
  margin: 2rem 5rem;
`

export const Main = styled.div`
  grid-area: main;
  margin: 2rem 5rem;
  
  .box-main {
    max-width: 180.0rem;
    margin: 0 auto;
    padding: 5rem;
    background-color: ${({ theme }) => theme.COLORS.DARK_800};
    border: 2px solid ${({ theme }) => theme.COLORS.DARK_1000};
    border-radius: .5rem;

    display: flex;
    flex-direction: column;
    align-items: center;

    /* border: 2px solid yellow; */
  }
`