import React, { useContext } from 'react';
import './FoodDisplay.css';
import { StoreContext } from '../Context/StoreContext';
import FoodItem from '../FoodItem/FoodItem';

const FoodDisplay = ({category}) => {
    const {Foodlist} = useContext(StoreContext)
  return (
    <div className='food_display' id="food_display">
        <h2 className='display_title'>Top Dishes</h2>
        <div className='display_list'>
            { Foodlist.map((item, index) => {
              if(category==="All" || category===item.category){
                 return <FoodItem key={index} id={item.id} name={item.name}  description={item.description} quantity={item.quantity} price={item.price} image={item.image}/>
              }
            })
            }
        </div>
    </div>
  )
}

export default FoodDisplay