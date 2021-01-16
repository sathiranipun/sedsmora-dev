import React from 'react'
import { Button } from '../../button/Button'
import './Header.css'

const Header = () => {

  return (
    <div className="Header" >
      {/* <div className="header-title">Wilderness within reach</div> */}
      <div className="header-description">
        The strongest affection and utmost zeal should, I think, promote the studies concerned with the most beautiful objects. <br/> This is the discipline that deals with the universe's divine revolutions, the stars' motions, sizes, distances, risings and settings . . . for what is more beautiful than heaven?" 
        <br/><br/> —Nicolaus Copernicus, Astronomer</div>
      {/* <div className="header-button-section">
        <Button buttonStyle='btn--outline' buttonSize="btn--wide">
          JOIN US
        </Button>
        <Button buttonStyle='btn--outline' buttonSize="btn--wide" buttonColor='grey'>
          OUR SERVICE
        </Button>
      </div> */}
    </div>
  )
}

export default Header
