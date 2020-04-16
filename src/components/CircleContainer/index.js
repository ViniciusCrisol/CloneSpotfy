import React from 'react';
import { ConatinerItem, ContainerIMG } from './styles';

import { GoKebabHorizontal } from 'react-icons/go';
import { IoMdHeartEmpty, IoMdPlay } from 'react-icons/io';

export default function CircleContainer() {
  return (
    <ConatinerItem>
      <ContainerIMG>
        <div>
          <IoMdHeartEmpty size={32} />
          <IoMdPlay size={48} />
          <GoKebabHorizontal size={32} />
        </div>
        <img
          src="https://i.scdn.co/image/052d13c8c950f1687415c8a9631c9852fe84b12c"
          alt="Profile Image"
        />
      </ContainerIMG>
      <h1>Anitta</h1>
    </ConatinerItem>
  );
}
