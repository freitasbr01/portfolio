import styled from "styled-components";
import { DEVICE_BREAKPOINTS } from '../../styles/deviceBreakpoints';

export const Container = styled.button`
  width: 100%;
  border: none;
  /* background-color: transparent; */
  font-family: "Poppins", sans-serif;
  font-size: 1.2rem;
  font-weight: 700;

  color: ${({ theme }) => theme.COLORS.MINT_200};

  display: flex;
  align-items: center;
  gap: .8rem;


`