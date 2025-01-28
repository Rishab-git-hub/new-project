import React from 'react'
import {useEffect,useState} from 'react'
import './product.css'
import { useDispatch } from 'react-redux'
import {additem} from '../redux/actions/Action'
import { Link } from 'react-router-dom'

const Products = () => {
  const[data,setData]=useState([])
  const[filter,setFilter]=useState(data)

  const dispatch = useDispatch()

   const addProduct = (product) => {
     dispatch(additem(product));
   };
  
  useEffect(()=>{
    async function getProducts (){
      const response = await fetch ("https://fakestoreapi.com/products/");
     setData(await response.clone().json());
     setFilter(await response.json())
     console.log("hello")
}
getProducts();
},[])

function FilterProducts(cat){
  const updatedList=data.filter((item)=>item.category===cat)
  setFilter(updatedList)
}
function ShowProducts(){
  return (
    <>
    <div>
    <button onClick={()=> setFilter(data)}>All</button>
    <button onClick={()=> FilterProducts("men's clothing")}>Men's clothing</button>
    <button onClick={()=> FilterProducts("women's clothing")}>Women's clothing</button>
    <button onClick={()=> FilterProducts("jewelery")}>Jewellery</button>
    <button onClick={()=> FilterProducts("electronics")}>Electronics</button>
    </div>
    <div className="main">
    {filter.map((product)=>{
      return (
        <>
          <div className="card">
            <div className="card-image">
              <img src={product.image}/>
            </div>
            <div className="card-body">
              <p>title:{product.title}</p>
              <p>price:{product.price}</p>
            </div>
            <div className="card-link">
            <Link to={'/product/'+product.id}>Buy Now</Link>
            
            <button 

            className="btn btn-dark m-1"
            onClick={() => addProduct(product)}
              >
                Add to Cart
                </button>
            </div>
      </div>
       
        
        </>
      )
    })}
    </div>  
    </>
  )
}
return(
  <>
  
  <h1>Products</h1>
  <ShowProducts/>
  </>
)
}
export default Products;