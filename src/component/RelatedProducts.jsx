import './RelatedProducts.css'
import related from '../constants/related' 
import Iteam from './Iteam'
import { useContext } from 'react';
import { ShopContext } from '../Context/ShopContext';

export const RelatedProducts = (props) => {
  const {product} = props;
  const {allProducts} = useContext(ShopContext);
  const filteredData = allProducts.filter(item =>product.category===item.category && product.id !== item.id)
  const limitedProducts = filteredData.slice(0, 5);
  console.log(limitedProducts);
 
  
  return (
    <div className='relatedproducts'>
      <h1>Related Products</h1>
      <hr />
      <div className="relatedproducts-item">
      {limitedProducts.map(( item, i) => {
         
          return <Iteam key={i} id={item.id} name={item.name} image={item.image} description={item.description} newPrice={item.newPrice} oldPrice={item.oldPrice}  />
      })}
      </div>


    </div>
  )
}
