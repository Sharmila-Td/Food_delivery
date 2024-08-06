import React, { useState } from 'react';
import './Login.css';
import { FiX } from 'react-icons/fi';
import { Link } from 'react-router-dom';

const Login = ({setShowLogin}) => {
  const [current, setCurrent] = useState("Login")
  return (
    <div className='login_container'>
        <form className='login_form'>
              <div className="login_title">
                <h2>{current}</h2>
                <div className='login_crossicon' onClick={()=>setShowLogin(false)}> <FiX/> </div>
              </div>
              <div className="login_input">
                { current==="Login" ? <></> :<input type='text' placeholder='Enter name' required /> } 
                  <input type='email' placeholder='Enter email' required />
                  <input type='password' placeholder='Enter password' required />
              </div>
              <div className='login_condition'>
                  <input type='checkbox' required/>
                  <p>By Contining i agree for this terms and condition for policy</p>
              </div>
              
              <Link to='' className='btn'> {current==="Sign Up" ? "Create account" : "Login"} </Link>
              {current==="Login" ?
              <p>Create a new Account ? <span onClick={()=>setCurrent("Sign Up")}>Click here</span> </p> :
              <p>Already have a account ? <span onClick={()=>setCurrent("Login")}>Login</span> </p> }
        </form>
    </div>
  )
}

export default Login