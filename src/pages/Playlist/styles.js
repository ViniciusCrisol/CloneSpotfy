import styled from 'styled-components';

export const Header = styled.div`
  display: flex;
  flex-wrap: wrap;

  @media (max-width: 903px) {
    justify-content: center;
  }
`;
export const ContainerImage = styled.div`
  margin: 12px;
  img {
    width: 220px;
  }
`;
export const ContainerDescription = styled.div`
  margin: 12px;
  @media (max-width: 903px) {
    text-align: center;
  }

  strong {
    font-size: 12px;
    color: #7d7d7d;
  }
  p {
    max-width: 400px;
    font-weight: bold;
    margin-top: 8px;
    font-size: 14px;
    color: #7d7d7d;
  }

  h1 {
    font-size: 24px;
  }

  a {
    color: white;
    font-size: 14px;
    font-weight: bold;
  }
`;

export const Buttons = styled.div`
  margin-top: 8px;
  > button {
    width: 60px;
    background-color: tomato;
    border: none;
    height: 32px;
    width: 100px;
    border-radius: 16px;
    font-weight: bold;
    font-size: 12px;

    &:hover {
      transition: opacity 200ms;
      opacity: 0.8;
    }
  }
`;
