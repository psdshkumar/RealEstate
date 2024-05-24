import React from 'react'
import '../Style/OrderSummry.css'
import Nav from '../Navbar/Nav'
import video from '../Asset/Property.mp4'



const OrderSummry = () => {
  return (
    <div className='page3'>
      <Nav />
      
      <h2 className='hed2'>Tell Us <span className='styl5'>What You Are Looking For</span></h2>

      <video src={video} typeof='video' controls></video>

      <div>
       

        <form action="/confrim">
        <h2 className='title2'> I  <span className='styl5'>Want to </span>  </h2>
      
      <label className='buy'>Buy <input type="radio" name="fav_language" ></input></label>
      
      <label className='buy'>Rent <input type="radio"  name="fav_language" ></input></label>

      <label className='buy'>Lease <input type="radio"  name="fav_language" ></input></label>
          <p><input className='text' type="text" placeholder='Name'  ></input></p>
        <p><input className='text' type="text" placeholder='Contact no'  ></input></p> 
        <p><input className='text' type="text" placeholder='Email ID' ></input></p><bh> </bh>
        <p><textarea>Message</textarea></p>

        <button className='submit'>Submit</button>
        
        
        
        
        </form>
        


      </div>
      
      
      
     

    </div>
  )
}

export default OrderSummry
