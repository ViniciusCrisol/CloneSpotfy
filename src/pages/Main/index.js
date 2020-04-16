import React from 'react';

import { Container, ContainerItens } from './styles';
import SquareContainer from '../../components/SquareContainer';
import CircleContainer from '../../components/CircleContainer';
import IndexText from '../../components/IndexText';

export default function Main() {
  return (
    <Container>
      <IndexText text="Tocadas Recentemente" />
      <ContainerItens>
        <SquareContainer />
        <SquareContainer />
        <SquareContainer />
        <SquareContainer />
        <CircleContainer />
        <SquareContainer />
      </ContainerItens>
      <IndexText text="Favoritas" />
      <ContainerItens>
        <CircleContainer />
        <SquareContainer />
        <SquareContainer />
        <SquareContainer />
        <SquareContainer />
        <SquareContainer />
      </ContainerItens>
      <IndexText text="Recomendações" />
      <ContainerItens>
        <SquareContainer />
        <SquareContainer />
        <SquareContainer />
        <CircleContainer />
        <SquareContainer />
        <SquareContainer />
      </ContainerItens>
    </Container>
  );
}
