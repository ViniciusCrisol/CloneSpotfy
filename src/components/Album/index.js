import React from 'react';

import { Container } from './styles';

export default function Album({ AlbumImage, AlbumTitle, AlbumDate }) {
  return (
    <Container>
      <img src={AlbumImage} alt="AlbumImage" />
      <div>
        <strong>{AlbumDate}</strong>
        <h3>{AlbumTitle}</h3>
      </div>
    </Container>
  );
}
