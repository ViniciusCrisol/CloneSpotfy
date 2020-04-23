import React from 'react';
import { MdTimer } from 'react-icons/md';

import { Container, Table } from './styles';

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
              <p>Lorem Ipsum</p>
            </td>
            <td>
              <p>Lorem Ipsum</p>
            </td>
            <td>
              <p>Lorem Ipsum</p>
            </td>
            <td>
              <p>3:00</p>
            </td>
          </tr>
          <tr>
            <td>
              <p>Lorem Ipsum</p>
            </td>
            <td>
              <p>Lorem Ipsum</p>
            </td>
            <td>
              <p>Lorem Ipsum</p>
            </td>
            <td>
              <p>3:12</p>
            </td>
          </tr>
          <tr>
            <td>
              <p>Lorem Ipsum</p>
            </td>
            <td>
              <p>Lorem Ipsum</p>
            </td>
            <td>
              <p>Lorem Ipsum</p>
            </td>
            <td>
              <p>3:37</p>
            </td>
          </tr>

          <tr>
            <td>
              <p>Lorem Ipsum</p>
            </td>
            <td>
              <p>Lorem Ipsum</p>
            </td>
            <td>
              <p>Lorem Ipsum</p>
            </td>
            <td>
              <p>3:14</p>
            </td>
          </tr>
          <tr>
            <td>
              <p>Lorem Ipsum</p>
            </td>
            <td>
              <p>Lorem Ipsum</p>
            </td>
            <td>
              <p>Lorem Ipsum</p>
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
