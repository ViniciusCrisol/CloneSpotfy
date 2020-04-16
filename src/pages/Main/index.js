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
    </Container>
  );
}
