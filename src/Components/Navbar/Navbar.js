import React, { useState } from 'react';
import './Navbar.css';
import logo from '../../Images/nav_logo.png';
import cart from '../../Images/shopping-cart.png'
import { Link } from 'react-router-dom';

const Navbar = ({setShowLogin}) => {
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
            <Link to='/' className={menu==='home'?'active':''} onClick={()=>setMenu("home")}>
                Home
            </Link>
        </li>
        <li>
            <Link to='#' className={menu==='menu'?'active':'' } onClick={()=>setMenu("menu")}>
                Menu
            </Link>
        </li>
        <li>
            <Link to='#'className={menu==='mobile-app'?'active':''} onClick={()=>setMenu("mobile-app")}>
                Mobile-app
            </Link>
        </li>
        <li>
            <Link to='#' className={menu==='contact-us'?'active':''} onClick={()=>setMenu("contact-us")}>
                Contact us
            </Link>
        </li>
      </ul>
      
      <div className='nav_btns'>
          <div className='nav_cart'>
              <img src={cart} alt='cart'/>
          </div>
          <Link to='#' className='btn' onClick={()=>{setShowLogin(true)}}> Sign  In </Link>
      </div>
   </div>
  )
}

export default Navbar;