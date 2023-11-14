import React from 'react'
import './services.css'
import {BsCheck} from 'react-icons/bs'

const Services = () => {
  return (
    <section id='services'>
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className="container services__container">
        <article className="service">
            <div className="service__head">
              <h3>UI/UX Design</h3>
            </div>

            <ul className='service__list'>
              <li>
                <BsCheck className="service__list-icon"/>
                <p>Modern and stylish design 
                </p>
              </li>
              <li>
                <BsCheck className="service__list-icon"/>
                <p>up-to-date development practices 
                </p>
              </li>
              <li>
                <BsCheck className="service__list-icon"/>
                <p>A wide variety of platform choice for building at the users request 
                </p>
              </li>
              <li>
                <BsCheck className="service__list-icon"/>
                <p>
                </p>
              </li>
              <li>
                <BsCheck className="service__list-icon"/>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                </p>
              </li>
            </ul>

        </article>
{/* END OF UI.UX */}
<article className="service">
            <div className="service__head">
              <h3>Web Development</h3>
            </div>

            <ul className='service__list'>
              <li>
                <BsCheck className="service__list-icon"/>
                <p>Fast and efficient work pace
                </p>
              </li>
              <li>
                <BsCheck className="service__list-icon"/>
                <p>Great client communication  
                </p>
              </li>
              <li>
                <BsCheck className="service__list-icon"/>
                <p>Attention to detail in all parts of my work 
                </p>
              </li>
              <li>
                <BsCheck className="service__list-icon"/>
                <p>competitively priced 
                </p>
              </li>
              <li>
                <BsCheck className="service__list-icon"/>
                <p>product satisfaction guaranteed 
                </p>
              </li>
            </ul>
          </article>
{/* END OF WEB DEV 
        <article className="service">
            <div className="service__head">
              <h3>Content Creation</h3>
            </div>

            <ul className='service__list'>
              <li>
                <BsCheck className="service__list-icon"/>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                </p>
              </li>
              <li>
                <BsCheck className="service__list-icon"/>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                </p>
              </li>
              <li>
                <BsCheck className="service__list-icon"/>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                </p>
              </li>
              <li>
                <BsCheck className="service__list-icon"/>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                </p>
              </li>
              <li>
                <BsCheck className="service__list-icon"/>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                </p>
              </li>
            </ul>

        </article>
 END OF CONTENT  */}
      </div>
    </section>
  )
}

export default Services