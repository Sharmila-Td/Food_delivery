import React from 'react';
import './Menu.css'
import { menuList } from './Menulist';

const Menu = () => {
  return (
     <div className='menu'>
          <h2 className='menu_title'>Explore Menu</h2>
          <p className='menu_subtitle'>Choose from a diverse menu featuring a delectable array of dishes crafted with the finest ingredients and culinary expertise. </p>
          <div className='menu_content'>
                {
                  menuList.map((item,index)=>{
                    return (
                        <div key={index} className='menu_item'>
                            <img src={item.menuImg} alt=''/>
                            <p>{item.menuName}</p>
                        </div>
                    )
                  })
                }
          </div>
          <hr/>
     </div>
  )
}

export default Menu