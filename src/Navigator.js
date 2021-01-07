import React, {useEffect, useState} from 'react';
import xpTotal from "./Images/UI/checkbox.png"
import {BrowserRouter, Link, Switch} from 'react-router-dom';

function Navigator()  {
  return (
    <div className="Navigator">

        <Link to="/"><img className='navBtn' alt='' src={xpTotal}/></Link>
        <Link to="/Collection"><img className='navBtn' alt='' src={xpTotal}/></Link>
        <Link to="/PlaystationTrophies"><img className='navBtn' alt='' src={xpTotal}/></Link>
        <Link to="/Rewards"><img className='navBtn' alt='' src={xpTotal}/></Link>

    </div>
  );
}

export default Navigator;