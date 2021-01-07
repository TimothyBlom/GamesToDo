import React, {useEffect, useState} from 'react';
import './styles/style.css';
import axios from "axios"
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y, EffectCoverflow } from 'swiper';
import 'swiper/swiper-bundle.css';

SwiperCore.use([Navigation, Scrollbar, EffectCoverflow])

function GamesCollectionSlider(props)  {
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
      <div>

        <Swiper className="collectionSliderContainer"
        spaceBetween={5}
        slidesPerView={"auto"}
        activeSlideKey={2}
        // direction={"vertical"}
        observer={true}
        observeParents={true}
        grabCursor={true}
      >

      <SwiperSlide className="slideBig"><img className="gameGenreImgTest" src={props.logoImg}/></SwiperSlide>

      <SwiperSlide className="slideSmall"><img className="gameGenreImgTest" src={props.characterImg}/></SwiperSlide>

      <SwiperSlide className="slideBig">            
        <div className="gameGenreListTest">

          {games.filter(item => item.name.includes(props.filter1) || 
                                item.name.includes(props.filter2) || 
                                item.name.includes(props.filter3) || 
                                item.name.includes(props.filter4) 
                                // !item.name.includes(props.filterOut1) || 
                                // !item.name.includes(props.filterOut2) || 
                                // !item.name.includes(props.filterOut3) || 
                                // !item.name.includes(props.filterOut4) || 
                                // !item.name.includes(props.filterOut5) || 
                                // !item.name.includes(props.filterOut6) || 
                                // !item.name.includes(props.filterOut7) || 
                                // !item.name.includes(props.filterOut8) || 
                                // !item.name.includes(props.filterOut9) || 
                                // !item.name.includes(props.filterOut10) || 
                                // !item.name.includes(props.filterOut11) || 
                                // !item.name.includes(props.filterOut12) || 
                                // !item.name.includes(props.filterOut13) || 
                                // !item.name.includes(props.filterOut14) || 
                                // !item.name.includes(props.filterOut15) || 
                                // !item.name.includes(props.filterOut16) || 
                                // !item.name.includes(props.filterOut17) 
                        ).map(item => (

            <img className='gameImgSmall' src={item.logo} />

          ))}

        </div>
      </SwiperSlide>

      </Swiper>
    </div>
  )}

export default GamesCollectionSlider;