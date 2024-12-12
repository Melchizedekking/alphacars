import "./App.css";


import Nav from "./Nav";
import { Routes,Route } from 'react-router-dom'
import { Home,Collection,About,Product,Cart,Login,PlaceOrder,Orders,Contact} from './Pages/index'


function App() {
  return <>
  <main className="position">
   
 
 
  <Routes>
<Route path='/' element={<Home/>} />
<Route path='/about' element={<About/>} />
<Route path='/contact' element={<Contact/>} />
<Route path='/mercedes' element={<Collection category="mercedes"/>}/> 
<Route path='/bmw' element={<Collection category="bmw"/>}/> 
<Route path='/others' element={<Collection category="others"/>}/> 
<Route path='/product' element={<Product/>}> 
<Route path=':/productId' element={<Product/>}/>
</Route>
<Route path='/cart' element={<Cart/>} />
<Route path='/login' element={<Login/>} />
<Route path='/placeorder' element={<PlaceOrder/>} />
<Route path='/orders' element={<Orders/>} />
</Routes>
  
  
  </main>
  </>;
}

export default App;


