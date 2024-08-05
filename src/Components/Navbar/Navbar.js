import React, { useState } from 'react';
import './Navbar.css';
import logo from '../../Images/nav_logo.png';
import cart from '../../Images/shopping-cart.png'


const Navbar = () => {
  const [menu, setMenu] = useState('home')
  return (
   <div className='navbar'>
    <div className='logo'>
    <img src={logo} alt='logo' width={50} height={50}/> 
    <div className='nav_line'></div>
    <div className='nav_title'>Anu</div>
    </div>

      <ul className='nav_menubar'>
        <li>
            <a href='#' className={menu==='home'?'active':''} onClick={()=>setMenu("home")}>
                Home
            </a>
        </li>
        <li>
            <a href='#' className={menu==='menu'?'active':'' } onClick={()=>setMenu("menu")}>
                Menu
            </a>
        </li>
        <li>
            <a href='#'className={menu==='mobile-app'?'active':''} onClick={()=>setMenu("mobile-app")}>
                Mobile-app
            </a>
        </li>
        <li>
            <a href='#' className={menu==='contact-us'?'active':''} onClick={()=>setMenu("contact-us")}>
                Contact us
            </a>
        </li>
      </ul>
      
      <div className='nav_btns'>
          <div className='nav_cart'>
              <img src={cart} alt='cart' width={30}/>
          </div>
          <a href='#' className='btn '> Sign  In </a>
      </div>
   </div>
  )
}

export default Navbar;