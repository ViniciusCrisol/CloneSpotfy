import React from 'react';
import { ConatinerItem, ContainerIMG } from './styles';

import { GoKebabHorizontal } from 'react-icons/go';
import { IoMdHeartEmpty, IoMdPlay } from 'react-icons/io';

export default function SquareContainer() {
  return (
    <ConatinerItem>
      <ContainerIMG>
        <div>
          <IoMdHeartEmpty size={32} />
          <IoMdPlay size={48} />
          <GoKebabHorizontal size={32} />
        </div>
        <img
          src="https://i.scdn.co/image/ab67706f000000027f0c84268c9dc61aeb37ff4d"
          alt="Profile Image"
        />
      </ContainerIMG>
      <h1>This is Linkin Park</h1>
      <p>O melhor dos álbuns da banda em uma playlist.</p>
    </ConatinerItem>
  );
}
