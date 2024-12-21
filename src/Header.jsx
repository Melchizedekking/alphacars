import React from 'react'
import './header.css'
import facebook from '../src/assets/facebook.svg'
import twitter from '../src/assets/twitter.svg'  
import linkedin from '../src/assets/linkedin.svg'  


const Header = () => {

  return (
    <section>
      
      <div className='site-top'>
      
        <div className='first-container'>
          <p>Phone: +449034206331</p>
          <p>Email: john.iwudibie@gmail.com</p>
          </div>
          <div className='second-container'>
           <a href="" className='flex'> <img 
            src={facebook}
            alt="" 
            width={'20px'}
            height={'auto'}
            className='margin-right z-index'
            /></a>
            <a href="" className='flex'><img 
            src={twitter}
            alt="" 
            width={'20px'}
            height={'auto'}
            className=''
            /></a>
            <a href="" className='flex'><img 
            src={linkedin}
            alt="" 
            width={'20px'}
            height={'auto'}
            className=''
            /></a>
          </div>
         
      </div>
      
    </section>
  )
}

export default Header


// install es7 react/redux/react-native by rodrigovallades then use the shortcut "rafce" to generate the template.