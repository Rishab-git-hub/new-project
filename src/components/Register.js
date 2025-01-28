import React from 'react'
import { NavLink } from 'react-router-dom'
const Register = () => {
  return (
    <div>
            <h1 className='text-center'>Register</h1>
        <form>

        <label>Name</label><br></br>
        <input type="text" placeholder="enter your Name"/><br></br>

        <label>Email address</label><br></br>
        <input type="text" placeholder="name@example.com"/><br></br>
        <label>password</label><br></br>
        <input type="text"placeholder="password"/><br></br>
        <p>already have an account ? <NavLink to="/login">Login</NavLink></p>
        </form>
        </div>
  )
}

export default Register