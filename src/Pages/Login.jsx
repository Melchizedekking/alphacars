import Header from '../Header'
import Nav from '../Nav'
import './Css/login.css'


const Login = () => {
  return (
    <>
    <Header />
    <Nav />
    <div className='loginsignup'>
      <div className="loginsignup-container">
       <h1>Sign Up</h1>
       <div className="loginsignup-fields">
        <input type="text" placeholder='Your Name' />
        <input type="email" placeholder='Email Address' />
        <input type="password" placeholder='Password' />
       </div>
       <button>Continue</button>
       <p className='loginsignup-login'>Already have an account? <span>Login here</span></p>
       <input type="checkbox" name='' id='' />
       <p className='loginsignup-agree'>By continuing, I agree to the terms of use & privacy policy.</p>
      </div>
    </div>
    </>
  )
}

export default Login