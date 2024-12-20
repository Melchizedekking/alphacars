import React, { useContext } from 'react'
import './CartItems.css'
import { ShopContext } from '../Context/ShopContext'

const CartItems = () => {
  const {allProducts, cartItems, removeFromCart} = useContext(ShopContext)
  return (
    <div className='cartitems'>
     <div className="cartitems-format-main">
      <p>Products</p>
      <p>Title</p>
      <p>Price</p>
      <p>Quantity</p>
      <p>Total</p>
      <p>Remove</p>
      </div> 
      <hr />
     {allProducts.map((e,i)=>{
      if(cartItems[e.id]>0){
      return  <div key={i} >
      <div className="cartitems-format cartitems-format-main">
        <img src={e.image} width={'350px'} alt="" className='carticon-product-icon'/>
        <p>{e.name}</p>
        <p>${e.newPrice}</p>
        <button className='cartitems-quantity'>{cartItems[e.id]}</button>
        <p>${e.newPrice*cartItems[e.id]}</p>
        <button onClick={()=>{removeFromCart(e.id)}} className='cartitems-remove-icon' >del</button>
      </div>
      <hr />
    </div>
      }
      return null;
     })}
     <div className="cartitems-down">
      <div className="cartitems-total">
        <h1>cart Totals</h1>
        <div className="">
           <div className="cartitems-total-item">
            <p>Subtotal</p>
            <p>${0}</p>
           </div>
           <hr />
           <div className="cartitems-total-item">
            <p>Shipping Fee</p>
            <p>Free</p>
           </div>
           <hr />
           <div className="cartitems-total-item">
            <h3>Total</h3>
            <h3>${0}</h3> 
           </div>
        </div>
        <button>PROCEED TO CHECKOUT</button>
      </div>
      <div className="cartitems-promocode">
        <p>If you have a promo code, Enter it here.</p>
        <div className="cartitems-promobox">
          <input type="text" placeholder='promo code' />
          <button>Submit</button>
        </div>

      </div>
     </div>
    </div>
  )
}

export default CartItems