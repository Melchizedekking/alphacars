import './NewsLetter.css'

const NewsLetter = () => {
  return (
    <div className='newsletter'>
     <h2>Get Exclusive Offers on Your Email</h2>
     <p>Subscribe to our newsletter and stay updated</p>
     <div>
      <input type="email" placeholder="Your Email id" />
      <button>Subscribe</button>
     </div>
    </div>
  )
}

export default NewsLetter