import styled from 'styled-components';

export const ConatinerItem = styled.div`
  margin: 13px;
  margin-left: 0;
  max-width: 200px;
  height: auto;
  overflow: hidden;

  h1 {
    margin-top: 4px;
    font-weight: bold;
    font-size: 15px;
    color: white;
  }

  p {
    color: #7d7d7d;
    font-weight: bold;
    font-size: 13px;
  }
`;

export const ContainerIMG = styled.div`
  width: 100%;
  height: 200px;
  display: flex;
  justify-content: center;
  align-items: center;

  div {
    position: absolute;
    visibility: hidden;
    color: white;
  }

  img {
    background-color: white;
    width: 100%;
    height: 100%;
  }

  &:hover img {
    transition: 80ms;
    opacity: 0.2;
  }

  &:hover div {
    transition: 80ms;
    visibility: visible;
    opacity: inherit;
  }
`;
