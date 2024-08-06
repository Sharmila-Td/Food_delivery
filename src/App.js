import { Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import Home from './Components/Home/Home';
import Cart from './Components/Cart/Cart';
import PlaceOrder from './Components/PlaceOrder/PlaceOrder';
import Footer from './Components/Footer/Footer';
import { useState } from 'react';
import Login from './Components/Login/Login';

function App() {
  const [showLogin, setShowLogin] = useState(false);
  return (
    <>
    {showLogin ? <Login setShowLogin={setShowLogin}/> : <></>}
    <div className="App">
       <Navbar setShowLogin={setShowLogin}/>
       <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/cart' element={<Cart/>}/>
          <Route path='/order' element={<PlaceOrder/>}/>
       </Routes>
    </div>
      <Footer/>
    </>
  );
}

export default App;
