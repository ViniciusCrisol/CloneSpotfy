import React from 'react';
import { NavLink } from 'react-router-dom';

import { FaCompactDisc, FaHome } from 'react-icons/fa';
import { IoIosRadio } from 'react-icons/io';

import { Container, MenuItens } from './styles';

export default function Menu() {
  return (
    <Container>
      <MenuItens>
        <NavLink to="/" exact>
          <FaHome size={24} />
          Início
        </NavLink>
        <NavLink to="/navigate">
          <FaCompactDisc size={24} />
          Navegar
        </NavLink>
        <NavLink to="/radio">
          <IoIosRadio size={24} />
          Rádio
        </NavLink>
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
