import React from 'react';
import { GiFallingStar, GiAstronautHelmet } from 'react-icons/gi';
import { FaRocket } from 'react-icons/fa';
import { BsFillClockFill } from "react-icons/bs";
import { InsightData } from './InsightData';
import './InsightTimeline.scss'

const InsightTimelineItem = ({title, description, date, icon, bgColour}) => {

  const setIcon = () => {
    switch (icon) {
      case 'rocket':
        return <FaRocket/>;

      case 'falling-star':
        return <GiFallingStar/>;

      case 'astronaut':
        return <GiAstronautHelmet/>;
        
      default:
        return <BsFillClockFill/>;
    }
  }

  return (
    <div className="Insight">
      <div className="insight-date">{ date }</div>
      <div className="insight-line-section">
        <div className="insight-icon-container" >
          { setIcon() }
        </div>
        <div className="insight-line"></div>
      </div>
      <div className={`insight-content-section ${bgColour}`}>
        <div className="insight-content-title">{ title }</div>
        <div className="insight-content-desc">{ description }</div>
      </div>
    </div>
  )
}

export default InsightTimelineItem