import styled from "styled-components";
import { DEVICE_BREAKPOINTS } from '../../styles/deviceBreakpoints';

export const Container = styled.a`
  max-width: 14rem;

  font-family: "Poppins", sans-serif;
  font-size: 1.2rem;
  font-weight: 700;

  color: var(--text-color1);
  background: var(--bg-color1);
  border: var(--border-color);
  border-radius: .5rem;

  display: flex;
  align-items: center;
  gap: .8rem;
  text-decoration: none;

  padding: .6rem 2rem;
  margin-top: 6rem;
  margin-bottom: 5rem;

  svg {
    font-size: 1.8rem;
  }

`