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
          Title="This Is Linkin Park"
          Image="https://i.scdn.co/image/ab67706f000000027f0c84268c9dc61aeb37ff4d"
          Description="O melhor da banda em uma única playlist."
        />
        <SquareContainer
          Title="This Is Amy Winehouse"
          Image="https://i.scdn.co/image/ab67706f000000027cab63a7dee2c129776ba4ba"
          Description="O melhor da artista em uma única playlist."
        />
        <SquareContainer
          Title="Funk Hits"
          Image="https://i.scdn.co/image/ab67706f000000028f84bd1b3506fefab7b9ecb3"
          Description="O melhor do funk reunido nessa playlist."
        />

        <SquareContainer
          Title="All Out 00"
          Image="https://melovaz.net/wp-content/uploads/2019/11/All-Out-2000s-300x300.jpg"
          Description="Os melhores hits dos anos 2000."
        />
        <SquareContainer
          Title="Rock Forever"
          Image="https://i.scdn.co/image/ab67706f00000002922caf10a8d262f34d3060b8"
          Description="Os hits internacionais e nacionais reunidas em uma única playlist."
        />
        <SquareContainer
          Title="Godzilla"
          Image="https://i.scdn.co/image/ab67616d0000b2732f44aec83b20e40f3baef73c"
        />
      </ContainerItens>

      {/* Favorites */}

      <IndexText Text="Favoritos" />
      <ContainerItens>
        <CircleContainer
          Title="Eminem"
          Image="https://i.scdn.co/image/56f4762485066b4ef867b96e16775f2b5b4db277"
        />

        <CircleContainer
          Title="Billie Elish"
          Image="https://i.scdn.co/image/2622edec99d68d1d141886be593c88cbe509f6d8"
        />

        <CircleContainer
          Title="Iron Maden"
          Image="https://i.scdn.co/image/9b47777582da7ee93a65c89d1d28688cc0e6225b"
        />
        <CircleContainer
          Title="Froid"
          Image="https://i.scdn.co/image/ab67616d0000b273974926818d7c6f99ad785543"
        />

        <CircleContainer
          Title="Ira!"
          Image="https://i.scdn.co/image/e1d5805603ed75f2c7c1299f1d21ccc4b63ef7f1"
        />

        <CircleContainer
          Title="Bruno &#38; Marrone"
          Image="https://i.scdn.co/image/cee7ac45c05c7132b44671691bc7538266d3c6a3"
        />
      </ContainerItens>

      {/* Recommendation */}

      <IndexText Text="Recomendações" />
      <ContainerItens>
        <SquareContainer
          Title="California Rock State"
          Image="https://i.scdn.co/image/ab67706f00000002ca987b04dcdd41ee82644fab"
        />
        <SquareContainer
          Title="This Is Anitta"
          Image="https://i.scdn.co/image/ab67706f000000020809c738e6b0d3ee8c2f3356"
          Description="O melhor da artista em uma única playlist."
        />
        <SquareContainer
          Title="Skyfall"
          Image="https://i.scdn.co/image/ab67616d0000b2732737be35cc5245eef495be90"
          Description="Adele."
        />
        <SquareContainer
          Title="Isso que é vida"
          Image="https://i.scdn.co/image/ab67616d0000b273241e2f22c2da6a6078121e89"
        />
      </ContainerItens>
    </Container>
  );
}
