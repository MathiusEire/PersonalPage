import React from 'react'
import './header.css'
import CTA from './CTA'

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h2>Hello I'm</h2>
        <h1>Matthew Armstrong</h1>
        <h2 className="text.light">Fullstack Developer</h2>
        <CTA />
      </div>
    </header>
  )
}

export default Header