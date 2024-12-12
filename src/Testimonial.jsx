import './Testimonial.css'



const Testimonial = ({testimony}) => {
  return (
    <div className='testimonial-container'>
      <div className='testimonial-content'>
      {testimony.map((item) => {
          return (

      <div className='testimonial-box' key={item.id}>
        <img 
        src={item.imgURL} 
        alt='quality'
        width={'50px'}
         />
         <h3 className='center'>{item.boxLabel}</h3>
         <p className='center'>{item.subText}</p>
      </div>
      
    )
  }) }
</div>
    </div>
  )
}

export default Testimonial