import React from 'react'
import Feed from '../Feed/Feed'
import './Home.css'

export default function Home() {
  return (
    <div className='home-wrapper'>
      <h1>r/Popular</h1>
      <hr className='break'></hr>
        <Feed></Feed>
    </div>
  )
}
