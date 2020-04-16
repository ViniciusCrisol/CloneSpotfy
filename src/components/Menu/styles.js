import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Container = styled.div`
  background-color: #121212;
  position: fixed;
  left: 0;
  height: 100%;
  width: 180px;
  padding: 16px;

  display: flex;
  flex-direction: column;
`;
export const MenuItens = styled.div`
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

    > svg {
      margin-right: 6px;
    }

    &:hover {
      color: white;
    }
  }
  .active {
    color: white;
  }
`;
