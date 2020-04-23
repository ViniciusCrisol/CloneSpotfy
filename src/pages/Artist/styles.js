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
    url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAA1BMVEWIiIhYZW6zAAAASElEQVR4nO3BgQAAAADDoPlTX+AIVQEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwDcaiAAFXD1ujAAAAAElFTkSuQmCC');
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
    font-size: 24px;
  }
`;

export const ContainerLinks = styled.div`
  display: flex;
  margin-top: 12px;

  @media (max-width: 453px) {
    display: none;
  }

  p {
    font-weight: bold;
    color: #7d7d7d;
    margin: 0 6px;
    font-size: 12px;
    text-transform: uppercase;
    &:first-child {
      color: white;
    }
  }
`;

export const ContainerButton = styled.div`
  display: flex;
  align-items: center;
  margin: 6px 0;

  @media (max-width: 715px) {
    justify-content: center;
  }

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
      background: none;
      border-radius: 50%;
      border: 2px solid grey;
      width: 32px;

      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
`;

export const ContainerTopSongs = styled.div`
  padding: 32px 32px;
`;

export const TopSongsTitle = styled.div`
  font-size: 16px;
  margin-bottom: 12px;
`;
