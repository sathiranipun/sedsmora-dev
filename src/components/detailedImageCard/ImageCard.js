import React from 'react';
import { CgPlayButtonR } from 'react-icons/cg'
import './ImageCard.scss'

const ImageCard = ({small, medium, large, imageTile, title, description, imageLink, imageAlt}) => {

  const size = large? 'large': small? 'small': 'medium';

  return (
    <div className={`ImageCard ${size}`}>
      <div className="image-section">
        <img className="image" src={imageLink} alt={imageAlt}/>
        <div className="image-filter"></div>
        <div className="image-title">{ imageTile }</div>
      </div>
      <div className="icons-section"></div>
      <div className="detail-section">
        <div className="detail-title">
          { title }
        </div>
        <div className="detail-desc">
          { description }
        </div>
      </div>
    </div>
    
  )
}

export default ImageCard
