import styled from "styled-components";
import { DEVICE_BREAKPOINTS } from '../../styles/deviceBreakpoints';

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
`

export const Content = styled.div`
  width: 100%;
  margin: 2rem 2rem;
  
  .box-main {    
    max-width: 180.0rem;
    margin: 3rem auto;
    padding: 2.5rem 3rem;
    border: var(--border-color);
    border-radius: .8rem;
  }
`