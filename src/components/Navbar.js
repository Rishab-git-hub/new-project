import React from 'react'
import {NavLink} from 'react-router-dom'
import './Navbar.css'


const Navbar =()=> {
    return (
        <>

    <div className='main'>
        <div className='logo'>React E-commerce</div>
        <div>
            <ul>
                <li>
                    <NavLink to="/" className={({isActive})=>isActive? "active-link" :""}>Home</NavLink>
                </li>
                
                <li>
                    <NavLink to="/about" className={({isActive})=>isActive? "active-link" :""}>About</NavLink>
                </li>
                
                <li>
                    <NavLink to="/contact" className={({isActive})=>isActive? "active-link" :""}>Contact</NavLink>
                </li>
                
                <li>
                    <NavLink to="/product" className={({isActive})=>isActive? "active-link" :""}>Products</NavLink>
                </li>

            </ul>
    
        </div>
        <div className='cart'>
        <ul>
                <li>
                    <NavLink to="/login" className={({isActive})=>isActive? "active-link" :""}>Login</NavLink>
                </li>
                <li>
                    <NavLink to="/register" className={({isActive})=>isActive? "active-link" :""}>Register</NavLink>
                </li>
                <li>
                    <NavLink to="/cart" className={({isActive})=>isActive? "active-link" :""}>Cart</NavLink>
                </li>
        </ul>
        </div>
        </div>
    </>
)
}
export default Navbar;