import React from 'react'
import { TestimonialData } from './TestimonialData'
import TestimonialTile from './TestimonialTile'
import './Testimonial.scss'

const TestimonialSection = () => {
  return (
    <>
    <div className="TestimonialSection about-title" style={{marginTop:"40px"}}>Testimonial</div>
    <div className="TestimonialTileSection">
      { TestimonialData.map((tile, index) => {
        return (
          <div className="tiles" key= {index} data-aos="fade-up" data-aos-delay={`${(index + 1)*150}`}>
            <TestimonialTile {...tile}/>
          </div>
        )
      }) }
    </div>
    </>
  )
}

export default TestimonialSection
