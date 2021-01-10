import React from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import EventCarousel from './EventCarousel';
import './HomeEvents.scss'


const HomeEvents = () => {
  return (
    <div className="HomeEvents">
      <div className="about-title">Events</div>
      <EventCarousel/>
    </div>
  )
}

export default HomeEvents
