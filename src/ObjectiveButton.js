import React, {useState} from 'react';
import './styles/style.css';
import button from "./Images/UI/button.png"
import abandone from "./Images/UI/abandone.png"

function ObjectiveButton(props) {
  const [objectiveIsChecked, setObjectiveIsChecked] = useState(props.checked);
  const [objectiveIsAbandoned, setObjectiveIsAbandoned] = useState(props.abandoned);
  const [XPpopup, setXPpopup] = useState(false);

  const objComplete = () => {
    setObjectiveIsChecked(!objectiveIsChecked);
    setObjectiveIsAbandoned(false);
    setXPpopup(!XPpopup);
  }

  const objAbandone = () => {
    setObjectiveIsChecked(false);
    setObjectiveIsAbandoned(!objectiveIsAbandoned);
    setXPpopup(false);
  }

  return (
    <div>

      <div className="XPpopup" id={XPpopup ? "popupAnim" : ""}>
        <p>+10XP</p>
      </div>

      <div className="pageButtonContainer" id={objectiveIsAbandoned ? "notRequired" : ""}>    
        <div className="pageButton" id={objectiveIsChecked ? "completed" : ""} onClick={objComplete}>
          <div>
            <img className='buttonUI' alt='' src={button}/>
            <p className="buttonText">{props.objectiveText}</p>
          </div>
        </div>

        <img className='abandoneButtonUI' alt='' src={abandone} onClick={objAbandone}/>

      </div>
    </div>
)}

export default ObjectiveButton;