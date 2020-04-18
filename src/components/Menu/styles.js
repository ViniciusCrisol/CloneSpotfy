import styled from 'styled-components';

export const Container = styled.div`
  background-color: #121212;
  position: fixed;
  left: 0;
  height: 100%;
  width: 180px;
  padding: 16px;
  color: #7d7d7d;

  display: flex;
  flex-direction: column;
`;
export const MenuItens = styled.div`
  form {
    width: 100%;
    padding-bottom: 8px;
    border-bottom: 1px solid #303030;
    display: flex;

    input {
      width: 100%;
      height: 26px;
      background: white;
      border: none;
      border-radius: 15px;
      padding: 0 12px;
      color: black;
    }

    button {
      height: 26px;
      padding: 0 12px;
      margin-left: 4px;
      background: tomato;
      border: none;
      border-radius: 15px;
      align-items: center;
      justify-content: center;
      &:hover {
        transition: opacity 200ms;
        opacity: 0.8;
      }
    }
  }

  margin: 12px 0;
  font-weight: bold;

  display: flex;
  flex-direction: column;

  strong {
    font-size: 10px;
    text-transform: uppercase;
    margin: 4px 0;
  }

  > a {
    display: flex;
    align-items: center;
    cursor: pointer;
    font-size: 14px;
    line-height: 28px;
    text-decoration: none;
    color: #7d7d7d;
    height: 22px;

    > svg {
      margin-right: 6px;
    }

    &:hover {
      color: white;
    }
  }
  .active {
    color: white;
    border-left: 2px solid tomato;
    padding-left: 6px;
  }
`;
