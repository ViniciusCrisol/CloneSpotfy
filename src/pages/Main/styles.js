import styled from 'styled-components';

export const Container = styled.div`
  width: auto;
  flex: 1;
  margin: 0;
  margin-left: 200px;
  color: white;
  padding: 16px 0;
`;

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
