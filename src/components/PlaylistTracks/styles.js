import styled from 'styled-components';

export const Container = styled.div`
  flex: 1;
`;

export const Table = styled.table`
  width: 90%;
  max-width: 840px;
  justify-content: center;
  text-align: left;

  thead th {
    padding: 12px;
    text-transform: uppercase;
    font-size: 12px;
  }
  div {
    border-bottom: 1px solid grey;
  }

  tbody td {
    padding: 8px;

    p {
      font-size: 14px;
    }
  }
`;
