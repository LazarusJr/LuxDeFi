import React from 'react'
import './Footer.css'
import {Link} from 'react-router-dom'

const Footer = () => {
  return (
    <div className='Footer-container'>
      <div className='footer-items'>
        <h2>Information</h2>
        <a href='#'>FAQ</a>
        <a href='#'>Services</a>
        <a href='#'>Terms and Conditions</a>
        </div>
        <div className='footer-items'>
        <h2>Services</h2>
        <a href='#'>Banking</a>
        <a href='#'>Investments</a>
        <a href='#'>Currency Exchange</a>
        </div>
        <div className='footer-items'>
        <h2>Account</h2>
        <a href='#'>Update Profile</a>
        <a href='#'>Check Balance</a>
        <a href='#'>Close Account</a>
        </div>
    </div>
  )
}

export default Footer