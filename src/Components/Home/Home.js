import React from 'react';
import './Home.css';
import { useState } from 'react';
import Header from '../Header/Header';
import Menu from '../Menu/Menu';

const Home = () => {
  const [category, setCategory] = useState("All")
  return (
    <div>
       <Header/>
       <Menu category={category} setCategory={setCategory}/>
    </div>
     
      
  )
}

export default Home;