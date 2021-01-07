import React, {useEffect, useState} from 'react';
import {Route, BrowserRouter} from "react-router-dom";
import Navigator from "./Navigator";
import Collection from "./Pages/Collection";
import CostumList from "./Pages/CostumList";
import Rewards from "./Pages/Rewards";
import PlaystationTrophies from "./Pages/PlaystationTrophies";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import 'swiper/swiper-bundle.css';
import xpTotal from "./Images/UI/xpTotal.png"
import header from "./Images/header.png"

function Home()  {
  return (
    <div className="Home">

      <header>
        <img className="headerImg" alt='' src={header}/>
      </header>

      <div className="xpCounter">
        <img className='xpCounterImg' alt='' src={xpTotal}/>
        <p>100</p>
      </div>

      <BrowserRouter>
        <Navigator />
        <Route path="/" exact component={CostumList} />
        <Route path="/Collection" component={Collection} />
        <Route path="/PlaystationTrophies" component={PlaystationTrophies} />
        <Route path="/Rewards" component={Rewards} />
      </BrowserRouter>

    </div>
  );
}

export default Home;