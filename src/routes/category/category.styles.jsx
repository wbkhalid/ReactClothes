import styled from 'styled-components';

export const CategoryTitle = styled.h2`
  font-size: 30px;
  color: #000;
  text-align: center;
  text-transform: uppercase;
`;
export const CategoryContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  row-gap: 2rem;
  column-gap: 1rem;
`;
