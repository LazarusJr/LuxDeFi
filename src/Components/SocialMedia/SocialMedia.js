import React from 'react'
import {AiOutlineFacebook, AiOutlineTwitter, AiOutlineInstagram} from 'react-icons/ai'
import './SocialMedia.css'

const SocialMedia = () => {
  return (
      <div className='socialmedia-container'>
          <div className='s-heading'>
          <h1>Follow latest updates on our social media</h1></div>
          <div className='social-mediawrap'>
          <div className='socialmedias'>
              <a href='#'><AiOutlineFacebook size={35}/></a>
              </div>
              <div className='socialmedias'>
              <a href='#'><AiOutlineTwitter size={35}/></a>
              </div>
              <div className='socialmedias'>
              <a href='#'><AiOutlineInstagram size={35}/></a>
              </div>  
              </div>
                    <div className='divide-con'>
                <div className='lines'>
                  <div className='diamond'>
                    </div> 
                    </div>
                    </div>
      </div>
  )
}

export default SocialMedia