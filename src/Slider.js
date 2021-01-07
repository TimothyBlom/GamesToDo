import React, {useEffect, useState} from 'react';
import GamePage from "./GamePage";
import './styles/style.css';
import axios from "axios"
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y, EffectCoverflow } from 'swiper';
import 'swiper/swiper-bundle.css';

SwiperCore.use([Navigation, Scrollbar, EffectCoverflow])

// swiper.update();

function Slider(props)  {
  const [games, setGames] = useState([]);

  useEffect(() => {
    const fetchGames = async () => {
      const res = await axios.get("./LegacyGames.json")
        setGames(res.data);
        console.log(res.data);
    };

    fetchGames();

  }, [] );

  return (
    <div className="Slider">

      <div className="gameScrollerContainer">
        {games.map(item => (
          <GamePage 
            name={item.name}
            logo={item.logo}
            boxart={item.boxart}
            screenshot={item.screenshot}
            objective1={item.objective1description}
            checked1={item.objective1completed}
            abandoned1={item.objective1abandoned}
            objective2={item.objective2description}
            checked2={item.objective2completed}
            abandoned2={item.objective2abandoned}
            objective3={item.objective3description}
            checked3={item.objective3completed}
            abandoned3={item.objective3abandoned}
            objective4={item.objective4description}
            checked4={item.objective4completed}
            abandoned4={item.objective4abandoned}
            objective5={item.objective5description}
            checked5={item.objective5completed}
            abandoned5={item.objective5abandoned}
            objective6={item.objective6description}
            checked6={item.objective6completed}
            abandoned6={item.objective6abandoned}
          />
        ))}
      </div>

      <div className="UIcornersTop" />

      <Swiper className="swiperContainer"
        spaceBetween={50}
        slidesPerView={3}
        centeredSlides={true}
        navigation
        pagination={{ clickable: true }}
        pagination
        scrollbar={{ draggable: true }}
        grabCursor={true}
        effect="coverflow"
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          scale: 0.8,
          modifier: 1,
          slideShadows: false
        }}
        observer={true}
        observeParents={true}
      >
        {games.map(item => (
          <SwiperSlide className="swiperItem">

            <GamePage
              name={item.name}
              logo={item.logo}
              boxart={item.boxart}
              screenshot={item.screenshot}
              objective1={item.objective1description}
              checked1={item.objective1completed}
              abandoned1={item.objective1abandoned}
              objective2={item.objective2description}
              checked2={item.objective2completed}
              abandoned2={item.objective2abandoned}
              objective3={item.objective3description}
              checked3={item.objective3completed}
              abandoned3={item.objective3abandoned}
              objective4={item.objective4description}
              checked4={item.objective4completed}
              abandoned4={item.objective4abandoned}
              objective5={item.objective5description}
              checked5={item.objective5completed}
              abandoned5={item.objective5abandoned}
              objective6={item.objective6description}
              checked6={item.objective6completed}
              abandoned6={item.objective6abandoned}
            />
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="UIcornersBottom" />

    </div>
  );
}

export default Slider;