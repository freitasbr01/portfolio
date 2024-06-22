import styled from "styled-components";
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakpoints";

export const Container = styled.aside`
  width: 40rem;
  height: 100vh;

  border-right: var(--border-color);
  font-size: 1.5rem;
  padding: 3rem 1.5rem 0 1.5rem;

  display: flex;
  flex-direction: column;

  @media (max-width: ${DEVICE_BREAKPOINTS.XL}) {
    position: absolute;
    z-index: 1;
    transform: translateX(-100%);
    transition: transform 0.3s ease-in-out;
    
    &[data-menu-is-open="true"] {
      width: 100%;
      background: var(--bg-color2);
      transform: translateX(0);
    }    
  }
`

export const ButtonClose = styled.button`
  background-color: transparent;
  border: none;
  align-self: flex-end;

  > svg {
    font-size: 20px;
    color: ${({ theme }) => theme.COLORS.GRAY_300};
  }
`;

export const Nav = styled.nav`
  width: 100%;

    ul {
      padding-left: .6rem;
      list-style: none;

      li span {
        color: var(--text-color1);
      }
    }

    .link, a {
      color: var(--text-color1);
      display: flex;
      align-items: center;
      gap: 1.5rem;
      padding: .9rem;
      cursor: pointer;
      transition: background-color 0.2s ease;
      margin-bottom: .2rem;
      .icon-color {
        color: ${({ theme }) => theme.COLORS.SEA_100};
      }
    }

    .link:hover, a:hover {
      background-color: ${({ theme }) => theme.COLORS.SEA_400};
      border-radius: .6rem;
    }

    .link.active, .link:focus {
      background-color: ${({ theme }) => theme.COLORS.SEA_400};
      border-radius: .6rem;
    }
    .arrow {
      color: ${({ theme }) => theme.COLORS.SEA_100};
      display: flex;
      gap: 20rem;
      margin-left: auto;
    }
`

export const TitleSection = styled.h5`
  color: ${({ theme }) => theme.COLORS.GRAY_300};
  margin-bottom: 1.5rem;

  &:nth-of-type(2) {
    margin-top: 4rem;
  }
`;

export const ButtonToggleMode = styled.button`
  width: 3rem;
  font-size: 2.5rem;
  background: none;
  color: var(--text-color1);  
  margin-top: auto;
  margin-bottom: 6rem;
  cursor: pointer;
  border: none;
`