import React from 'react';

const EventSection = ({title, longDescription, photoLinks}) => {
  
  return (
    <div className="EventSection">
      <div className="event-section-title">{title}</div>
      <div className="event-description">{longDescription}</div>
      <div className="photo-grid">
        { photoLinks.map((link, index) => {
          <div className="evnt-img-container" key={index}>
            <img className="evnt-img" src={link} alt={link}/>
          </div>
        }) }
      </div>
    </div>
  )
}

export default EventSection
