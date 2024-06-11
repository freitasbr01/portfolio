import styled from 'styled-components';
// import { DEVICE_BREAKPOINTS } from '../../styles/deviceBreakpoints';

export const Container = styled.div`
  border: 3px solid ${({ theme }) => theme.COLORS.DARK_1000};
  border-radius: .5rem;

  width: 100%;
  padding: 2.5rem;
  cursor: url('../../assets/cursor.svg'), auto; 
  display: flex;
  align-items: center;
  gap: 4rem;

  img {
    width: 30rem;
    border-radius: .3rem;
    border: 1px solid ${({ theme }) => theme.COLORS.DARK_900};
    transition: transform 0.3s;
    cursor: zoom-in;
    &:hover {
      transform: scale(1.05);
    }
  }

  h2, h3 {
    color: ${({ theme }) => theme.COLORS.LIGHT_200};
    margin-bottom: 1rem;
  }

  p {
    /* max-width: 50rem; */
    color: ${({ theme }) => theme.COLORS.GRAY_200};
    margin-bottom: 2rem;  
  }

  .skills {
    display: flex;
    align-items: center;
    gap: 1rem;
    margin-bottom: 5rem;
    svg {
      max-width: 3rem;
      max-height: 3rem;
    }
  }

  .access {
    color: ${({ theme }) => theme.COLORS.LIGHT_600};
    display: flex;
    align-items: center;
    gap: 2rem;
  }

  .access a {
    color: ${({ theme }) => theme.COLORS.LIGHT_600};
    font-weight: 500;
    margin-left: .5rem;
  }

  /* border: 1px solid red; */
`

export const CloseButton = styled.button`
  background: none;
  border: none;
  color: ${({ theme }) => theme.COLORS.GRAY_100};
  cursor: pointer;

  &:hover {
    color: ${({ theme }) => theme.COLORS.GRAY_200};
  }

  svg {
    width: 25px;
    height: 25px;
  }
`;