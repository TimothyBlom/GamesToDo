import React, {Component} from 'react';
import './styles/style.css';
import corner from "./Images/UI/corner.png"

export default class UIBorder extends Component {

  render(){
  return (
    <div className="UIBorder" >    

      <img className='UIBorderTopLeft' alt='' src={corner}/>
      <img className='UIBorderTopRight' alt='' src={corner}/>
      <img className='UIBorderBottomLeft' alt='' src={corner}/>
      <img className='UIBorderBottomRight' alt='' src={corner}/>

    </div>
)}}