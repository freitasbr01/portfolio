import styled from "styled-components";
import { DEVICE_BREAKPOINTS } from '../../styles/deviceBreakpoints';

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;

  .line {
    position: absolute;
    width: 100%;
    height: .1rem;
    border-radius: 1px;
    background: linear-gradient(145deg, #5dcfc9, #3d73a3);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  }
`

export const Content = styled.div`
  width: 100%;
  margin: 2rem 2rem;
  
  .box-main {    
    max-width: 180.0rem;
    margin: 0rem auto;
    margin-top: 1rem;
    padding: 2.5rem 3rem;
    border: var(--border-color);
    border-radius: .8rem;
  }

  @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
    margin: 1rem 1rem;

    .box-main {
      padding: 1rem 1rem 2rem 1rem;
      margin: 0rem auto;
      margin-top: 2rem;
    }
  }
`