import { Link } from 'react-router-dom'
import './Iteam.css'
 
 const Iteam = (props) => {
   return (
    <>
     

     <div className='item' key={props.id}>
    <Link to={`/product/${props.id}`}>
    <img onClick={window.scrollTo(0,0)} src={props.image} alt="" width={'350px'} />
     </Link>
      <h3>{props.name}</h3>
      <p>{props.description}</p>
      <div className='item-prices'>
        <div className='item-price-new'>${props.newPrice}</div>
        <div className='item-price-old'>${props.oldPrice}</div>
      </div>


     </div>
      
     </>
   )
 }
 
 export default Iteam