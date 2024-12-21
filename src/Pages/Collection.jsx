import { useContext } from 'react'
import './Css/Collection.css'
import { ShopContext } from '../Context/ShopContext'
import Iteam from '../component/Iteam'
import dropdown from '../assets/dropdown.svg'

const collection = (props) => {
  console.log(props);

  // we import the allproduct using context.
  const {allProducts} = useContext(ShopContext)
  return (
    <>
    
    
    <div className='shop-category'>
      <img className='shopcategory-banner' src="" alt="" />
      <div className="shopcategory-indexSort">
        <p>
          <span>Showing 1-12</span> out of 36 products
          </p>
          <div className="shopcategory-sort">
            sort by <img src={dropdown} alt="" />
          </div>
      </div>
      <div className="shopcategory-products">
        {allProducts.map(( item, i) => {
         if (props.category===item.category) {
          return <Iteam key={i} id={item.id} name={item.name} image={item.image} description={item.description} newPrice={item.newPrice} oldPrice={item.oldPrice} />
         } else{
          return (null);
         }
        })}
      </div>
       <div className="shopcategory-loadmore" >
        Explore More  

       </div>

    </div>
    </>
  )
}

export default collection