import React, { useContext } from 'react';
import './Cart.css';
import { StoreContext } from '../Context/StoreContext';
import { useNavigate } from 'react-router-dom';

const Cart = () => {
  const {cartItems, Foodlist, removeFromCart, getTotalCartAmount} = useContext(StoreContext);
  const navigate = useNavigate();
  return (
    <div className='cart'>
        <div className='cart_items'>
            <div className='cart_items-title'>
                <p>Items</p>
                <p>Title</p>
                <p>Price</p>
                <p>Quantity</p>
                <p>Total</p>
                <p>Remove</p>
            </div>
            <br/>
            <hr/>
            {Foodlist.map((item,index)=>{
                if(cartItems[item.id]>0){
                    return(
                        <div>
                        <div className='cart_items-title cart-items-item'>
                            <img src={item.image} alt=''/>
                            <p>{item.name}</p>
                            <p>&#8377;{item.price}</p>
                            <p>{cartItems[item.id]}</p>
                            <p>&#8377;{item.price*cartItems[item.id]}</p>
                            <p className='cross' onClick={()=>{removeFromCart(item.id)}}>x</p>
                        </div>
                        <hr/>
                        </div>
                    )
                }
            })}
        </div>
        <div className='cart_bottom'>
            <div className='cart_total'>
                <h2>Cart Total</h2>
                <div>
                    <div className='cart_details'>
                        <p>subtotal</p>
                        <p>{getTotalCartAmount()}</p>
                    </div>
                    <hr/>
                    <div className='cart_details'>
                        <p>Delivery Fee</p>
                        <p>{getTotalCartAmount()===0?0:2}</p>
                    </div>
                    <hr/>
                    <div className='cart_details'>
                        <b>Total</b>
                        <b>{getTotalCartAmount()===0?0:getTotalCartAmount()+2}</b>
                    </div>
                </div>
                <button className='btn' onClick={()=>navigate('/order')}>PROCEED TO CHECKOUT</button>
            </div>
            <div className='cart_promocode'>
                <div>
                    <p>If you have a promo code, Enter it here</p>
                    <div className='cart_proinput'>
                        <input type='text' placeholder='promo code'/>
                        <button>Submit</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Cart