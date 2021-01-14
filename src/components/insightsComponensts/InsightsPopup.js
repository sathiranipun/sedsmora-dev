import React from 'react'

const InsightsPopup = ({ title, description, imageLink }) => {
  return (
    <div className="insight-popup">
      <div className="insight-popup-container">
        <div className="insight-popup-title">{ title }</div>
        <div className="insight-popup-image-container">
          <img src={ imageLink } alt={`${title} image`} className="insight-popup-image"/>
        </div>
        <div className="insight-popup-description">{ description }</div>
      
        </div>
    </div>
  )
}

export default InsightsPopup
