import React from 'react'
import './nav.css'
import {AiOutlineHome} from 'react-icons/ai'
import {MdOutlineWavingHand} from 'react-icons/md'
import {MdWorkOutline} from 'react-icons/md'
import {GiAutoRepair} from 'react-icons/gi'
import {AiOutlineProject} from 'react-icons/ai'


const Nav = () => {
  return (
    <nav>
      <a href="#" className='active'><AiOutlineHome/></a>
      <a href="#about"><MdOutlineWavingHand/></a>
      <a href="#experience"><MdWorkOutline/></a>
      <a href="#services"><GiAutoRepair/></a>
      <a href="#portfolio"><AiOutlineProject/></a>
    </nav>
  )
}

export default Nav