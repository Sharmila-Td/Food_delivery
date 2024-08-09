import React, { useContext } from 'react';
import './PlaceOrder.css';
import { StoreContext } from '../Context/StoreContext';

const PlaceOrder = () => {
  const {getTotalCartAmount} = useContext(StoreContext) 
  return (
     <form className='place_order'>
          <div className='place_left'>
              <p className='place_title'>Delivery Information</p>
              <div className='multifield'>
                  <input type='text' placeholder='First Name'/>
                  <input type='text' placeholder='Last Name'/>
              </div>
              <input type='text' placeholder='Email'/>
              <input type='text' placeholder='Street'/>
              <div className='multifield'>
                  <input type='text' placeholder='city'/>
                  <input type='text' placeholder='State'/>
              </div>
              <div className='multifield'>
                  <input type='text' placeholder='Zip code'/>
                  <input type='text' placeholder='Country'/>
              </div>
              <input type='text' placeholder='Phone'/>
          </div>
          <div className='place_right'>
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
                        <p>{2}</p>
                    </div>
                    <hr/>
                    <div className='cart_details'>
                        <b>Total</b>
                        <b>{getTotalCartAmount()+2}</b>
                    </div>
                </div>
                <button className='btn'>Payment</button>
            </div>
          </div>
     </form>
  )
}

export default PlaceOrder;