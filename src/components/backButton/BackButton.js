import React from 'react'
import './BackButton.css'
import { Icon } from '@iconify/react';
import { useNavigate } from 'react-router-dom';

export default function BackButton() {
    let navigate = useNavigate();

    const goHome = () => {
      navigate('/')  

    }
  return (
    <div className='back-btn-wrapper'>
        <button className='back-btn' onClick={goHome}><Icon icon="mdi:arrow-left" className='arrow' /></button>
    </div>
  )
}
