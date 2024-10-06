import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/myimg2.png'
import Headersocials from './Headersocials'
const Header = () => {
  return (
    <header id='home'>
      <div className="container header_container">
        <h5>Hello I'm</h5>
        <h1>Krishna Nand Tutu</h1>
        <h5 className="text-light">
          FullStack Developer
        </h5>
        <CTA/>
        <Headersocials/>
        <div className="me">
          <img src={ME} alt="me" />
        </div>
        <a href="#contact" className='scroll_down'>Scroll Down</a>
      </div>
    </header>
  )
}

export default Header