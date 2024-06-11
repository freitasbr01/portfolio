import styled from 'styled-components';

export const Container = styled.div`
  max-width: 180.0rem;

  margin: 0 auto;
  color: ${({ theme }) => theme.COLORS.LIGHT_200};
  background-color: ${({ theme }) => theme.COLORS.DARK_800};

  border: 1px solid ${({ theme }) => theme.COLORS.DARK_1000};
  border-radius: .5rem;
  
  padding: 2rem;

  display: flex;
  align-items: center;
  gap: 3rem;

  img {
    max-width: 8rem;
    border-radius: 1rem;
  }

  h2 {
    font-size: 2rem;
  }

  .dev {
    color: ${({ theme }) => theme.COLORS.GRAY_200};
    font-size: 1.4rem; 
    margin-top: .4rem;
    margin-bottom: .8rem;  
  }

  .tag {
    display: flex;
    gap: 2rem;
  }

  .tag p {
    color: ${({ theme }) => theme.COLORS.LIGHT_200};
    background-color: ${({ theme }) => theme.COLORS.DARK_800};
    border: 1px solid ${({ theme }) => theme.COLORS.DARK_1000};
    padding: .5rem;
    border-radius: .5rem;
    font-family: "Montserrat", sans-serif;
    font-size: 1.2rem;
  }
`

