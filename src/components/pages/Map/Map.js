import React from 'react';
import HeroSection from '../../HeroSection';
import { homeObjOne, homeObjTwo, homeObjThree, homeObjFour } from './Data';
import Options from '../../Options';

function Map() {
  return (
    <>
      <HeroSection {...homeObjOne} />
    </>
  );
}

export default Map;
