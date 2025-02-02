import React from 'react'
import './Footer.css'
import footer_icon from '../Assets/logo_big.png'
import instagram_icon from '../Assets/instagram_icon.png'
import pintester_icon from '../Assets/pintester_icon.png'
import whatsapp_icon from '../Assets/whatsapp_icon.png'

export const Footer = () => {
  return (
    <div className="footer">
        <div className="footer-logo">
            <img src={footer_icon} alt="" />
            <p>SHOPPER</p>
        </div>
        <ul className="footer-links">
            <li>Shop</li>
            <li>Products</li>
            <li>Offices</li>
            <li>About</li>
            <li>Conatct</li>
        </ul>
        <div className="footer-social-icon">
            <div className="footer-icon-container">
                <img src={instagram_icon} alt="" />
            </div>
            <div className="footer-icon-container">
                <img src={pintester_icon} alt="" />
            </div>
            <div className="footer-icon-container">
                <img src={whatsapp_icon} alt="" />
            </div>
        </div>
        <div className="footer-copyright">
            <hr/>
            <p>Copyrights @2024 All rights-Reserved</p>
        </div>
    </div>
  )
}
