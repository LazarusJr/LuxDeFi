import React from 'react'
import './Hero.css'
import MainVideo from '../../Assets/video.mp4'

const HomeH = () => {
  return (

    <div className="Main-Hero">
      <video autoPlay loop muted id='video'>
        <source src={MainVideo} type='video/mp4' />
      </video>
      <div className='wrap'>
      <div className='container'>
      <div className='col-1'>
        <h1 className='Lux'>LUX-XEFI</h1>
        <h3>Experience the future of banking</h3>
        <p>unleash the potential of your investments <span className='gold'> and never fear losing out</span></p>
      </div>
      </div>
      </div>
      <div className='divider'>
      <div class="custom-shape-divider-bottom-1646422120">
    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M1200 0L0 0 598.97 114.72 1200 0z" class="shape-fill"></path>
    </svg>
</div>
</div>
    </div>


  )
}

export default HomeH