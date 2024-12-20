import './Footer.css'
import facebook from '../assets/facebook.svg'
import linkedin from '../assets/linkedin.svg'
import twitter from '../assets/twitter.svg'
import logo from '../assets/logo.png'


const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div className='footer'>
      <div className="footer-logo">
        <img src='' alt=""  />
        <p>Alpha</p>
      </div>
       <ul className="footer-links">
        <li>Company</li>
        <li>Products</li>
        <li>Offices</li>
        <li>About</li>
        <li>Contact</li>
       </ul>
       <div className="footer-social-icon">
        <div className="footer-icons-container"><img src={facebook} width={24} height={24} alt="" />

        </div>
        <div className="footer-icons-container"><img src={twitter} width={24} height={24} alt="" />

        </div>
        <div className="footer-icons-container"><img src={linkedin} width={24} height={24} alt="" />

        </div>

       </div>
       <div className="footer-copyright">
         <hr />
         <p>Copyright @ {currentYear} - All Right Reserved.</p>
       </div>

    </div>
  )
}

export default Footer