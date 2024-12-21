import './nav.css'
import logo from './assets/logo.png'
import hamburger from './assets/hamburger.svg'
import { useContext, useState } from 'react'
import closeBtn from './assets/closeBtn.svg'
import { NavLink } from 'react-router-dom'
import profileIcon from './assets/personProfile.svg'
import cartIcon from './assets/cart.svg'
import { ShopContext } from './Context/ShopContext'



const Nav = () => {
  
  const [visible, setVisible] = useState(false)
  const {getTotalItemsInCart} = useContext(ShopContext)


  return (
  <div className='nav-container'>
    <nav className='nav-main-container'>
    <NavLink to={'/'} href=""> <img className='img-logo' src={logo} alt="" /></NavLink>
      
      <ul className='nav-second-section'>
        
        <li><NavLink to={'/'} href="">Home</NavLink></li>
        <li className='car-model-case'><a href="">Car Models</a>
        <div className='carmodel-dropdownmenu'>
          <div className='carmodel-list'>
         <NavLink to={'/mercedes'}>Mercedes</NavLink>
         <NavLink to={'/bmw'}>Bmw</NavLink>
         <NavLink to={'/others'}>Others</NavLink>

          </div>
        </div>
        
        </li>
        <li ><NavLink to={'/about'} href="">About</NavLink></li>
        <li ><NavLink to={'/contact'} href="">Contact</NavLink></li>
      </ul>
       <ul className='nav-third-section'>
       <li><NavLink to={'/login'} href="" className={'login'}><span> Login</span> <img src={profileIcon} width={'20'} alt="" /></NavLink></li>
        <li className='relative'><NavLink to={'/cart'} href=""><img src={cartIcon}  width={'30'} alt="" />
        <p className='cartCounter'>{getTotalItemsInCart === null ? '0': getTotalItemsInCart()}</p>
        </NavLink>
        
        </li>
        <img onClick={()=>setVisible(true)} src={hamburger} alt="" className='mobileMenu'/>
       </ul>

   
    </nav>
    <ul className={`mobileUl ${visible ? 'w-full' : 'w-0' }`}>
      <li onClick={()=>setVisible(false)}><img src={closeBtn} className='close-btn' alt="" /></li>
      <li onClick={()=>setVisible(false)}><NavLink to={'/'} href="">Home</NavLink></li>
      <li onClick={()=>setVisible(false)}><NavLink to={'/about'} href="">About</NavLink></li>
      <li onClick={()=>setVisible(false)}><NavLink to={'/contact'} href="">Contact</NavLink></li>
      <li onClick={()=>setVisible(false)}><NavLink to={'/mercedes'}>Mercedes</NavLink></li> 
      <li onClick={()=>setVisible(false)}> <NavLink to={'/bmw'}>Bmw</NavLink></li>
       <li onClick={()=>setVisible(false)}><NavLink to={'/others'}>Others</NavLink></li>

      
    </ul>
  </div>
  )
}

export default Nav