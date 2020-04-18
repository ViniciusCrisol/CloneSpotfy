import React from 'react';

import { Header, Container, ContainerDescription } from './styles';

export default function Artist() {
  return (
    <Container>
      <Header>
        <ContainerDescription>
          <strong>ARTISTA</strong>
          <h1>Linkin Park</h1>
          <button>PLAY</button>
        </ContainerDescription>
      </Header>
    </Container>
  );
}
