import React, {useEffect, useState} from 'react';
import Slider from "../Slider";
import GamesCollection from "../GamesCollection";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import 'swiper/swiper-bundle.css';

function Collection()  {
  return (
    <div>

      <GamesCollection />

      <Slider />

    </div>
  );
}

export default Collection;