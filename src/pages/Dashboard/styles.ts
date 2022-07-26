import styled from 'styled-components';

export const FoodsContainer = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  padding: 40px;
  margin-top: -140px;

  display: grid;

  grid-template-columns: repeat(1, 100%);
  grid-gap: 32px;

  justify-content: center;

  @media (min-width: 840px) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (min-width: 1280px) {
    grid-template-columns: repeat(3, 1fr);
    padding: 40px 0;
  }
`;
