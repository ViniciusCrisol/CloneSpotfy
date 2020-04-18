import React from 'react';
import { NavLink } from 'react-router-dom';

import { Container, MenuItens } from './styles';
import { IoIosSearch } from 'react-icons/io';

export default function Menu() {
  return (
    <Container>
      <MenuItens>
        <form>
          <input
            type="text"
            name="Search"
            id="Search"
            placeholder="Pesquisar"
            autoComplete={false}
          />
          <button type="submit">
            <IoIosSearch color="white" size={18} />
          </button>
        </form>
      </MenuItens>
      <MenuItens>
        <NavLink to="/" exact>
          Início
        </NavLink>
        <NavLink to="/navigate">Navegar</NavLink>
        <NavLink to="/radio">Rádio</NavLink>
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
