import React,{ useEffect,useState} from 'react'
import{Link,useParams, useSearchparams} from 'react-router-dom'
import Navbar from './Navbar'

import Marquee from "react-fast-marquee";
import {useDispatch} from "react-redux"
import {additem} from "../redux/actions/Action";

const Product = () => {
    const{id}=useParams();
  const[product,setProduct]=useState([]);
  const[similarProducts,setSimilarProducts]=useState([]);
  const[loading,setLoading]=useState(true);
  
  
  const dispatch = useDispatch();

  const addProduct = (product) => {
    dispatch(additem(product));
  };

  useEffect(()=>{
    async function getProduct(){
        const response= await fetch(`https://fakestorageapi.com/products/${id}`);
        const data=await response.json();
        setProduct(data);
        setLoading(false);
        const response2=await fetch(`https://fakestorageapi.com/products/Category/${data.category}`);
        const data2=await response2.json();
        setSimilarProducts(data2)
        setLoading(false);
    };
    getProduct();

  },[id])

  if(loading){
    return <p>loading........</p>

  }

  const Showproduct=()=>{
    return(
        <>
        <div>
            <img src={product.image} width={400} height={400}/>
            <h4>category:{product.category}</h4>
            <h4>title:{product.tritle}</h4>
            <p>{product.rating && product.rating.rate}{""}</p>
            <p>price:{product.price}</p>
            <p>description:{product.description}</p>

            <button>
                onClick={()=> addProduct(product)}
            Add to cart
            </button>

            <Link to="/cart">Go to Cart</Link>
        </div>
            
        </>
    )
  }

  const ShowsimilarProducts=()=>{
    return(
    <>
    <div>
        {similarProducts.map((item) => {
          return(
            <>

            <div>
            <img src={item.image} width={300} height={300}/>
            <h5>{item.title}</h5>
            <Link to={'/product/'+item.id}>Buy Now</Link>
            
            <button 

            className="btn btn-dark m-1"
            onClick={() => addProduct(item)}
              >
                Add to Cart
                </button>
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
<Navbar/>
<div><Showproduct/></div>
<div>
  <h2>You may also like</h2>
  <Marquee
    pauseOnHover ={true}
    pauseOnClick ={true}
    speed ={50}
    >
      <ShowsimilarProducts/>

  </Marquee>
</div>

</>
)
}

export default Product