import React from 'react';

import {
  Header,
  Container,
  ContainerDescription,
  ContainerLinks,
  ContainerButton,
  ContainerTopSongs,
  TopSongsTitle,
} from './styles';
import TopTracks from '../../components/TopTracks';

export default function Artist() {
  return (
    <Container>
      <Header>
        <ContainerDescription>
          <strong>ARTISTA</strong>
          <h1>Linkin Park</h1>
          <ContainerButton>
            <button>PLAY</button>
            <button>SEGUIR</button>
          </ContainerButton>
          <ContainerLinks>
            <p>Visão geral</p>
            <p>Os fãs também curtem</p>
            <p>Sobre</p>
            <p>AO VIVO</p>
          </ContainerLinks>
        </ContainerDescription>
      </Header>
      <ContainerTopSongs>
        <TopSongsTitle>
          <strong>Popular</strong>
        </TopSongsTitle>
        <TopTracks Position="1" />
        <TopTracks Position="2" />
        <TopTracks Position="3" />
        <TopTracks Position="4" />
        <TopTracks Position="5" />
      </ContainerTopSongs>
    </Container>
  );
}
