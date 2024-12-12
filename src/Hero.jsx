import './hero.css'
import urus from './assets/urus.png'

const Hero = () => {
  return (
    <div className='hero-section'>
      <div className="hero-section-left">
        <h3>Exclusive Cars Collection</h3>
        <h1>  
          Elite <span className='title-1'>Cars</span> 
          <br />
           <span className='title-2'>Redefining Luxury</span> 
        </h1>
        <button></button>
        
        <p></p>
      </div>
      <div className='hero-image-container'>
      <img src={urus} alt="" width={900} />
      </div>
    </div>
  )
}

export default Hero