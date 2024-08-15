import styled from 'styled-components';
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakpoints";

export const Container = styled.div`
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

  @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
    align-items: start;
    gap: 1.5rem;
    padding: 1rem;

    img {
      max-width: 5rem;
    }
  }
`

export const Profile = styled.div`
  width: 100%;
  background: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="110"><path d="M0,50 C150,150 350,0 500,50 L500,00 L0,0 Z" fill="rgba(255, 255, 255, 0.1)" /></svg>') repeat-x;
  background-size: cover;
  border-radius: 3px;

  font-family: Poppins, sans-serif;

  h2 { font-size: 2rem; }

  span {
    background: linear-gradient(to right, rgb(255, 165, 0), rgb(230, 98, 55));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  .dev {
    color: var(--text-color1);
    font-size: 1.4rem; 
    margin: .1rem 0rem .8rem 0rem;
  }

  .tag {
    display: flex;
    flex-wrap: wrap;
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

  @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
    .tag {
      p {
        display: none;
      }
    }
  }

  @media (max-width: ${DEVICE_BREAKPOINTS.SM}) {
    h2 {
      font-size: 1.8rem;
    }

    .dev {
    font-size: 1.36rem; 
  }
  }
`

export const ButtonMenu = styled.button`
  background: none;
  border: none;
  display: none;

  > svg {
    font-size: 3rem;
    color: var(--button-menu-color);
  }

  @media (max-width: ${DEVICE_BREAKPOINTS.XL}) {
    display: flex;
    align-self: center;
    margin-right: .5rem;
  }
`