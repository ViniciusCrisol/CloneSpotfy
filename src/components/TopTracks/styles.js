import styled from 'styled-components';

export const Container = styled.div`
  max-width: 800px;
  position: relative;
  margin: 2px 0;

  div {
    display: flex;
    align-items: center;

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
