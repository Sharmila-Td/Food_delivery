import React, { useContext } from 'react';
import './FoodItem.css';
import { BsStarFill, BsPlus } from 'react-icons/bs';
import { BiMinus } from 'react-icons/bi';
import { StoreContext } from '../Context/StoreContext';


const FoodItem = ({id, name, price,  description, quantity, image}) => {

  const {cartItems, addToCart, removeFromCart} = useContext(StoreContext)
  return (
    <div className='food_item'>
        <div className='food_item-img'>
            <img src={image}/>
            { !cartItems[id] ?
              <BsPlus className='food_icon add' onClick={()=>addToCart(id)}/> :
              <div className='food_item-counter'>
                <BiMinus className="food_icon sub-one" onClick={()=>removeFromCart(id)}/>
                <p>{cartItems[id]}</p>
                  <BsPlus className='food_icon add-one' onClick={()=>addToCart(id)}/>
              </div>
            }
        </div>
        <div className='food_item-container'>
          <div className='food_item-content'>
          <p>{name}</p>
          <div className='food_item-rating'>
          <BsStarFill className='color-fill'/>  <BsStarFill className='color-fill'/> <BsStarFill  className='color-fill'/> <BsStarFill  className='color-fill'/> <BsStarFill className='color-fill'/> 
          </div>  
          </div>
            
        </div>
        <p className='food_item-desc'> { description}  </p>
        <p className='food_item-quantity'> {quantity} </p>
        <p className='food_item-price'> &#8377; {price}</p>
    </div>
  )
}

export default FoodItem