import React from 'react'
import './Testimonial.scss'

const TestimonialTile = ({avatarImg, description, name, imgAlt}) => {
  return (
    <div className="TestimonialTile">
      <div className="avatar-section">
        <div className="avatar-image-container">
          <img src={avatarImg} alt={imgAlt} className="avatar-image"/>
        </div>
      </div>
      <div className="description-section">
        <div className="description">{ `" ${description} "` }</div>
        <div className="name-section">{ `--${name}--` }</div>
      </div>
    </div>
  )
}

export default TestimonialTile
