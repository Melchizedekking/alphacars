
import Hero from "../Hero"
import Testimonial from "../Testimonial"
import {testimony} from  '../assets/assets'
import Header from "../Header"
import Nav from "../Nav"
import Popular from "../component/Popular"
import './Home.css'
import Offers from "../component/Offers"

const Home = () => {
  return (
  <div>
  <Header />
  <Nav />
  <Hero />
  <Testimonial testimony={testimony}/>
  <Popular  />
  <Offers />
  </div>
  )
}

export default Home