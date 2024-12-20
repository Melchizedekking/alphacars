import './RelatedProducts.css'
import related from '../constants/related' 
import Iteam from './Iteam'

export const RelatedProducts = () => {
  return (
    <div className='relatedproducts'>
      <h1>Related Products</h1>
      <hr />
      <div className="relatedproducts-item">
        {related.map((item, i)=>{
          return <Iteam key={i} id={item.id} name={item.name} image={item.image} description={item.description} newPrice={item.newPrice} oldPrice={item.oldPrice}/>
        })}
      </div>


    </div>
  )
}
