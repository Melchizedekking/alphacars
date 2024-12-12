import './Popular.css'
import popularCarsData from '../constants/index'
import Iteam from './Iteam'
const Popular = () => {
  return (
    <div className='popular'>
      <h1>Trending Cars</h1>
      <hr />
      <div className="popular-item">
      {popularCarsData.map((item,i) => {
          return (
        
          <Iteam key={i} id={item.id} name={item.name} image={item.image} description={item.description} newPrice={item.newPrice} oldPrice={item.oldPrice} />
        )
      }) }
      </div>
       
    </div>
  )
}

export default Popular