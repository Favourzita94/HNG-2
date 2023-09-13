import React from 'react'
import Logo from '../images/Play.svg'
import mypic from '../images/mypic.png'
import pic2 from '../images/pic2.svg'

const Hero = () => {
  return (
    <div className='hero-box'>
        <h1 className='hero-box-title'>John Wick 3 : Parabellum</h1>
        <div className='row2'>
            <div><img src={mypic} alt=''/> <span>86.0/100</span></div>
            <div><img src={pic2} alt=''/> <span>97%</span></div>
        </div>
        <div className='row3'>
            <p>John Wick is on the run after killing a member of the international assassins' guild, 
              and with a $14 million price tag on his head, he is the target of hit men and women everywhere.</p>
            <a href='/'><img src={Logo} alt=''/> <span>WATCH TRAILER</span></a>
        </div>
    </div>
  )
}

export default Hero;