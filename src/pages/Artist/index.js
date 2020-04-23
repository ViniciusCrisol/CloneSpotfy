import React from 'react';

import { AiOutlineHeart } from 'react-icons/ai';

import {
  Header,
  Container,
  ContainerDescription,
  ContainerLinks,
  ContainerButton,
  ContainerTopSongs,
  TopSongsTitle,
  ContainerAlbuns,
} from './styles';
import TopTracks from '../../components/TopTracks';
import Album from '../../components/Album';
import PlaylistTracks from '../../components/PlaylistTracks';

export default function Artist() {
  return (
    <Container>
      <Header>
        <ContainerDescription>
          <strong>ARTISTA</strong>
          <h1>Lorem Ipsum Artist</h1>
          <ContainerButton>
            <button type="button">PLAY</button>
            <button type="button">
              <AiOutlineHeart size={20} color="grey" />
            </button>
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
        <TopTracks
          Position="1"
          Image="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAA1BMVEWIiIhYZW6zAAAASElEQVR4nO3BgQAAAADDoPlTX+AIVQEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwDcaiAAFXD1ujAAAAAElFTkSuQmCC"
          Name="Lorem Ipsum Music"
          ViewsNumber="120.000"
        />
        <TopTracks
          Position="2"
          Image="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAA1BMVEWIiIhYZW6zAAAASElEQVR4nO3BgQAAAADDoPlTX+AIVQEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwDcaiAAFXD1ujAAAAAElFTkSuQmCC"
          Name="Lorem Ipsum Music"
          ViewsNumber="20.000"
        />
        <TopTracks
          Position="3"
          Image="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAA1BMVEWIiIhYZW6zAAAASElEQVR4nO3BgQAAAADDoPlTX+AIVQEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwDcaiAAFXD1ujAAAAAElFTkSuQmCC"
          Name="Lorem Ipsum Music"
          ViewsNumber="320.000"
        />
        <TopTracks
          Position="4"
          Image="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAA1BMVEWIiIhYZW6zAAAASElEQVR4nO3BgQAAAADDoPlTX+AIVQEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwDcaiAAFXD1ujAAAAAElFTkSuQmCC"
          Name="Lorem Ipsum Music"
          ViewsNumber="420.000"
        />
        <TopTracks
          Position="5"
          Image="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAA1BMVEWIiIhYZW6zAAAASElEQVR4nO3BgQAAAADDoPlTX+AIVQEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwDcaiAAFXD1ujAAAAAElFTkSuQmCC"
          Name="Lorem Ipsum Music"
          ViewsNumber="1.000"
        />
      </ContainerTopSongs>
      <ContainerAlbuns>
        <Album
          AlbumImage="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAA1BMVEWIiIhYZW6zAAAASElEQVR4nO3BgQAAAADDoPlTX+AIVQEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwDcaiAAFXD1ujAAAAAElFTkSuQmCC"
          alt="Album Image"
          AlbumTitle="Lorem Ipsum"
          AlbumDate="2018"
        />
        <PlaylistTracks />
      </ContainerAlbuns>
    </Container>
  );
}
