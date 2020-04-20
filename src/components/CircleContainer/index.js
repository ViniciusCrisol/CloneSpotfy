import React from 'react';
import { Link } from 'react-router-dom';
import { ConatinerItem, ContainerIMG } from './styles';

import { GoKebabHorizontal } from 'react-icons/go';
import { IoMdHeartEmpty, IoMdPlay } from 'react-icons/io';

export default function CircleContainer({ Title, Image, LinkAdress }) {
  return (
    <ConatinerItem>
      <Link to={LinkAdress}>
        <ContainerIMG>
          <div>
            <IoMdHeartEmpty size={32} />
            <IoMdPlay size={48} />
            <GoKebabHorizontal size={32} />
          </div>
          <img src={Image} alt="Profile Image" />
        </ContainerIMG>
      </Link>
      <h1>{Title}</h1>
    </ConatinerItem>
  );
}
