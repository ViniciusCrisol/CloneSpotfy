import React from 'react';
import { IoMdHeartEmpty } from 'react-icons/io';

import { Container } from './styles';

export default function TopTracks({ Position, Image, Name, ViewsNumber }) {
  return (
    <Container>
      <div>
        <img src={Image} alt="Album" />
        <p>{Position}</p>
        <IoMdHeartEmpty />
        <p>{Name}</p>
        <strong>{ViewsNumber}</strong>
      </div>
    </Container>
  );
}
