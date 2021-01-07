import React, {useEffect, useState} from 'react';
import axios from "axios"
import ObjectiveButton from "./ObjectiveButton";
import DateButton from "./DateButton";
import UIBorder from "./UIBorder";
import './styles/style.css';
import UIcorner from "./Images/UI/corner.png"
import close from "./Images/UI/close.png"
import checkbox from "./Images/UI/checkbox.png"
import start from "./Images/UI/startButton.png"
import finish from "./Images/UI/finishButton.png"
import edit from "./Images/UI/edit.png"

import ps3 from "./Images/ps3.png"
import trophy from "./Images/UI/trophy.png"
import trophyAbandone from "./Images/UI/trophyClose.png"
import coop from "./Images/coop.png"

function GamePage(props) {
  const [gamePageIsOpen, setGamePageIsOpen] = useState(false);
  const [gameIsLocked, setGameIsLocked] = useState(false);
  const [gameIsCompleted, setGameIsCompleted] = useState(false);
  const [trophyIsChecked, setTrophyIsChecked] = useState(false);
  const [trophyIsAbandoned, setTrophyIsAbandoned] = useState(false);
  const [games, setGames] = useState([]);

  useEffect(() => {
    const fetchGames = async () => {
      const res = await axios.get("./LegacyGames.json")
        setGames(res.data);
    };

    fetchGames();

  }, [] );

  const toggleGamePage = () => {
    setGamePageIsOpen(!gamePageIsOpen);
  }

  const toggleGameLock = () => {
    setGameIsLocked(!gameIsLocked);
  }

  
  const toggleTrophyComplete = () => {
    setTrophyIsChecked(!trophyIsChecked);
    setTrophyIsAbandoned(false);
  }

  const toggleTrophyAbandone = () => {
    setTrophyIsAbandoned(!trophyIsAbandoned);
    setTrophyIsChecked(false);
  }

  return (
    <div className="gamepage">

{/* game icon */}
      <div className="gameContainer" id={gameIsLocked ? "gameLocked" : ""} onClick={toggleGameLock}>
        <div className="game" id={gameIsCompleted ? "gameCompleted" : ""} onClick={toggleGamePage} style={{backgroundImage: "url(" + props.boxart + ")" }}>
          <img className='gameImg' alt='' src={props.logo}/>
          <div className="checkboxContainer">

            <div className='checkbox' id={props.abandoned1 ? "notRequired" : ""}>
              <img className='checkboxImg' id={props.checked1 ? "completedBox" : ""} alt='' src={checkbox}/>  
            </div>

            <div className='checkbox' id={props.abandoned2 ? "notRequired" : ""}>
              <img className='checkboxImg' id={props.checked2 ? "completedBox" : ""} alt='' src={checkbox}/>  
            </div>

            <div className='checkbox' id={props.abandoned3 ? "notRequired" : ""}>
              <img className='checkboxImg' id={props.checked3 ? "completedBox" : ""} alt='' src={checkbox}/>  
            </div>

            <div className='checkbox' id={props.abandoned4 ? "notRequired" : ""}>
              <img className='checkboxImg' id={props.checked4 ? "completedBox" : ""} alt='' src={checkbox}/>  
            </div>

            <div className='checkbox' id={props.abandoned5 ? "notRequired" : ""}>
              <img className='checkboxImg' id={props.checked5 ? "completedBox" : ""} alt='' src={checkbox}/>  
            </div>

            <div className='checkbox' id={props.abandoned6 ? "notRequired" : ""}>
              <img className='checkboxImg' id={props.checked6 ? "completedBox" : ""} alt='' src={checkbox}/>  
            </div>
            
          </div>
        </div>
      </div>

{/* pop-up page */}
      {gamePageIsOpen &&
      <div className="gamePageContainer">

{/* name */}
        <div>
          <p className="title" >{props.name}</p>
        </div>

{/* close button */}
        <img className='pageClose' alt='' src={close} onClick={toggleGamePage}/>

{/* edit button */}
        <img className='pageEdit' alt='' src={edit} onClick={toggleGamePage}/>

{/* page UI */}
        <div className="gamePageUI">
          <img id="pageLeftUpCorner" alt='' src={UIcorner}/>
          <img id="pageRightUpCorner" alt='' src={UIcorner}/>
          <img id="pageLeftbuttomCorner" alt='' src={UIcorner}/>
          <img id="pageRightbuttomCorner" alt='' src={UIcorner}/>
        </div>

        <div className="gamePageContent">

{/* game logo */}
            <img className='pageGameIcon' alt='' src={props.logo}/>

{/* screenshot */}
          <img className='screenshot' alt='' src={props.screenshot}/>

{/* start/finish date buttons */}
          <div className="pageDateButtons">
            <DateButton progress={start} date={"now"}/>
            <DateButton progress={finish} date={"then"}/>
          </div>

{/* trophy button */}
          <div className="trophyContainer"  id={trophyIsAbandoned ? "notRequired" : ""}>
            <div className="trophyAbandoneContainer" onClick={toggleTrophyAbandone}/>
            <img className="trophyAbandone" alt="" src={trophyAbandone}/>
            <div className="trophyImgContainer" id={trophyIsChecked ? "completed" : ""} onClick={toggleTrophyComplete}>
              <img className="trophyImg" alt="" src={trophy} />
            </div>
          </div>

{/* objectives buttons */}
          <div className="gamePageObjectives">
            <ObjectiveButton 
              objectiveText={props.objective1}
              checked={props.checked1}
              abandoned={props.abandoned1}
            />
            <ObjectiveButton 
              objectiveText={props.objective2}
              checked={props.checked2}
              abandoned={props.abandoned2}
            />
            <ObjectiveButton 
              objectiveText={props.objective3}
              checked={props.checked3}
              abandoned={props.abandoned3}
            />
            <ObjectiveButton 
              objectiveText={props.objective4}
              checked={props.checked4}
              abandoned={props.abandoned4}
            />
            <ObjectiveButton 
              objectiveText={props.objective5}
              checked={props.checked5}
              abandoned={props.abandoned5}
            />
            <ObjectiveButton 
              objectiveText={props.objective6}
              checked={props.checked6}
              abandoned={props.abandoned6}
            />
          </div>

        </div>
      </div>
    }
    </div>
  )
}

export default GamePage;