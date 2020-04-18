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
            src="https://i.scdn.co/image/ab67706f000000027f0c84268c9dc61aeb37ff4d"
            alt="Image"
          />
        </ContainerImage>
        <ContainerDescription>
          <strong>PLAYLIST</strong>
          <h1>Paylist NAME</h1>
          <p>
            Os hits od rock internacional e nacional estão reunidos desta
            playlist.
          </p>
          <p>
            Criada por: <a>Spots </a> - 69 músicas, 5h 3min{' '}
          </p>
          <Buttons>
            <button>PAUSE</button>
          </Buttons>
        </ContainerDescription>
      </Header>

      <PlaylistTracks />
    </Container>
  );
}
