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
        <h3>Enhance the future of banking</h3>
        <p>unleash the potential of your investments <span className='gold'> and never fear losing out</span></p>
      </div>

      <div className='col-2'>
        <div className='flayout'>
          <form className='Main-form'>
          <div className='form-heading'>
          <h1>Start your journey today!</h1>
          <p>lets get you signed up so you can start</p>
          </div>
          <div className='form-inputs'>
          <input name='name' type='text' placeholder='enter your name' />
          <input name='email' type='text' placeholder='enter your email address' />
          <input name='password' type='password' placeholder='create a password' />
          <input name='password' type='password' placeholder='confirm password'/>
          </div>
          <div className='disclaimer'>
          <button className='btn-desktop' type='confirm'>Sign Up</button>
          <div className='form-footer'>
          <input type='checkbox' /><p>yes i agree to receieve emails from DeFi Community</p>
          </div>
          </div>
        </form>
        </div>
       
      </div>
      </div>
      </div>
      <div class="custom-shape-divider-bottom-1646422120">
    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M1200 0L0 0 598.97 114.72 1200 0z" class="shape-fill"></path>
    </svg>
</div>
    </div>


  )
}

export default HomeH