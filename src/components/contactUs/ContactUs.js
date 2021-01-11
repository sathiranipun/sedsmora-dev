import React from 'react';
import './Contact.scss';
import { FaFacebookSquare } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';
import { GrLinkedin } from 'react-icons/gr'


const ConnectUs = () => {
  return (
    <div className="ContactUs">
      <div className="contactTitle about-title">Connect Us</div>
      <div className="social-icon-section">
        <div className="social-icon"><FaFacebookSquare /></div>
        <div className="social-icon"><FaInstagram /></div>
        <div className="social-icon"><FaTwitter/></div>
        <div className="social-icon"><GrLinkedin/></div>
      </div>
      <div className="rights-text">© 2021 SEDS Mora | University of Moratuwa. All Rights Reserved.</div>
    </div>
  )
}

export default ConnectUs
