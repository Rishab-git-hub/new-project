import React from 'react'
import {NavLink} from 'react-router-dom'
const Login = () => {
  return (
    <div>
          <h1 className='text-center'>Login</h1>
      <form>

        <label>Email address</label><br></br>
       <input type="text" placeholder="name@example.com"/><br></br>
       <label>password</label><br></br>
       <input type="text"placeholder="password"/><br></br>
       <p>New Here ? <NavLink to="/register">Register</NavLink></p>
      </form>
    </div>
  )
}

export default Login