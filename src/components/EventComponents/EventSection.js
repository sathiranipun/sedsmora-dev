import React, { useEffect } from 'react';
import Scroll from 'react-scroll'
import "./EventSection.scss";

const EventSection = ({imageTile, longDescription, photoLinks}) => {
  
  useEffect(() => {
    Scroll.animateScroll.scrollTo(500);
    
  }, [])

  return (
    <div className="EventSection">
      <div className="event-section-title">{imageTile}</div>
      <div className="event-description">{longDescription}</div>
      <div className="photo-grid">
        { photoLinks.map((link, index) => {
          return (
            <div className="evnt-img-container" key={index}>
              <img className="evnt-img" src={`${window.location.origin}${link}`} alt={link}/>
            </div>
          )
        }) }
      </div>
    </div>
  )
}

export default EventSection
