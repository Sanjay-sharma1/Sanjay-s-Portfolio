import React from 'react';
import './SocialContact.css';
import { SocialData } from '../../data/Social';

const SocialContact = () => {

  const data = SocialData
  return (
    <div className='social-contact'>
      {data.map((item)=>{
        return (
          <a href={item.link}>
            <div className="social-contact-div">
              <img src={item.icon} alt="icon" className='social-icon'/>
            </div>
          </a>
        )
      })}
    </div>
  )
}

export default SocialContact;
