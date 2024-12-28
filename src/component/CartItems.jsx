import React, { useContext } from 'react'
import './CartItems.css'
import { ShopContext } from '../Context/ShopContext'
import minus from '../assets/fileminus.svg'
import plus from '../assets/fileplus.svg'


const CartItems = () => {
  const {addToCart, getTotalCartAmount, allProducts, cartItems, removeFromCart} = useContext(ShopContext)
  return (
    <>
    <div className='cartItems-container'>
    
      
     {allProducts.map((e,i)=>{
      if(cartItems[e.id]>0){
      return  <div key={i} >
      <div className="cartitems">
        <img src={e.image} alt="" className='cartitemsBigImg'/>
        <div>
        <div className='cartItemsDetails'>
        <p className='cartitemsTitle'>{e.name}</p>
        <p className='cartitemsPrice'>${e.newPrice}</p>
        </div>
        <div className='cartitemsIcons' >
        <img  onClick={()=>{addToCart(e.id)}} className='cartItemIcon'  src={plus} alt="" />
        
        <p>{cartItems[e.id]}</p>
        <img  onClick={()=>{removeFromCart(e.id)}} className='cartItemIcon' src={minus} alt="" />
        </div>
        
        <p className='itemAmount'>Total Amount: ${e.newPrice*cartItems[e.id]}</p>
        </div>
      </div>
      
    </div>
      }
      return null;
     })}
     </div>

    
      <div className="cartitems-total">
        <h1 className='cartitems-total-title'>Cart Totals</h1>
        
           <div className="cartitems-total-item">
            <p>Subtotal</p>
            <p>${getTotalCartAmount()}</p>
           </div>
           <hr />
           <div className="cartitems-total-item">
            <p>Shipping Fee</p>
            <p>Free</p>
           </div>
           <hr />
           <div className="cartitems-total-item">
            <h3>Total</h3>
            <h3>${getTotalCartAmount()}</h3> 
           </div>
       
        <button className='cartitems-total-button'>PROCEED TO CHECKOUT</button>
      </div>
     
     
    </>
  )
}

export default CartItems