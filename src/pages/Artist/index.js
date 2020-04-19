import React from 'react';

import {
  Header,
  Container,
  ContainerDescription,
  ContainerLinks,
  ContainerButton,
} from './styles';

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
    </Container>
  );
}
