import styled from 'styled-components';
import { DEVICE_BREAKPOINTS } from '../../styles/deviceBreakpoints';

export const Container = styled.div`
  width: 100%;
  background: var(--bg-color1);
  border: var(--border-color);
  border-radius: .8rem;
  
  display: flex;
  align-items: center;
  gap: 4rem;

  margin-bottom: 2.5rem;
  padding: 2rem;

  img {
    max-width: 35rem;
    border-radius: .8rem;
    border: var(--border-color);
    transition: transform 0.3s;
    cursor: zoom-in;
    &:hover {
      transform: scale(1.05);
    } 
  }

  .description {
    h2, h3 {
      color: var(--text-color1);
      font-size: 2rem;
      margin-bottom: 1rem;    
    }

    h3 {
      font-size: 1.6rem;
    }

    p {
      color: var(--text-color2);
      margin-bottom: 2rem;
      font-size: 1.5rem;
    }

    .skills {
      display: flex;
      align-items: center;
      flex-wrap: wrap;
      gap: .6rem;
      margin-bottom: 3rem;
      svg {
        width: 2rem;
      }
    }

    .access {
        color: ${({ theme }) => theme.COLORS.SEA_200};
        display: flex;
        gap: 2rem;
    }

    .access a {
      color: ${({ theme }) => theme.COLORS.SEA_200};
      font-weight: 400;
      margin-left: .5rem;
      font-family: "JetBrains Mono", monospace;
      font-size: 1.3rem;
    }

    .repo, .deploy {
      display: flex;
      align-items: center;
    }
  }

  @media (max-width: ${DEVICE_BREAKPOINTS.XL}) {
    max-width: 37rem;
    flex-direction: column;
    gap: 2rem;

    p {
      text-align: center;
    }
    img {
      width: 100%;
    }

    .description {
      display: flex;
      flex-direction: column;
      align-items: center;
    }
  }

  @media (max-width: ${DEVICE_BREAKPOINTS.SM}) {
    .description {
      h2 {
        font-size: 1.9rem;
      }

      h3 {
        font-size: 1.5rem;
      }

      p {
        font-size: 1.4rem;
      }
    }
  }
`

export const BoxCloseImg = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  img {
    max-width: 90%;
  }
`;

export const CloseButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  color: var(--text-close-icon);
  align-self: self-end;

  &:hover {
    color: var(--text-close-icon-hover);
  }

  svg {
    width: 25px;
    height: 25px;
  }
`;