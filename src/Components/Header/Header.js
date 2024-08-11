import React from 'react';
import './Header.css';
import { BsArrowDown } from 'react-icons/bs';
import { Link } from 'react-router-dom';



const Header = () => {
  return (
    <div className='header'>
        <div className='header_content'> 
            <h3>Order your  Favourite  food  here</h3>
            <p>Experience the joy of your favorite meals delivered swiftly to your door. Fresh, tasty, and hassle-free.</p>
            <Link to='#' className='btn'>View menu <BsArrowDown/> </Link> 
        </div>
    </div>
  )
}

export default Header