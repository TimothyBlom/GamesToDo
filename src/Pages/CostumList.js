import React, {useEffect, useState} from 'react';
import axios from "axios"
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y, EffectCoverflow } from 'swiper';
import GamePage from "../GamePage";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import 'swiper/swiper-bundle.css';

function CostumList()  {
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

      <div className="UIcornersTop" />

        <div className="CostumGamesListContainer">
          {games.filter(item => item.name.includes("A Crack In Time") ||
                                item.name.includes("Q Force") ||
                                item.name.includes("Nexus") ||
                                item.name.includes("Titanfall") ||
                                item.name.includes("Doom") ||
                                item.name.includes("Spider-Man Miles") ||
                                item.name.includes("Uncharted A Thiefs") ||
                                item.name.includes("Shadow Fall") ||
                                item.name.includes("Cyberpunk") 
                                                  ).map(item => (
            <div className="CostumToDoGame">
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
            </div>
          ))}

        </div>

      {/* <div className="UIcornersBottom" /> */}

    </div>
  );
}

export default CostumList;