import React from 'react';
import './Header.css';
import { BsArrowDown } from 'react-icons/bs';



const Header = () => {
  return (
    <div className='header'>
        <div className='header_content'> 
            <h3>Order <br/> your <br/>  Favourite <br/> food <br/> here</h3>
            <a href='#' className='btn'>View menu <BsArrowDown/> </a> 
        </div>
    </div>
  )
}

export default Header