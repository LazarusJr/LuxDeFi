import React from 'react'
import './RegisterCallout.css'

const RegisterCallout = () => {
  return (
    <div className='callout-container'>
        <div className='Main-Callout'>
            <form className='Main-form'>
          <div className='form-heading'>
          <h1>Start your journey today</h1>
          <p>Register your interest and we will be sure to get in contact with you</p>
          </div>
          <div className='Callout-input'>
          <input name='name' type='text' placeholder='enter your name' />
          <input name='email' type='text' placeholder='enter your email address' />
          <button className='btn-Callout' type='confirm'>Sign Up</button>
          </div>
          <div className='form-footer'>
          <input id ='checkbox' type='checkbox' /><label for='checkbox'>&nbsp;&nbsp;Yes i agree to all&nbsp;<span>terms and conditions</span></label></div>
        </form>
        </div>
        
        </div>
  )
}

export default RegisterCallout