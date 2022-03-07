import React from 'react'
import './Information.css'

const Information = () => {
  return (
    <div className='container2'>
          <div className='column-1'>
            <h1>Welcome to the future</h1>
            </div>
            <div className='column-2'>
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
          <input id ='checkbox' type='checkbox' /><label for='checkbox'>&nbsp;&nbsp;Yes i agree to all&nbsp;<span>terms and conditions</span></label></div>
          </div>
        </form>
        </div>
              </div>
  )
}

export default Information