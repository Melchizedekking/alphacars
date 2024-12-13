import './NewCollections.css'
import newCollection from '../constants/newcollection'
import Iteam from './Iteam'

const NewCollections = () => {
  return (
    <div className='new-collections'>
      <h2>Latest Models</h2>
      <hr />
      <div className="collections">
        {newCollection.map((item, i) => {
          return <Iteam key={i} id={item.id} name={item.name} image={item.image} description={item.description} newPrice={item.newPrice} oldPrice={item.oldPrice} />
        })} 
      </div>
    </div>
  )
}

export default NewCollections