import React from 'react'
import './about.css'
import ME from '../../assets/profile.jpg'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'

const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About Image"/>
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
              <FaAward className='about__icon'/>
              <h5>Experience</h5>
              <small>3+ years of working experience</small>
            </article>

            <article className='about__card'>
              <FiUsers className='about__icon'/>
              <h5>Clients</h5>
              <small>Open to Work</small>
            </article>

            <article className='about__card'>
              <VscFolderLibrary className='about__icon'/>
              <h5>Projects</h5>
              <small>3 Completed Projects, 2 in development</small>
            </article>

          </div>

          <p> 
            <em>I am known to be a dedicated and highly self-motivated software engineer with an excellent foundation in
            computer science and technology, eager to demonstrate the skills I have obtained and perfected.
            recognised for adaptability, quick learning, and constant commitment to excellence. Seeking
            opportunities to apply my current expertise and enthusiasm for advancing innovative software
            Projects.</em>
          </p>

          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      

      </div>
    </section>

  )
}

export default About