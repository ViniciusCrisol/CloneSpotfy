import React from 'react';
import { NavLink, Link } from 'react-router-dom';

import { IoIosSearch } from 'react-icons/io';
import { Container, MenuItens } from './styles';

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
        <a href="/">Feito para você</a>
        <a href="/">Faixas recentes</a>
        <a href="/">Álbuns</a>
        <a href="/">Artistas</a>
      </MenuItens>

      {/* Playlist Section */}

      <MenuItens>
        <strong>Playlists</strong>
        <Link to="Playlist">Lorem Ipsum</Link>
        <Link to="Playlist">Lorem Ipsum</Link>
      </MenuItens>
    </Container>
  );
}
