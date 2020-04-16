import React from 'react';

import { FaCompactDisc } from 'react-icons/fa';
import { IoIosRadio, IoMdHome } from 'react-icons/io';

import { Container, MenuItens } from './styles';

export default function Menu() {
  return (
    <Container>
      <MenuItens>
        <h3>
          <IoMdHome size={22} />
          Início
        </h3>
        <h3>
          <FaCompactDisc size={22} />
          Navegar
        </h3>
        <h3>
          <IoIosRadio size={22} />
          Rádio
        </h3>
      </MenuItens>
      <MenuItens>
        <strong>Sua bibliotéca</strong>
        <a>Feito para você</a>
        <a>Faixas recentes</a>
        <a>Músicas Curtidas</a>
        <a>Álbuns</a>
        <a>Artistas</a>
        <a>Podcasts</a>
      </MenuItens>
      <MenuItens>
        <strong>Playlists</strong>
        <a>This Is Amy Winehouse</a>
        <a>Rock Forever</a>
      </MenuItens>
    </Container>
  );
}
