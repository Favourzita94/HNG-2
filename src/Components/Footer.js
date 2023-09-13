import React from 'react'
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import { IconContext } from "react-icons";

const Footer = () => {
  return (
    <div className='footer'>
        <div className='footer-icons'>
        <IconContext.Provider value={{ color: "black", size:'1.5rem', className: "global-class-name" }}>
            <a href='/'><FaFacebook /></a>
            <a href='/'><FaInstagram /></a>
            <a href='/'><FaTwitter /></a>
            <a href='/'><FaYoutube /></a>
        </IconContext.Provider>
        </div>
        <div className='terms'>
            <a href='/'>Conditions of use</a>
            <a href='/'>Privacy and Policy</a>
            <a href='/'>Press Room</a>
        </div>
        <div><p>2021 MovieBox by Adriana Eka Prayudha</p></div>
    </div>
  )
}

export default Footer;