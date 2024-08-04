import React from 'react';
import './Navbar.css';
import logo from '../../Images/nav_logo.png';
import cart from '../../Images/shopping-cart.png'


const Navbar = () => {
  return (
   <div className='navbar'>
    <div className='logo'>
    <img src={logo} alt='logo' width={50} height={50}/> 
    <div className='nav_line'></div>
    <div className='nav_title'>Anu</div>
    </div>

      <ul className='nav_menubar'>
        <li>
          <a href='#'>Home</a>
        </li>
        <li>
          <a href='#'>Menu</a>
        </li>
        <li>
          <a href='#'>Mobile-app</a>
        </li>
        <li>
          <a href='#'>Contact us</a>
        </li>
      </ul>
      
      <div className='nav_btns'>
          <div className='nav_cart'>
              <img src={cart} alt='cart' width={30}/>
          </div>
          <a href='#' className='btn '> Sign In </a>
      </div>
   </div>
  )
}

export default Navbar;