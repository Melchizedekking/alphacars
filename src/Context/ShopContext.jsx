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
    
  }

  const getTotalCartAmount = () => 
    Object.entries(cartItems)
        .reduce((total, [itemId, quantity]) => {
            if (quantity > 0) {
                const itemInfo = allProducts.find(product => product.id === Number(itemId));
                if (itemInfo) {
                    return total + itemInfo.newPrice * quantity;
                }
            }
            return total;
        }, 0);

    const getTotalItemsInCart = () => 
           Object.values(cartItems).reduce((totalinCart, quantity) =>{{ return totalinCart + quantity}
           return totalinCart
         },0);
           
      
      console.log(getTotalItemsInCart)
          


   const removeFromCart = (ItemId) =>{
      setcartItems((prev)=>({...prev,[ItemId]:prev[ItemId]-1}))

  }
   
  const contextValue = {getTotalItemsInCart, getTotalCartAmount, allProducts, cartItems, addToCart, removeFromCart};  


  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  )

} 


export default ShopContextProvider;