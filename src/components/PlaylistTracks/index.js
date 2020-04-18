import React from 'react';

import { Container, Table } from './styles';

import { MdTimer } from 'react-icons/md';

export default function PlaylistTracks() {
  return (
    <Container>
      <Table>
        <thead>
          <tr>
            <th>Título</th>
            <th>Artista</th>
            <th>Álbum</th>

            <th>
              <MdTimer size={18} />
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <p>Numb</p>
            </td>
            <td>
              <p>Linkin Park</p>
            </td>
            <td>
              <p>Meteora</p>
            </td>
            <td>
              <p>3:00</p>
            </td>
          </tr>
          <tr>
            <td>
              <p>Burn it Down</p>
            </td>
            <td>
              <p>Linkin Park</p>
            </td>
            <td>
              <p>Living Things</p>
            </td>
            <td>
              <p>3:12</p>
            </td>
          </tr>
          <tr>
            <td>
              <p>Faint</p>
            </td>
            <td>
              <p>Linkin Park</p>
            </td>
            <td>
              <p>Meteora</p>
            </td>
            <td>
              <p>3:37</p>
            </td>
          </tr>

          <tr>
            <td>
              <p>In the End</p>
            </td>
            <td>
              <p>Linkin Park</p>
            </td>
            <td>
              <p>Hibrid Theory</p>
            </td>
            <td>
              <p>3:14</p>
            </td>
          </tr>
          <tr>
            <td>
              <p>Crawling</p>
            </td>
            <td>
              <p>Linkin Park</p>
            </td>
            <td>
              <p>Hibrid Theory</p>
            </td>
            <td>
              <p>3:29</p>
            </td>
          </tr>
        </tbody>
      </Table>
    </Container>
  );
}
