import React from 'react'
import HomeAbout from '../components/HomeAbout/HomeAbout';
import HomeEvents from '../components/HomeEvents/HomeEvents';
import HomeInsights from '../components/HomeInsights/HomeInsights';
import Imageslilder from '../components/ImageCarousel/Imageslilder';
import TestimonialSection from '../components/testimonial/TestimonialSection';

const Homepage = () => {
  return (
    <div>
      <Imageslilder viewHeight={"screen-height"} TimeInterval={4000}/>
      <HomeAbout/>
      <HomeEvents/>
      <TestimonialSection/>
      <HomeInsights/>
    </div>
  )
}

export default Homepage
