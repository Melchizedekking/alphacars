
import Hero from "../Hero"
import Testimonial from "../Testimonial"
import {testimony} from  '../assets/assets'
import Header from "../Header"
import Nav from "../Nav"
import Popular from "../component/Popular"
import './Home.css'
import Offers from "../component/Offers"
import NewCollections from "../component/NewCollections"
import NewsLetter from "../component/NewsLetter"

const Home = () => {
  return (
  <div>
  <Header />
  <Nav />
  <Hero />
  <Testimonial testimony={testimony}/>
  <Popular  />
  <Offers />
  <NewCollections />
  <NewsLetter />
  </div>
  )
}

export default Home