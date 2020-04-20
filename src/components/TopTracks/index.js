import React from 'react';
import { IoMdHeartEmpty } from 'react-icons/io';

import { Container } from './styles';

export default function TopTracks({ Position }) {
  return (
    <Container>
      <div>
        <img
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAA1BMVEWIiIhYZW6zAAAASElEQVR4nO3BgQAAAADDoPlTX+AIVQEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwDcaiAAFXD1ujAAAAAElFTkSuQmCC"
          alt="Album Image"
        />
        <p>{Position}</p>
        <IoMdHeartEmpty />
        <p>Lorem Ipsum Musisc</p>
        <strong>125.325</strong>
      </div>
    </Container>
  );
}
