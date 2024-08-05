import React from 'react';
import './Footer.css';
import { BiEnvelope, BiPhone, BiAlarm, BiLocationPlus } from 'react-icons/bi';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa6';

const Footer = () => {
  return (
    <div className='footer' id='footer'>
        <div className='footer_content_one'>
            <div className='footer_left'>
                  <h3> Food Quality Description </h3>
                  <p>hi hello its food quality description section it would most important section that woukd </p>
                  <p> Timing  24 x 7  <BiAlarm/> </p>
                  <ul className='footer_social-icon'>
                    <li> <FaFacebook /> </li>
                    <li> <FaTwitter/> </li>
                    <li> <FaInstagram/> </li>
                  </ul>
            </div>
            <div className='footer_center'>
                  <h3>Resources</h3>
                  <ul>
                    <li>Shipping Policy</li>
                    <li>Privacy Policy</li>
                    <li>Blogs</li>
                    <li>Sitemap</li>
                  </ul>
            </div>
            <div className='footer_right'>
                <h3>Contact us</h3>
                <ul>
                  <li> <BiEnvelope/>  anufoods@gmail.com </li>
                  <li> <BiPhone/>  +91 785 653 514 </li>
                  <li>  < BiLocationPlus/> No 15, Anna Nagar <br/>
                  Chennai - 987456 </li>
                </ul>
            </div>
        </div>
        <hr/>
       <p className='footer_copyright'> Copyright 2024 &copy; Anu.com - All Rights Reserved</p>
        
    </div>
  )
}

export default Footer