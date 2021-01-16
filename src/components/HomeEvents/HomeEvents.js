import React from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import EventCarousel from './EventCarousel';
import './HomeEvents.scss'


const HomeEvents = () => {
  return (
    <div className="HomeEvents ">
      <div className="about-title events" data-aos="fade-right">Events</div>
      <div className="about-description" data-aos="fade-up">
        With aim of offering you the best knowledge and precious experience 
        to explore more about the puzzling universe SEDS Mora comes up 
        numerous events throughout the year including webinar and discussion 
        sessions, QnA platforms, practical workshops, observation camps along 
        with national and international competitions. With such events you are 
        given the exposure you are seeking as an enthusiastic individual about 
        this universe. All most of all of those events are organised collaborating 
        with expertise in the field just to ensure the high quality of the work. </div>
      <EventCarousel/>
    </div>
  )
}

export default HomeEvents
