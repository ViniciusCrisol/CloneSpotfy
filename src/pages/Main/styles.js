import styled from 'styled-components';

export const ContainerItens = styled.div`
  display: flex;
  flex-wrap: wrap;
  overflow: hidden;
  flex-direction: row;
  justify-content: left;

  @media (max-width: 625px) {
    justify-content: center;
  }
`;
