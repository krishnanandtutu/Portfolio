import React from 'react'
import './services.css'
import {BiCheck} from 'react-icons/bi'
const Services = () => {
  return (
    <section id='services'>
      <h5>What I Have Done</h5>
      <h2>My Projects</h2>
      <div className="container services_container">
        <article className='service'>
          <div className="services_head">
            <h3>A FullStack Job-Portal Web Application</h3>
          </div>
          <ul className='service_list'>
            <li><BiCheck className='service_list-icon'/>
            <p>Advanced Job Search: Easily filter by location, salary, company, and job type.</p></li>
            <li><BiCheck className='service_list-icon'/>
            <p>Profile Management: Users can create and manage profiles, upload resumes, and apply to jobs with one click.</p></li>
            <li><BiCheck className='service_list-icon'/>
            <p>Admin Dashboard: Full control over job postings, applications, and user management.</p></li>
            <li><BiCheck className='service_list-icon'/>
            <p>Secure Authentication: JWT-based auth system with role-based access for users and admins.</p></li>
            <li><BiCheck className='service_list-icon'/>
            <p>Employer Portal: Companies can post jobs, view applications, and communicate with candidates directly.</p></li>
            
            <li><BiCheck className='service_list-icon'/>
            <p> Tech stack:   HTML, CSS,Javascript, ReactJs,NodeJS, Talwind,ExpressJs,Mongodb</p></li>
          </ul>
        </article>
        {/**End of UI/UX card**/}
        <article className='service'>
          <div className="services_head">
            <h3>A world-wise Web Application</h3>
          </div>
          <ul className='service_list'>
            <li><BiCheck className='service_list-icon'/>
            <p>Interactive Map: Users can click on any location on Google Maps to save their memory (text) as a "memory pin."</p></li>
            <li><BiCheck className='service_list-icon'/>
            <p> Real-Time Sync: Memories are saved and synced across devices in real-time using Firebase Firestore.
</p></li>
            <li><BiCheck className='service_list-icon'/>
            <p>Deployed on Firebase Hosting for fast, global delivery.</p></li>
            <li><BiCheck className='service_list-icon'/>
            <p>Real-time updates powered by Firestore ensure a smooth user experience.  ghjfgh0
            
</p></li>
            <li><BiCheck className='service_list-icon'/>
            <p>Tech Stack - HTML, CSS, Javascript, ReactJS,
Leaflet Library, React Hooks,Firebase.</p></li>
            <li><BiCheck className='service_list-icon'/>
            <p>user can also use its current location</p></li>
            <li><BiCheck className='service_list-icon'/>
            <p>There are two option user can save memories as city or country</p></li>
          </ul>
        </article>
        {/**End of 2nd card**/}
        <article className='service'>
          <div className="services_head">
            <h3>A Real time chat application</h3>
          </div>
          <ul className='service_list'>
            <li><BiCheck className='service_list-icon'/>
            <p>Developing a real time chat appllication in which real time chat between users,pwered by socket.io for low latency communication</p></li>
            <li><BiCheck className='service_list-icon'/>
            <p>Secure Authentication: JWT-based authentication ensures a secure, tokenized login process.</p></li>
            <li><BiCheck className='service_list-icon'/>
            <p>User Profiles: Personalized profiles for users, with the ability to customize display names and avatars.</p></li>
            <li><BiCheck className='service_list-icon'/>
            <p>Private & Group Chats: Users can engage in private conversations or create group chats.</p></li>
            <li><BiCheck className='service_list-icon'/>
            <p> Real-Time Updates: Seamless syncing of messages across users and devices with real-time notifications.</p></li>
            <li><BiCheck className='service_list-icon'/>
            <p> Socket.io ensures reliable, low-latency real-time messaging.</p></li>
            <li><BiCheck className='service_list-icon'/>
            <p>Tech stack: Javascript, HTML, CSS, Reactjs,Nodejs,Expressjs,Mongodb,Socket.io, Daisy Ui</p></li>
          </ul>
        </article>
        {/**End of 3rd card**/}
      </div>
    </section>
  )
}

export default Services