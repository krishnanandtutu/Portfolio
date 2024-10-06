import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/jobportal.png'
import IMG2 from '../../assets/worldwise.png'
import IMG3 from '../../assets/chatapp.png'

const data=[
  {
    id:1,
    image:IMG1,
    title:'Job-portal Fullstack web application',
    github:'https://github.com/krishnanandtutu/job-portal-frontend',
    demo: 'https://job-portal-frontend-pi.vercel.app/'
  },
  {
    id:2,
    image:IMG2,
    title:'World wise using Reactjs & Firebase',
    github:'https://github.com/krishnanandtutu/world_wise',
    demo: 'https://github.com/krishnanandtutu/world_wise'
  },
  {
    id:3,
    image:IMG3,
    title:'A Real time chat Application',
    github:'',
    demo: ''
  }
]
const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio_container">{
        data.map(({id,image,title,github,demo})=>{
          return(
            <article className='portfolio_item' key={id}>
          <div className="portfolio_item-image">
            <img src={image} alt="prese" />
          </div>
          <h3>{title}</h3>
          <div className="portfolio_item-cta">
          <a href={github} className='btn' target='__blank'>GitHub</a>
          <a href={demo} className='btn btn-primary' target='__blank'>Live Demo</a>
          </div>
        </article>
          )
        })
      }
      </div>
    </section>
  )
}

export default Portfolio