import React from 'react';
import { NavLink } from 'react-router-dom';

import { Container, MenuItens } from './styles';
import { IoIosSearch } from 'react-icons/io';

export default function Menu() {
  return (
    <Container>
      {/* Search Section */}

      <MenuItens>
        <form>
          <input
            type="text"
            name="Search"
            id="Search"
            placeholder="Pesquisar"
          />
          <button type="submit">
            <IoIosSearch color="white" size={18} />
          </button>
        </form>
      </MenuItens>

      {/* Nav Section */}

      <MenuItens>
        <NavLink to="/" exact>
          Início
        </NavLink>
        <NavLink to="/navigate">Navegar</NavLink>
        <NavLink to="/radio">Rádio</NavLink>
      </MenuItens>

      {/* Use Section */}

      <MenuItens>
        <strong>Sua bibliotéca</strong>
        <a>Feito para você</a>
        <a>Faixas recentes</a>
        <a>Álbuns</a>
        <a>Artistas</a>
      </MenuItens>

      {/* Playlist Section */}

      <MenuItens>
        <strong>Playlists</strong>
        <a>This Is Amy Winehouse</a>
        <a>Rock Forever</a>
      </MenuItens>
    </Container>
  );
}
