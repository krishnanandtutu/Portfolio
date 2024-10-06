import React from 'react'
import './footer.css'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {FiInstagram} from 'react-icons/fi'
const Footer = () => {
  return (
    <footer>
      <a href="#home" className='footer_logo'>Krishna</a>
      <ul className='permalinks'>
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#services">Projects</a></li>
        <li><a href="#positions">Positions</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        
        <li><a href="#contact">Contact</a></li>
      </ul>
      <div className="footer_socials">
      <a href="https://www.linkedin.com/in/krishna-nand-tutu-a858ab23a" target="blank"><BsLinkedin/></a>
      <a href="https://github.com/krishnanandtutu" target="blank"><FaGithub/></a>
      <a href="https://www.instagram.com/shandilya.singh.krishna/" target="blank"><FiInstagram/></a>  
      </div>
      <div className="footer_copyright">
        <small>&copy; Krishna. All rights reserved.</small>
      </div>
    </footer>
  )
}

export default Footer