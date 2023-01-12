import React from 'react'
import Feed from '../Feed/Feed'
import './Home.css'
import RecommendedSubs from '../RecommendedSubs/RecommendedSubs'

export default function Home() {
  return (
    <div className='home-wrapper'>
        <RecommendedSubs></RecommendedSubs>
        <Feed></Feed>
    </div>
  )
}
