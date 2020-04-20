import React from 'react';

import { Container } from '../../styles/global';
import { ContainerItens } from './styles';
import SquareContainer from '../../components/SquareContainer';
import CircleContainer from '../../components/CircleContainer';
import IndexText from '../../components/IndexText';

export default function Main() {
  return (
    <Container>
      {/* Recently Played */}

      <IndexText Text="Tocadas Recentemente" />
      <ContainerItens>
        <SquareContainer
          LinkAdress="Playlist"
          Title="Lorem Ipsum Playlist"
          Image="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAA1BMVEWIiIhYZW6zAAAASElEQVR4nO3BgQAAAADDoPlTX+AIVQEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwDcaiAAFXD1ujAAAAAElFTkSuQmCC"
          Description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        />
        <SquareContainer
          LinkAdress="Playlist"
          Title="Lorem Ipsum Playlist"
          Image="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAA1BMVEWIiIhYZW6zAAAASElEQVR4nO3BgQAAAADDoPlTX+AIVQEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwDcaiAAFXD1ujAAAAAElFTkSuQmCC"
          Description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        />
        <SquareContainer
          LinkAdress="Playlist"
          Title="Lorem Ipsum Playlist"
          Image="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAA1BMVEWIiIhYZW6zAAAASElEQVR4nO3BgQAAAADDoPlTX+AIVQEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwDcaiAAFXD1ujAAAAAElFTkSuQmCC"
          Description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        />
        <SquareContainer
          LinkAdress="Playlist"
          Title="Lorem Ipsum Playlist"
          Image="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAA1BMVEWIiIhYZW6zAAAASElEQVR4nO3BgQAAAADDoPlTX+AIVQEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwDcaiAAFXD1ujAAAAAElFTkSuQmCC"
          Description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        />
        <SquareContainer
          LinkAdress="Playlist"
          Title="Lorem Ipsum Playlist"
          Image="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAA1BMVEWIiIhYZW6zAAAASElEQVR4nO3BgQAAAADDoPlTX+AIVQEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwDcaiAAFXD1ujAAAAAElFTkSuQmCC"
          Description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        />
        <SquareContainer
          LinkAdress="Playlist"
          Title="Lorem Ipsum Playlist"
          Image="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAA1BMVEWIiIhYZW6zAAAASElEQVR4nO3BgQAAAADDoPlTX+AIVQEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwDcaiAAFXD1ujAAAAAElFTkSuQmCC"
          Description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        />
      </ContainerItens>

      {/* Favorites */}

      <IndexText Text="Favoritos" />
      <ContainerItens>
        <CircleContainer
          LinkAdress="Artist"
          Title="Lorem Ipsum Artist"
          Image="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAA1BMVEWIiIhYZW6zAAAASElEQVR4nO3BgQAAAADDoPlTX+AIVQEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwDcaiAAFXD1ujAAAAAElFTkSuQmCC"
        />
        <CircleContainer
          LinkAdress="Artist"
          Title="Lorem Ipsum Artist"
          Image="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAA1BMVEWIiIhYZW6zAAAASElEQVR4nO3BgQAAAADDoPlTX+AIVQEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwDcaiAAFXD1ujAAAAAElFTkSuQmCC"
        />
        <CircleContainer
          LinkAdress="Artist"
          Title="Lorem Ipsum Artist"
          Image="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAA1BMVEWIiIhYZW6zAAAASElEQVR4nO3BgQAAAADDoPlTX+AIVQEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwDcaiAAFXD1ujAAAAAElFTkSuQmCC"
        />
        <CircleContainer
          LinkAdress="Artist"
          Title="Lorem Ipsum Artist"
          Image="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAA1BMVEWIiIhYZW6zAAAASElEQVR4nO3BgQAAAADDoPlTX+AIVQEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwDcaiAAFXD1ujAAAAAElFTkSuQmCC"
        />
      </ContainerItens>

      {/* Recommendation */}

      <IndexText Text="Recomendações" />
      <ContainerItens>
        <SquareContainer
          LinkAdress="Playlist"
          Title="Lorem Ipsum Playlist"
          Image="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAA1BMVEWIiIhYZW6zAAAASElEQVR4nO3BgQAAAADDoPlTX+AIVQEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwDcaiAAFXD1ujAAAAAElFTkSuQmCC"
          Description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        />
        <SquareContainer
          LinkAdress="Playlist"
          Title="Lorem Ipsum Playlist"
          Image="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAA1BMVEWIiIhYZW6zAAAASElEQVR4nO3BgQAAAADDoPlTX+AIVQEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwDcaiAAFXD1ujAAAAAElFTkSuQmCC"
          Description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        />
        <SquareContainer
          LinkAdress="Playlist"
          Title="Lorem Ipsum Playlist"
          Image="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAA1BMVEWIiIhYZW6zAAAASElEQVR4nO3BgQAAAADDoPlTX+AIVQEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwDcaiAAFXD1ujAAAAAElFTkSuQmCC"
          Description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        />
        <SquareContainer
          LinkAdress="Playlist"
          Title="Lorem Ipsum Playlist"
          Image="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAA1BMVEWIiIhYZW6zAAAASElEQVR4nO3BgQAAAADDoPlTX+AIVQEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwDcaiAAFXD1ujAAAAAElFTkSuQmCC"
          Description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        />
        <SquareContainer
          LinkAdress="Playlist"
          Title="Lorem Ipsum Playlist"
          Image="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAA1BMVEWIiIhYZW6zAAAASElEQVR4nO3BgQAAAADDoPlTX+AIVQEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwDcaiAAFXD1ujAAAAAElFTkSuQmCC"
          Description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        />
      </ContainerItens>
    </Container>
  );
}
