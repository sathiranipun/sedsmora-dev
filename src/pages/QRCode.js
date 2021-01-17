import React from 'react'
import './QRCode.scss'

const QRCode = () => {
  return (
    <div className="QRCode blur-layer" >
      <div className="QRCode-container" >
        <img src="/images/qr/qrcode.svg" data-aos="fade-up" alt="" className="qr-image"/>
      </div>
    </div>
  )
}

export default QRCode
