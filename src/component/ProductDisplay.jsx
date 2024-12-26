import './ProductDisplay.css'
import star from '../assets/star.svg'
import starFill from '../assets/star-fill.svg'
import { useContext, useEffect, useState } from 'react';
import { ShopContext } from '../Context/ShopContext';
import bugatti  from '../assets/new/1bugattiChiron.webp'
import porsh from '../assets/new/1porch.jpg'
import { useNavigate } from 'react-router-dom';
import { RelatedProducts } from './RelatedProducts';


const ProductDisplay = (props) => {
  const {product} = props;
  const navigate = useNavigate();
  const {addToCart} = useContext(ShopContext)
  const [bigImage, setbigImage] = useState(product.image);
  const [oneBtn, setoneBtn] = useState(true);
  const [twoBtn, settwoBtn] = useState(false);
  const [threeBtn, setthreeBtn] = useState(false);
  const isActive = {borderColor:'red'};
  const isNotActive = {borderColor:'black'};
  const goToCart = () =>{navigate('/cart');};


  
  return (
    <>
    <div  className="productdisplay">
    <img  className='productdisplay-main-img' src={bigImage} alt="" />
      <div className="productdisplay-img-list">
       <div style={oneBtn? isActive : isNotActive} onClick={()=>{setbigImage(product.image);setoneBtn(true);settwoBtn(false);setthreeBtn(false); }} className='productdisplay-img' ><img src={product.image} alt="" /></div>
       <div style={twoBtn? isActive : isNotActive} onClick={()=>{setbigImage(bugatti);setoneBtn(false);settwoBtn(true);setthreeBtn(false)}} className='productdisplay-img' ><img src={bugatti} alt="" /></div>
       <div style={threeBtn? isActive : isNotActive} onClick={()=>{setbigImage(porsh);setoneBtn(false);settwoBtn(false);setthreeBtn(true)}} className='productdisplay-img' ><img src={porsh} alt="" /></div>
       
     </div>        
     </div>
    

<div className="productdisplay-title">
<h2>{product.name}</h2>
<p className="productdisplay-category">
  <span>Category:</span> {product.category}
 </p>
</div>




<div className="productdisplay-stars">
  <img src={starFill} alt="" />
  <img src={starFill} alt="" />
  <img src={starFill} alt="" />
  <img src={starFill} alt="" />
  <img src={star} alt="" />
  <p>(122)</p>
</div>

<div className="productdisplay-prices">
  <div className="productdisplay-price-old">
    ${product.oldPrice}
    </div> 
  <div className="productdisplay-price-new">
  ${product.newPrice}
    </div> 

 </div>

<div className="productdisplay-description">
  {product.description}
 </div>
 <div className='display-button-container'>
 <button className='display-button' onClick={()=>{addToCart(product.id)}}>Add To Cart</button>
 
 <button className='display-button' onClick={goToCart}>Check Out</button>
 
 </div>

  <RelatedProducts product={product} setbigImage={setbigImage} />
 

</>

  )
}

export default ProductDisplay