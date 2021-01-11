import React from 'react'
import { Button } from '../../button/Button'
import './Header.css'

const Header = () => {

  return (
    <div className="Header" >
      <div className="header-title">Wilderness within reach</div>
      <div className="header-description">
        "It is not so much for its beauty that the forest makes a claim upon men’s hearts, 
        as for that subtle something, that quality of air that emanation from old trees, 
        that so wonderfully changes and renews a weary spirit." 
        <br/> —Robert Louis Stevenson</div>
      <div className="header-button-section">
        <Button buttonStyle='btn--outline' buttonSize="btn--wide">
          JOIN US
        </Button>
        <Button buttonStyle='btn--outline' buttonSize="btn--wide" buttonColor='grey'>
          OUR SERVICE
        </Button>
      </div>
    </div>
  )
}

export default Header
