import React from 'react';

import { Container } from '../../styles/global';
import { ItensContainer } from './styles';
import SquareContainer from '../../components/SquareContainer';

export default function Navigate() {
  return (
    <Container>
      <h1>Navegar</h1>
      <ItensContainer>
        <SquareContainer Image="https://i.scdn.co/image/ab67706f0000000206a6df95871eba19b1d5ef8e" />
        <SquareContainer Image="https://i.scdn.co/image/ab67706f000000021680a8b576d55e90a1122fcb" />
        <SquareContainer Image="https://charts-images.scdn.co/VIRAL_BR_DEFAULT.jpg" />
        <SquareContainer Image="https://i.scdn.co/image/2a9c5853784c4d6ecf6bf9e57fa1e3f1d24fe897" />
        <SquareContainer Image="https://i.scdn.co/image/ab67706f00000002ed3a8bb5b72ab5ccbf5834b8" />
        <SquareContainer Image="https://i.scdn.co/image/ab67616d0000b2739565c4df27be4aee5edc8009" />
        <SquareContainer Image="https://api.sparkleapp.com.br/rest/v1/news/97408/download" />
        <SquareContainer Image="https://i.scdn.co/image/ab67706f00000002ee2c0f51705858bdf8bed73f" />
        <SquareContainer Image="https://i.scdn.co/image/04055e9c513c6f7dc0bf8673d8e770b99506040d" />
        <SquareContainer Image="https://i.scdn.co/image/ab67616d0000b2732824d99ffbb8efd092e5f43c" />
        <SquareContainer Image="https://i.scdn.co/image/ab67616d0000b2730a9ea37f746dc27b2a8b278f" />
        <SquareContainer Image="https://i.scdn.co/image/e8a29cc6c306fadd576645ab8340d6ed6d03f126" />
      </ItensContainer>
    </Container>
  );
}
