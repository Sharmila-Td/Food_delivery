import React from 'react';
import './Menu.css'
import Menulist from '../List/Menulist';

const Menu = ({category, setCategory}) => {
  return (
     <div className='menu' id='menu'>
          <h2 className='menu_title'>Explore Menu</h2>
          <p className='menu_subtitle'>Choose from a diverse menu featuring a delectable array of dishes crafted with the finest ingredients and culinary expertise. </p>
          <div className='menu_content'>
                {
                  Menulist.map((item,index)=>{
                    return (
                        <div key={index} className='menu_item' onClick={()=>setCategory(pre => pre===item.menuName?"All":item.menuName)}>
                            <img className={category===item.menuName?"active":''} src={item.menuImg} alt=''/>
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