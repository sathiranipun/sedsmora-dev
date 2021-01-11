import React from 'react'
import './Insight.scss'

const InsightTile = ({ month, date, event, bgColour }) => {
  
  return (
    <div className={`InsightTile ${bgColour}`}>
      <div className="month">{ month }</div>
      <div className="date">{ date }</div>
      <div className="event">{ event }</div>
    </div>
  )
}

export default InsightTile
