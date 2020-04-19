import React from 'react';

import { Container } from '../../styles/global';
import {
  Header,
  ContainerImage,
  Buttons,
  ContainerDescription,
} from './styles';
import PlaylistTracks from '../../components/PlaylistTracks';

export default function Playlist() {
  return (
    <Container>
      <Header>
        <ContainerImage>
          <img
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAA1BMVEWIiIhYZW6zAAAASElEQVR4nO3BgQAAAADDoPlTX+AIVQEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwDcaiAAFXD1ujAAAAAElFTkSuQmCC"
            alt="Image"
          />
        </ContainerImage>
        <ContainerDescription>
          <strong>PLAYLIST</strong>
          <h1>Lorem Ipsum Playlist</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
            vitae bibendum mi. Nullam nec velit massa. Phasellus sit amet
            vehicula lectus.
          </p>
          <p>
            Criada por: <a>Lorem Ipsum</a> - 69 músicas, 5h 3min
          </p>
          <Buttons>
            <button>PLAY</button>
          </Buttons>
        </ContainerDescription>
      </Header>
      <PlaylistTracks />
    </Container>
  );
}
