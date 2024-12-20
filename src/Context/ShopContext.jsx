import { createContext, useState } from "react";
import allProducts from "../constants/all_products";

// we could have called this collection context since we are using it in collection.jsx file



export const ShopContext = createContext(null);

function getDefaultCart(){

let cart = allProducts.reduce((acc, product) =>{
  acc[product.id] = 0;
  return acc;
}, {});
return cart;
}





const ShopContextProvider = (props) => {
  
  const [cartItems, setcartItems] = useState(getDefaultCart);
  

  const addToCart = (ItemId) =>{
    setcartItems((prev)=>({...prev,[ItemId]:prev[ItemId]+1}))
    console.log(addToCart)
  }

   const removeFromCart = (ItemId) =>{
      setcartItems((prev)=>({...prev,[ItemId]:prev[ItemId]-1}))

  }
   
  const contextValue = {allProducts, cartItems, addToCart, removeFromCart};  


  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  )

} 


export default ShopContextProvider;