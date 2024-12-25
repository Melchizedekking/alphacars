import './ProductDisplay.css'
import star from '../assets/star.svg'
import starFill from '../assets/star-fill.svg'
import { useContext, useState } from 'react';
import { ShopContext } from '../Context/ShopContext';
import bugatti  from '../assets/new/1bugattiChiron.webp'
import porsh from '../assets/new/1porch.jpg'


const ProductDisplay = (props) => {
  

  const {product} = props;
  const {addToCart} = useContext(ShopContext)
  const [bigImage, setbigImage] = useState(product.image);
  const [oneBtn, setoneBtn] = useState(true);
  const [twoBtn, settwoBtn] = useState(false);
  const [threeBtn, setthreeBtn] = useState(false);
  const isActive = {borderColor:'red'};
  const isNotActive = {borderColor:'black'};

  
  return (
    <>
    <div className="productdisplay">
    <img className='productdisplay-main-img' src={bigImage} alt="" />
      <div className="productdisplay-img-list">
       <div style={oneBtn? isActive : isNotActive} onClick={()=>{setbigImage(product.image);setoneBtn(true);settwoBtn(false);setthreeBtn(false)}} className='productdisplay-img' ><img src={product.image} alt="" /></div>
       <div style={twoBtn? isActive : isNotActive} onClick={()=>{setbigImage(bugatti);setoneBtn(false);settwoBtn(true);setthreeBtn(false)}} className='productdisplay-img' ><img src={bugatti} alt="" /></div>
       <div style={threeBtn? isActive : isNotActive} onClick={()=>{setbigImage(porsh);setoneBtn(false);settwoBtn(false);setthreeBtn(true)}} className='productdisplay-img' ><img src={porsh} alt="" /></div>
       
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
    ${product.oldPrice}
    </div> 
  <div className="productdisplay-right-price-new">
  ${product.newPrice}
    </div> 

 </div>
 
 

 <p className="productdisplay-right-category">
  <span>Category:</span> {product.category}
 </p>


</div>
<div className="productdisplay-right-description">
  {product.description}
 </div>
 <button onClick={()=>{addToCart(product.id)}}>Add To Cart</button>
</>

  )
}

export default ProductDisplay