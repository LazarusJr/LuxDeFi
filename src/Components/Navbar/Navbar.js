import React, {useState} from 'react'
import Logo from '../../Assets/logo.png'
import './Navbar.css'
import {GiHamburgerMenu} from 'react-icons/gi'
import {CgCloseR} from 'react-icons/cg'

const Navbar = () => {

    const [click, clicked] = useState(false)
    const burgerClick = () => clicked(!click)

  return (
    <div className='navbar'>
    <div className='nav-container'>
        <div className='text-logo'>
        <h1><a href='/'>XEFI</a></h1>
        </div>
        <div className='logo'>
        <img src={Logo} alt='' />
       </div>
           <ul className={click ? 'nav active' : 'nav' }>
               <li className='nav-item'><a href='/'>Home</a></li>
               <li className='nav-item'><a href='/'>About</a></li>
               <li className='nav-item'><a href='./'>FAQ</a></li>
               <li className='nav-item'><a href='./'>Contact Us</a></li>
               <button className='btn-desktop'>SIGN UP</button>
               <button className='btn-mobile'>SIGN UP</button>
           </ul>
           <div className='hamburger' onClick={burgerClick}>
               {click ? (<CgCloseR size={30} />) : (<GiHamburgerMenu size={30} />)}
           </div> 
       </div>
    </div>      
  )
}

export default Navbar