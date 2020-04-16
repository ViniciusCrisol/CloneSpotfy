import styled from 'styled-components';

export const ConatinerItem = styled.div`
  margin: 13px;
  margin-left: 0;
  width: 200px;
  height: 220px;
  overflow: hidden;

  h1 {
    text-align: center;
    margin-top: 4px;
    font-weight: bold;
    font-size: 15px;
    color: white;
  }
`;

export const ContainerIMG = styled.div`
  width: 100%;
  border-radius: 50%;
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
    border-radius: 50%;
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
