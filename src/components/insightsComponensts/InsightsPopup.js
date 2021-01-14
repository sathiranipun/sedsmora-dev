import React from 'react'
import './InsightsPopup.scss'

const InsightsPopup = ({ title, description, image, classN, date }) => {
  return (
    <div className={classN}>
      <div className="insight-popup-container">
        <div className="insight-popup-image-container">
          <img src={ image } alt={`${title} image`} className="insight-popup-image"/>
        </div>
        <div className="insight-description-section">
          <div className="popup-title-section">
            <div className="insight-popup-title">{ title }</div>
            <div className="popup-date">{ date }</div>
          </div>
          <div className="insight-popup-description">{ description }</div>
        </div>
      </div>
    </div>
  )
}

export default InsightsPopup
