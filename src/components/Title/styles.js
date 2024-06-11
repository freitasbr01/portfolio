import styled from "styled-components";
import { DEVICE_BREAKPOINTS } from '../../styles/deviceBreakpoints';

export const Container = styled.h1`
  width: 100%;
  color: ${({ theme }) => theme.COLORS.LIGHT_200};
  margin-bottom: 5rem;

  display: flex;
  align-items: center;
  gap: 1.2rem;

  svg {
    color: ${({ theme }) => theme.COLORS.MINT_200};
    font-size: 3.5rem;
  }

  span {
    font-size: 2.6rem;
  }
`

  