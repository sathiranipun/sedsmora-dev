import React, { useEffect, useState } from 'react';
import './HomeAbout.scss';
import Aos from 'aos';

const HomeAbout = () => {

  return (
    <div className="HomeAbout">
      <div className="about-title">Who are we</div>
      <div className="about-image-section" >
        <img src="./images/about/about_image1.jpg" alt="" className="about-image"/>
      </div>
      <div className="about-description" >Students for the Exploration and Development of Space or "SEDS" 
      is an independent, student-based international organization which promotes 
      the exploration and development of space. SEDS Mora is the SEDS 
      chapter in University of Moratuwa, Sri Lanka.</div>
    </div>
  )
}

export default HomeAbout
