import { Link } from 'react-router-dom'
import './Iteam.css'
import { useContext } from 'react'
import { ShopContext } from '../Context/ShopContext'
 
 const Iteam = (props) => {
  const {addToCart} = useContext(ShopContext)
   return (
    <>
     

     <div className='item' key={props.id}>
    <Link to={`/product/${props.id}`}>
    <img onClick={window.scrollTo(0,0)} src={props.image} alt="" className='item-img' />
     </Link>
      <h3>{props.name}</h3>
      <p>{props.description}</p>
      <div className='item-prices'>
        <div className='item-price-new'>${props.newPrice}</div>
        <div className='item-price-old'>${props.oldPrice}</div>
      </div>
      <div className='item-buttons'>
        <button onClick={()=>{addToCart(props.id)}}>Add to cart</button>
        
      </div>


     </div>
      
     </>
   )
 }
 
 export default Iteam