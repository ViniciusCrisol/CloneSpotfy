import styled from 'styled-components';

export const Container = styled.div`
  background-color: #121212;
  left: 0;
  height: 100%;
  width: 180px;
  padding: 16px;

  display: flex;
  flex-direction: column;
`;
export const MenuItens = styled.div`
  margin: 12px 0;
  color: #7d7d7d;
  font-weight: bold;

  display: flex;
  flex-direction: column;

  strong {
    font-size: 10px;
    text-transform: uppercase;
    margin: 4px 0;
  }

  h3 {
    cursor: pointer;
    font-size: 14px;
    line-height: 38px;
    text-decoration: none;

    display: flex;
    align-items: center;

    > svg {
      margin-right: 8px;
    }

    &:hover {
      color: white;
    }
  }

  > a {
    cursor: pointer;
    font-size: 14px;
    line-height: 28px;
    text-decoration: none;

    &:hover {
      color: white;
    }
  }
`;
