import logo from './logo.svg';
import './App.css';
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Home from './components/Home.js';
import About from './components/About.js';
import Products from './components/Products.js';
import Contact from './components/Contact.js';
import Navbar from './components/Navbar.js';
import Login from './components/Login.js';
import Register from './components/Register.js';
import Cart from './components/Cart.js';
import Product from './components/Product.js'
import Footer from './components/Footer.js'
function App() {

  const router =createBrowserRouter([
    {
      path:'/login',
      element:<div>
        <Navbar/>
        <Login/>
      </div>
     },
    {
      path:'/',
      element:<div>
        <Navbar/>
        <Home/>
        <Products/>
      </div>
    },
   { path:'/about',
    element:<div>
      <Navbar/>
      <About/>
    </div>
   },
   {
    path:'/product',
    element:<div>
      <Navbar/>
      <Products/>
    </div>
   },
   {
    path:'/product/:id',
    element:<div>
      <Navbar/>
      <Product/>
      <Footer/>
    </div>
   },
   {
    path:'/contact',
    element:<div>
      <Navbar/>
      <Contact/>
    </div>
   },
   {
    path:'/register',
    element:<div>
      <Navbar/>
      <Register/>
    </div>
   },
   {
    path:'/cart',
    element:<div>
      <Navbar/>
      <Cart/>
    </div>
   },
  
  ])
  return (
   <>
   <RouterProvider router={router}/>
   </>
  );

}
export default App;
