import BackButton from '../backButton/BackButton'
import './Navbar.css'

export default function Navbar() {
  

  return (
    <div className='nav-wrapper'>
      <BackButton></BackButton>
      <h1>Reddit<span className='lite'>Lite</span></h1>
    </div>
  )
}
