import React from 'react';
import { ConatinerItem, ContainerIMG } from './styles';

import { GoKebabHorizontal } from 'react-icons/go';
import { IoMdHeartEmpty, IoMdPlay } from 'react-icons/io';

export default function SquareContainer({ Image, Title, Description }) {
  return (
    <ConatinerItem>
      <ContainerIMG>
        <div>
          <IoMdHeartEmpty size={32} />
          <IoMdPlay size={48} />
          <GoKebabHorizontal size={32} />
        </div>
        <img src={Image} alt="Image" />
      </ContainerIMG>
      <h1>{Title}</h1>
      <p>{Description}</p>
    </ConatinerItem>
  );
}
