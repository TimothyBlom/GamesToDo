import React, {useEffect, useState} from 'react';
import './styles/style.css';
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y, EffectCoverflow } from 'swiper';
import 'swiper/swiper-bundle.css';
import GamesCollectionSlider from "./GamesCollectionSlider"
import GamesCollectionSliderNoGenre from "./GamesCollectionSliderNoGenre"

import rcTab from "./Images/tab/R&Ctab.png"
import rcLogo from "./Images/gameIcons/ratchetClank0.png"

import infamousTab from "./Images/tab/InfamousTab.png"
import infamousLogo from "./Images/gameIcons/infamous1.png"

import killzoneTab from "./Images/tab/killzoneTab.png"
import killzoneLogo from "./Images/gameIcons/killzone0.png"

import massEffectTab from "./Images/tab/massEffectTab.png"
import massEffectLogo from "./Images/gameIcons/massEffect1.png"

import unchartedTab from "./Images/tab/unchartedTab.png"
import unchartedLogo from "./Images/gameIcons/uncharted0.png"

import deadSpaceTab from "./Images/tab/deadSpaceTab.png"
import deadSpaceLogo from "./Images/gameIcons/deadSpace1.png"

import spidermanTab from "./Images/tab/spidermanTab.png"
import spidermanLogo from "./Images/gameIcons/spiderMan1.png"

import callOfDutyTab from "./Images/tab/callOfDutyTab.png"
import callOfDutyLogo from "./Images/gameIcons/callOfDuty0.png"

import topTierTab from "./Images/tab/topTierTab.png"
import topTierLogo from "./Images/gameIcons/tierTitle1.png"

import starWarsTab from "./Images/tab/starWarsTab.png"
import starWarsLogo from "./Images/gameIcons/starWars0.png"

import haloTab from "./Images/tab/haloTab.png"
import haloLogo from "./Images/gameIcons/halo0.png"

import multiplayerTab from "./Images/tab/battlefieldTab.png"
import multiplayerLogo from "./Images/gameIcons/tierTitle2.png"

import memerableLogo from "./Images/gameIcons/tierTitle3.png"

SwiperCore.use([Navigation, Scrollbar, EffectCoverflow])

function GamesCollection()  {
  const [gameCollectionIsExpanted, setGameCollectionIsExpanted] = useState(false);

  const toggleGameCollectionIsExpented = () => {
    setGameCollectionIsExpanted(!gameCollectionIsExpanted);
  }

  return (
      <div className="gameCollection">
        <div className="gameCollectionExpandButton" onClick={toggleGameCollectionIsExpented} /> 
        <div className="UIcornersTop" />

        <GamesCollectionSlider 
          logoImg={rcLogo}
          characterImg={rcTab}
          filter1={"Ratchet"}
          filter2={"Clank"}
        />

        <GamesCollectionSlider 
          logoImg={infamousLogo}
          characterImg={infamousTab}
          filter1={"Infamous"}
        />

        <GamesCollectionSlider 
          logoImg={killzoneLogo}
          characterImg={killzoneTab}
          filter1={"Killzone"}
        />

        {gameCollectionIsExpanted &&
          <div>
            <GamesCollectionSlider 
              logoImg={massEffectLogo}
              characterImg={massEffectTab}
              filter1={"Mass Effect"}
            />

            <GamesCollectionSlider 
              logoImg={unchartedLogo}
              characterImg={unchartedTab}
              filter1={"Uncharted"}
            />

            <GamesCollectionSlider 
              logoImg={deadSpaceLogo}
              characterImg={deadSpaceTab}
              filter1={"Dead Space"}
            />

            <GamesCollectionSlider 
              logoImg={spidermanLogo}
              characterImg={spidermanTab}
              filter1={"Spider-Man"}
            />

            <GamesCollectionSlider 
              logoImg={topTierLogo}
              characterImg={topTierTab}
              filter1={"Doom"}
              filter2={"Horizon"}
              filter3={"Dying Light"}
              filter4={"Cyberpunk"}
            />

            <GamesCollectionSlider 
              logoImg={starWarsLogo}
              characterImg={starWarsTab}
              filter1={"Star Wars"}
            />

            <GamesCollectionSlider 
              logoImg={callOfDutyLogo}
              characterImg={callOfDutyTab}
              filter1={"Call Of Duty"}
            />

            <GamesCollectionSlider 
              logoImg={haloLogo}
              characterImg={haloTab}
              filter1={"Halo"}
            />

            <GamesCollectionSlider 
              logoImg={multiplayerLogo}
              characterImg={multiplayerTab}
              filter1={"Battlefield"}
              filter2={"Destiny"}
            />

            <GamesCollectionSliderNoGenre
              logoImg={memerableLogo}
              characterImg={multiplayerTab}
              filterOut1={"Ratchet"}
              filterOut2={"Agent Clank"}
              filterOut3={"Infamous"}
              filterOut4={"Killzone"}
              filterOut5={"Mass Effect"}
              filterOut6={"Uncharted"}
              filterOut7={"Dead Space"}
              filterOut8={"Spider-Man"}
              filterOut9={"Doom"}
              filterOut10={"Horizon"}
              filterOut11={"Dying Light"}
              filterOut12={"Cyberpunk"}
              filterOut13={"Star Wars"}
              filterOut14={"Call Of Duty"}
              filterOut15={"Halo"}
              filterOut16={"Battlefield"}
              filterOut17={"Destiny"}
            />

          </div>
        }
        
        <div className="UIcornersBottom" />
        <div className="gameCollectionExpandButton down" onClick={toggleGameCollectionIsExpented} /> 
    </div>
  );
}

export default GamesCollection;