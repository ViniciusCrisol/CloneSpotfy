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
  height: 260px;

  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  background-image: url('https://i.scdn.co/image/1685533969d5b68cbc630f991e873bd6467f1814');
`;

export const ContainerDescription = styled.div`
  padding: 64px;

  @media (max-width: 715px) {
    text-align: center;
  }

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

  strong {
    font-size: 12px;
  }

  h1 {
    font-size: 44px;
  }
`;
