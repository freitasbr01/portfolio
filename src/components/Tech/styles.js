import styled from "styled-components";
// import { DEVICE_BREAKPOINTS } from '../../styles/deviceBreakpoints';

export const Container = styled.div`
  max-width: 20rem;
  padding: .5rem 1.3rem;

  color: var(--text-color1);
  background: var(--bg-color-tech);
  font-size: 1.4rem;
  border-radius: 6px;

  display: flex;
  align-items: center;
  gap:  1rem;

  svg {
    width: 3.4rem;
    padding: .4rem;
    background: var(--bg-color-tech-icon);
    border-radius: 4px;
  }
`