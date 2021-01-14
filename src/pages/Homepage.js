import React from 'react'
//import ConnectUs from '../components/contactUs/ContactUs';
import HomeAbout from '../components/HomeAbout/HomeAbout';
import HomeEvents from '../components/HomeEvents/HomeEvents';
import HomeInsights from '../components/HomeInsights/HomeInsights';
import Imageslilder from '../components/ImageCarousel/Imageslilder';
import TestimonialSection from '../components/testimonial/TestimonialSection';
import { motion } from 'framer-motion';
import './Homepage.scss';


const Homepage = () => {

  const pageVariants = {
    initial: {
      opacity: 0,
      x: "-100vw"
    },
    in: {
      opacity: 1,
      x:0,
      scale: 1
    },
    out: {
      opacity: 0,
      x: "100vw",
      scale: 0.8
    }
  }

  const pageTransitions = {
    type: 'linear',
    ease: 'anticipate',
    duration: 1
  }


  return (
    
        <motion.div className="AboutUs" 
        initial="initial" animate="in" 
        exit="out" variants={pageVariants} 
        transition={pageTransitions}>
          <div className="home-blur-layer">
          <Imageslilder viewHeight={"screen-height"} TimeInterval={4000}/>
          <HomeInsights/>
          <HomeAbout/>
          <HomeEvents/>
          <TestimonialSection/>
          </div>
        </motion.div>
      
  )
}

export default Homepage
