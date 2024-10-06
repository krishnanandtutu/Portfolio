import React from 'react'
import './positions.css'
import { BiCheck } from 'react-icons/bi'
const Services = () => {
  return (
    <section id='positions'>
      <h5>LEADERSHIP POSITIONS / CLUBS</h5>
      <h2>PORs</h2>
      <div className="container services_container">
        <article className='service'>
          <div className="services_head">
            <h3>CAMPUS AMBASSADOR OF KSHITIJ THE TECH FEST IIT (KHARAGPUR) </h3>
          </div>
          <ul className='service_list'>
            <li><BiCheck className='service_list-icon' />
              <p>Experienced in leading a big team of 15
                members worked With me.
              </p></li>
            <li><BiCheck className='service_list-icon' />
              <p>Role: Headed its
                management and managed event in college in which participants have showcased their talent.</p></li>
          </ul>
        </article>
        {/**End of UI/UX card**/}
        <article className='service'>
          <div className="services_head">
            <h3>Member of SSB CLUB GJUS&T HISAR
            </h3>
          </div>
          <ul className='service_list'>
            <li><BiCheck className='service_list-icon' />
              <p>Managed event in college with team members.</p></li>
            <li><BiCheck className='service_list-icon' />
              <p>Role: convience/motivate participants to join as it will helpful for their upcoming SSB.
              </p></li>
            <li><BiCheck className='service_list-icon' />
              <p>Outcome: Improved my communication & management skills by leading the event.
              </p></li>
          </ul>
        </article>
        {/**End of 2nd card**/}
        <article className='service'>
          <div className="services_head">
            <h3>National Cadet Corps </h3>
          </div>
          <ul className='service_list'>
            <li><BiCheck className='service_list-icon' />
              <p>Secured Rank 3 in NCC AIR WING 2022.</p></li>
            <li><BiCheck className='service_list-icon' />
              <p>Stand by in NCC ARMY WING 2021.</p></li>
            <li><BiCheck className='service_list-icon' />
              <p>Attended 4 SSBs till now .</p></li>
          </ul>
        </article>
        {/**End of 3rd card**/}
      </div>
    </section>
  )
}

export default Services