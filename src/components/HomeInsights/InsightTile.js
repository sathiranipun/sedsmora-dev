import React from 'react'
import './Insight.scss'

const InsightTile = ({ month, date1, title, bgColour }) => {
  
  return (
    <div className={`InsightTile ${bgColour}`}>
      <div className="month">{ month }</div>
      <div className="date">{ date1 }</div>
      <div className="event">{ title }</div>
    </div>
  )
}

export default InsightTile
