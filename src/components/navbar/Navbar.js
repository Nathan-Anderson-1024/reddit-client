import React from 'react'
import './Navbar.css'

export default function Navbar() {
  return (
    <div className='nav-wrapper'>
        <div className='left-nav'>
            <div>Hamburger menu</div>
            <div>Sub location</div>
        </div>
        <div className='right-nav'>
            <div>Search icon</div>
            <div>Profile Icon</div>
        </div>
    </div>
  )
}
