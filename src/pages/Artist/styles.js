import styled from 'styled-components';

export const Container = styled.div`
  width: auto;
  flex: 1;
  margin-left: 180px;
`;

export const Header = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  height: 200px;

  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  background-image: linear-gradient(to top, #181818, rgba(0, 0, 0, 0)),
    url('https://i.scdn.co/image/1685533969d5b68cbc630f991e873bd6467f1814');
`;

export const ContainerDescription = styled.div`
  padding: 64px 32px;

  @media (max-width: 715px) {
    text-align: center;
  }
  strong {
    font-size: 12px;
  }

  h1 {
    font-size: 44px;
  }
`;

export const ContainerLinks = styled.div`
  display: flex;

  p {
    font-weight: bold;
    color: #7d7d7d;
    margin: 6px;
    font-size: 13px;
    text-transform: uppercase;
    border-bottom: 1px solid tomato;

    &:first-child {
      color: white;
    }
  }
`;

export const ContainerButton = styled.div`
  button {
    font-weight: bold;
    width: 60px;
    background-color: tomato;
    border: none;
    height: 32px;
    width: 100px;
    border-radius: 16px;

    &:hover {
      transition: opacity 200ms;
      opacity: 0.8;
    }

    &:last-child {
      margin-left: 12px;
    }
  }
`;
