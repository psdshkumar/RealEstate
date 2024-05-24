import React from 'react'
import '../Style/Footer.css'
import insta from '../Asset/instagram.png'
import face from '../Asset/facebook.png'

const Footer = () => {
  return (
    <div className='footer'>
      <div className='add'>
        <table>
        <tr>
    <th className='t1'><h3>BLUESAPPHIRE,</h3></th>
    <th className='t1'> <h3>Important Links</h3></th>
    <th className='t1'><h3>Need Help?</h3></th>
    <th className='t1'><h3>Get in Touch</h3></th>
  </tr>
  
  <tr>
    <th className='t1'><h5>Bangalore, India</h5></th>
    <th className='t1'> <h5>About </h5></th>
    <th className='t1'> <h5> FAQs</h5></th>
    <th className='t1'><input type='text'placeholder='Name*'></input></th>

    
  </tr>
  <tr>
    <th className='t1'></th>
    <th className='t1'> <h5>Find Property</h5> </th>
    <th className='t1'> <h5>Policy</h5></th>
    <th className='t1'><input type='text' placeholder='Email*'></input></th>
   
  </tr>
  <tr>
    <th className='t1'></th>
    <th className='t1'> <h5>Contact us</h5></th>
    <th className='t1'></th>
    <th className='t1'><button className='button'>Subscribe</button></th>
    
  </tr>
        </table>
       
        
        

<a href="https://www.instagram.com/">
<img className='online' src={insta} typeof='image'></img>
</a>
<a href="https://www.facebook.com/">
        <img className='online' src={face}  typeof='image' ></img>
</a>
      </div>

     <div className='footer'> <h5 className='Designed'>  All Copyrights © Reserved 2024 BLUESAPPHIRE Constructions & Realtors. Designed and Developed by Sudesh</h5> </div>
        

        
      
    </div>
  )
}

export default Footer
