import './ProductDisplay.css'
import star from '../assets/star.svg'
import starFill from '../assets/star-fill.svg'
import { useContext } from 'react';
import { ShopContext } from '../Context/ShopContext';


const ProductDisplay = (props) => {

  const {product} = props;
  const {addToCart} = useContext(ShopContext)
  return (
    <div className="productdisplay">
     <div className="productdisplay-left">
      <div className="productdisplay-img-list">
       <img src={product.image} alt="" />
       <img src={product.image} alt="" />
       <img src={product.image} alt="" />
       <img src={product.image} alt="" />
     </div>
    
     <div className="productdisplay-img">
     <img className='productdisplay-main-img' src={product.image} alt="" />
     </div>
     </div>
     <div className="productdisplay-right">
      <h2>{product.name}</h2>
      <div className="productdisplay-right-stars">
        <img src={starFill} alt="" />
        <img src={starFill} alt="" />
        <img src={starFill} alt="" />
        <img src={starFill} alt="" />
        <img src={star} alt="" />
        <p>(122)</p>
      </div>
       <div className="productdisplay-right-prices">
        <div className="productdisplay-right-price-old">
          {product.oldPrice}
          </div> 
        <div className="productdisplay-right-price-new">
        {product.newPrice}
          </div> 

       </div>
       <div className="productdisplay-right-description">
        {product.description}
       </div>
       <div className="productdisplay-right-color">
        <h2>Select Colour</h2>
       
       <div className="productdisplay-right-colors">
        <div>Black</div>
        <div>Blue</div>
        <div>Silver</div>
        <div>White</div>
        <div>Green</div>
        
       </div>
       </div>
       <button onClick={()=>{addToCart(product.id)}}>Add To Cart</button>
       <p className="productdisplay-right-category">
        <span>Category:</span> {product.category}
       </p>
       <p className="productdisplay-right-category">
        <span>Tag:</span> Modern, Latest
       </p>

    </div>
    </div>
  )
}

export default ProductDisplay