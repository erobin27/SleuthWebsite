import React from 'react';
import HeroSection from '../../HeroSection';
import { homeObjOne, homeObjTwo, homeObjThree, homeObjFour } from './Data';
import Options from '../../Options';

function Contact() {
  return (
    <>
      <HeroSection {...homeObjOne} />
    </>
  );
}

export default Contact;
