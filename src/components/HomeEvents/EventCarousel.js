import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import ImageCard from "../detailedImageCard/ImageCard";
import {CardData} from './CardData';
import './HomeEvents.scss'
 
export default function EventCarousel() {

  const [isMobile, setisMobile] = useState(true)

  const changeSettings = () => { 
      if (window.innerWidth <= 960) {
        setisMobile(false);
      } else {
        setisMobile(true);
      }
  }

  
  useEffect(() => {
    changeSettings();
    window.addEventListener('resize', changeSettings);
    return () => {
      window.removeEventListener('resize', changeSettings);
    }
    
  }, [])

  var set1 = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1
  }

  var set2 = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  }
  var settings = isMobile? set1: set2;

  return (
    <div style={{width:"98%"}}>
      <Slider {...settings}>
      { CardData.map((slide, index) => {
        return (
          <div key={index}>
            <Link to={`/events/${slide.link}`}>
              <ImageCard {...slide} />
            </Link>
          </div>
        )
      }) }
    </Slider>
    </div>
  );
}