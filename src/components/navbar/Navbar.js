import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { FaBars, FaTimes} from 'react-icons/fa'
import { Button } from '../button/Button';
import './Navbar.scss';
//import { IconContext } from 'react-icons/lib'
  
function Navbar() { 

  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);
  const [scrolled, setScrolled] = useState(false)

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);


  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false); 
    } else {
      setButton(true);
    }
  }

  const checkScrolled = () => {
    if (document.body.scrollTop > 10 || document.documentElement.scrollTop > 10) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  }

  window.addEventListener('resize', showButton);
  window.addEventListener('scroll', checkScrolled, { passive: true })

  return (
    <>
      <div className={scrolled || click? "navbar navbar-shadow" : "navbar"}>
        <div className="navbar-container container">
        <Link to='/' className="navbar-logo" onClick={closeMobileMenu}>
             SEDS Mora
          </Link>
          <div className="menu-icon" onClick={handleClick}>
            { click? <FaTimes/> : <FaBars/> }
          </div>
          <div className={click? 'nav-menu active': 'nav-menu'}>
            <ul>
            <li className="nav-item">
              <NavLink to="/events" className="nav-links" onClick={closeMobileMenu}>
                EVENTS
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to='/p' className="nav-links" onClick={closeMobileMenu}>
                BLOG
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to='/insights' className="nav-links" onClick={closeMobileMenu}>
                INSIGHTS
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to='/about' className="nav-links" onClick={closeMobileMenu}>
                ABOUT
              </NavLink>
            </li>
            </ul>
            <ul>
            <li className="nav-item nav-btn">
              { button? (
                <Link to='/sign-up' className='btn-link' onClick={closeMobileMenu}>
                  <Button buttonStyle='btn--outline'>
                    CONTACT US
                  </Button>
                </Link>
              ): (
                <Link to='/sign-up' className="btn-link" onClick={closeMobileMenu}>
                  <Button to='/sign-up' buttonStyle="btn--outline" buttonSize='btn--mobile'>
                    CONTACT US
                  </Button>
                </Link>
              ) }
            </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}

export default Navbar
