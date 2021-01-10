import React from 'react'
import HomeAbout from '../components/HomeAbout/HomeAbout';
import HomeEvents from '../components/HomeEvents/HomeEvents';
import Imageslilder from '../components/ImageCarousel/Imageslilder';

const Homepage = () => {
  return (
    <div>
      <Imageslilder viewHeight={"screen-height"} TimeInterval={4000}/>
      <HomeAbout/>
      <HomeEvents/>
    </div>
  )
}

export default Homepage
