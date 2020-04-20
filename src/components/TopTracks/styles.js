import styled from 'styled-components';

export const Container = styled.div`
  max-width: 400px;
  position: relative;

  div {
    display: flex;
    align-items: center;
    border-bottom: 1px solid grey;

    img {
      width: 40px;
    }

    p {
      font-size: 12.5px;
      margin: 0 8px;
    }

    strong {
      font-size: 12.5px;
      position: absolute;
      right: 0;
    }
  }
`;
