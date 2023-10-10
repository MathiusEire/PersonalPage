import React from 'react'
import './experience.css'
import {AiOutlineCheckCircle} from 'react-icons/ai'

const Experience = () => {
  return (
    <section id='experience'>
      <h5>My Skillset</h5>
      <h2>My Experience</h2>

      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Frontend Development</h3>
          <div className="experience__content">
            
            <article className="Experience__details">
              <AiOutlineCheckCircle className='experience__details-icon'/>
              <div>
                <h4>HTML</h4>
                <small className='text-light'>Experienced</small>
              </div>  
            </article>

            <article className="Experience__details">
              <AiOutlineCheckCircle className='experience__details-icon'/>
              <div>
                <h4>CSS</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>

            <article className="Experience__details">
              <AiOutlineCheckCircle className='experience__details-icon'/>
              <div>
                <h4>JavaScript</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>

            <article className="Experience__details">
              <AiOutlineCheckCircle className='experience__details-icon'/>
              <div>
                <h4>Springboot</h4>
                <small className='text-light'>Junior</small>
              </div>
            </article>

            <article className="Experience__details">
              <AiOutlineCheckCircle className='experience__details-icon'/>
              <div>
                <h4>React</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
          </div>
        </div>
{/* END OF FRONT END */}
        <div className="experience__backend">
        <h3>Backend Development</h3>
          <div className="experience__content">
            
            <article className="Experience__details">
              <AiOutlineCheckCircle className='experience__details-icon'/>
              <div>
                <h4>NodeJS</h4>
                <small className='text-light'>Junior</small>
              </div>
            </article>

            <article className="Experience__details">
              <AiOutlineCheckCircle className='experience__details-icon'/>
              <div>
                <h4>MongoDB/MySQL</h4>
                <small className='text-light'>Junior</small>
              </div>
            </article>

            <article className="Experience__details">
              <AiOutlineCheckCircle className='experience__details-icon'/>
              <div>
                <h4>PHP</h4>
                <small className='text-light'>Junior</small>
              </div>
            </article>

            <article className="Experience__details">
              <AiOutlineCheckCircle className='experience__details-icon'/>
              <div>
                <h4>MySQL</h4>
                <small className='text-light'>Junior</small>
              </div>
            </article>

            <article className="Experience__details">
              <AiOutlineCheckCircle className='experience__details-icon'/>
              <h4>Python</h4>
              <small className='text-light'>Experienced</small>
            </article>
          </div>
        </div>
{/*END OF BACKEND */}
      </div>
    </section>
  )
}

export default Experience