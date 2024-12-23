import './Offers.css'
import exclusiveAudi from '../assets/exclusiveAudi.webp' 

const Offers = () => {
  return (
    <div className='offers'>
      <div className="offers-left">
       <h2>Exclusive 
        <br />
        <span> Offers For You </span>
        </h2>
       <p>Only on best sellers products</p>
       <button>Check Now</button>
      </div>
      <div className="offers-right">
       <img className='exclusiveAudi-img' src={exclusiveAudi} alt="" />
      </div>
    </div>
  )
}

export default Offers