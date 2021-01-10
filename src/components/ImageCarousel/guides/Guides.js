import React from 'react'
import {SliderData} from '../SliderData';
import './Guides.css'

const Guides = ({current, changeCurrent}) => {
  return (
    <div className="guid-container">
      {SliderData.map((slide, index) => {
        return(
          <div key={index} 
          className={index === current? "guid-dot active": "guid-dot"}
          onClick={() => {changeCurrent(index)}}></div>
        )
      })}
    </div> 
  )
}

export default Guides
