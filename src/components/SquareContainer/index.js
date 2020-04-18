import React from 'react';
import { ConatinerItem, ContainerIMG } from './styles';
import { Link } from 'react-router-dom';

import { GoKebabHorizontal } from 'react-icons/go';
import { IoMdHeartEmpty, IoMdPlay } from 'react-icons/io';

export default function SquareContainer({
  Image,
  Title,
  Description,
  LinkAdress,
}) {
  return (
    <ConatinerItem>
      <ContainerIMG>
        <div>
          <IoMdHeartEmpty size={32} />
          <IoMdPlay size={48} />
          <GoKebabHorizontal size={32} />
        </div>
        <Link to={LinkAdress}>
          <img src={Image} alt="Image" />
        </Link>
      </ContainerIMG>
      <h1>{Title}</h1>
      <p>{Description}</p>
    </ConatinerItem>
  );
}
