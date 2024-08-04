import React from 'react';
import './Header.css';


const Header = () => {
  return (
    <div className='header'>
        <div className='header_content'> 
            <h3>Order your Favourite food here !</h3>
            <p>Choose from a diverse menu featuring a delectable array of dishes crafted with the finest ingredients and culinary expertise.</p>
            <a href='#' className='btn'>View menu</a>
        </div>
    </div>
  )
}

export default Header