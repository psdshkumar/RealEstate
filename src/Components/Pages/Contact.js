import React from 'react'
import '../Style/Cont.css'
import Nav from '../Navbar/Nav'
import chennai from '../Asset/chennai.jpg'
import bangalore from '../Asset/Bangalore.jpg'
import kochi from '../Asset/Kochi.jpg'
import Footer from '../Navbar/Footer'



const Contact = () => {
  return (
    
 
    <div className='Contact'>
      <div className='Nav1'><Nav /></div>
      <div>spACE</div>
     
        <div className='title3'><h2>Contact <span className='sty4'>us</span> </h2>
        <h4>
        Email
properties@blueshaperconstructions.com<br></br>
Phone 
+91 80 2559 xxxx, 1800 xxxx xxx<br></br>

Prestige Falcon Towers, 19, Brunton Rd,<br></br>
Bengaluru, Karnataka 560025
        </h4>
       
        </div>
        <p></p>
        
        <div className='office'><h3 className='branch'>Branch office</h3>

            <div className='box4'><img id='chennai' src={chennai} typeof='image'></img>
              <h4>Chennai</h4>
              <h5>Bluesapphire – Top Floor,
#471, Anna Salai, Nandanam,
Chennai 600 035.

: +91 87544 xxxxx 

bangalore@Bluesapphireconstructions.com</h5>
              
              </div>
            
            
            <div className='box4'><img id='chennai' src={bangalore} typeof='image'></img>
              <h4>Bangalore</h4>
              <h5>Bluesapphire – Top Floor,
#471, Anna Salai, Nandanam,
Kochi 600 035.

 +91 87544 xxxx / +91 87544 xxxxx

kochi@blueshaperconstructions.com</h5></div>
            
            
            <div className='box4'><img id='chennai' src={kochi} typeof='image'></img>
              <h4>Kochi</h4>
              <h5>Bluesapphire – #801, 8th Floor, 
NH – 66 Bypass, Padivattom,
Edapally, Kochi – 682024

 +91 87544 xxxx 
kochi@Bluesapphireconstructions.com</h5> </div>
            
        </div>
        <Footer />
      
    </div>
  )
}

export default Contact
