import React from 'react';
import './Contact.scss';
import { FaFacebookSquare } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { FaYoutube } from 'react-icons/fa';
import { GrLinkedin } from 'react-icons/gr'


const ConnectUs = () => {
  return (
    <div className="ContactUs">
      <div className=" about-title">Connect Us</div>
      <div className="social-icon-section">
        <a href="https://www.facebook.com/sedsmora" target="_blank" className="social-links"><div className="social-icon"><FaFacebookSquare /></div></a>
        <a href=" https://www.instagram.com/seds_mora" target="_blank" className="social-links"><div className="social-icon"><FaInstagram /></div></a>
        <a href="https://www.youtube.com/channel/UCEmlDP54tXZgop43Gpa5rjw/" target="_blank" className="social-links"><div className="social-icon"><FaYoutube/></div></a>
        <a href=" https://www.linkedin.com/company/seds-mora" target="_blank" className="social-links"><div className="social-icon"><GrLinkedin/></div></a>
      </div>
      <div className="rights-text">© 2021 SEDS Mora | University of Moratuwa. All Rights Reserved.</div>
    </div>
  )
}

export default ConnectUs
