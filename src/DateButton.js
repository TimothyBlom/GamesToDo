import React, {Component} from 'react';
import './styles/style.css';
import UIcorner from "./Images/UI/corner.png"
import start from "./Images/UI/startButton.png"
import finish from "./Images/UI/finishButton.png"
import date from "./Images/UI/date.png"
import confirm from "./Images/UI/confirm.png"
import deny from "./Images/UI/deny.png"

export default class DateButton extends Component {
  state = {
    dateConfirmPage: false,
    currentDateTime: new Date().toLocaleString(),
  };

  toggleDateConfirmPage = () => {
    this.setState({
      dateConfirmPage: !this.state.dateConfirmPage,
    });
  };

  render(){
    return (
      <div className="singleDateButtonContainer">

        <div>
          <img className='dateUI' alt='' src={date}/>
          <img className='dateButtonUI' alt='' src={this.props.progress} onClick={this.toggleDateConfirmPage}/>
          <p className="dateText">{this.props.date}</p>
        </div>

        {this.state.dateConfirmPage &&
        <div className="confirmStartDate">

          <img id="confirmPageLeftUpCorner" alt='' src={UIcorner}/>
          <img id="confirmPageRightUpCorner" alt='' src={UIcorner}/>
          <img id="confirmPageLeftbuttomCorner" alt='' src={UIcorner}/>
          <img id="confirmPageRightbuttomCorner" alt='' src={UIcorner}/>

          <div className="dateConfirmContent">
            <p>Please comfirm setting a new date</p>
            <p>{this.state.currentDateTime}</p>
            <img className="dateConfirm" alt='' src={confirm} onClick={this.toggleDateConfirmPage}/>
            <img className="dateDeny" alt='' src={deny} onClick={this.toggleDateConfirmPage}/>
          </div>

        </div>
        }
      </div>
    );
  }
}