import './BreadCrum.css'
import rightArrow from '../assets/rightArrow.svg'

   const BreadCrum = (props) => {
    //  const {product} = props;
     return (
       <div className='breadcrum'>
         Home <img src={rightArrow} alt="" /> Shop <img src={rightArrow} alt="" /> {props.category} <img src={rightArrow} alt="" /> {props.name} 
       </div>  
     )
   }
   
   export default BreadCrum