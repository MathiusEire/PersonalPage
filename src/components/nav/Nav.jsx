import React from 'react'
import './nav.css'
import {AiOutlineHome} from 'react-icons/ai'
import {MdOutlineWavingHand} from 'react-icons/md'
import {MdWorkOutline} from 'react-icons/md'
import {GiAutoRepair} from 'react-icons/gi'
import {AiOutlineProject} from 'react-icons/ai'
import {useState} from 'react'

const Nav = () => {
  const [activeNav, setActiveNav] = useState('#')
  return (
    <nav>
      <a href="#" onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active' : ''}><AiOutlineHome/></a>
      <a href="#about" onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}><MdOutlineWavingHand/></a>
      <a href="#experience" onClick={() => setActiveNav('#experience')} className={activeNav === '#experience' ? 'active' : ''}><MdWorkOutline/></a>
      <a href="#services" onClick={() => setActiveNav('#services')} className={activeNav === '#services' ? 'active' : ''}><GiAutoRepair/></a>
      <a href="#portfolio" onClick={() => setActiveNav('#portfolio')} className={activeNav === '#portfolio' ? 'active' : ''}><AiOutlineProject/></a>
    </nav>
  )
}

export default Nav