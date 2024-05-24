import React from 'react'
import image from '../Asset/Home1.jpg'
import '../Style/Home.css'
import Nav from '../Navbar/Nav'
import logo from '../Asset/Logo1.png'

import Apartment from '../Asset/building (1).png'
import Building from '../Asset/apartment (2).png'
import site from '../Asset/location-pin.png'
import Property from '../Asset/search.png'
import Build from '../Asset/brick-wall.png'
import Paint from '../Asset/Paint1.jfif'
import consul from '../Asset/Consultant.jpg'
import contract from '../Asset/Building Contractors.jpg'
import legal from '../Asset/legal1.jpg'
import management from '../Asset/Managment.jpg'
import lone from '../Asset/Loan.jpg'
import Logo from './Logo'
import { useNavigate } from 'react-router-dom'
import Footer from '../Navbar/Footer'



const Home = () => {
  const Navigate = useNavigate ()

  return (
    <div>
         
        <div>
        <img className='logo' src={logo} typeof='logo'></img>

        
        
        
        <div className="search-container">
        <input type="text" className="search-input" placeholder="Search..."/>
        <div className="search-icon">&#128269;<i className="fa-search"></i></div>
        
       
        </div>
        <Nav />

          <img className='image' src={image} typeof='image'></img>
            
        
        </div>
        <div className='SecondPage'>
        <h1 className='TitleHeading'>Welcome to <span className='blue'> BLUESAPPHIRE </span>Builders & Realtors
</h1>
<h4 className='orange'>Built Beyond expectation</h4>
        </div>
        
        <div className='Move'>
          <h2 className='Heading2'> Type Of <span className='styl'>Properties</span> </h2>
          <div>
            <div className='round' onClick={()=>Navigate('/Property')}><img src={Apartment} typeof='building'></img></div>
            <div className='round' onClick={()=>Navigate('/Property')}><img src={Building} typeof='building'></img></div>
            <div className='round' onClick={()=>Navigate('/Property')}><img src={site} typeof='building'></img></div>
            <div className='round' onClick={()=>Navigate('/Property')}><img src={Property} typeof='building'></img></div>
            <div className='round' onClick={()=>Navigate('/Property')}><img src={Build} typeof='building'></img></div>
            
            
            
          </div>

       
        </div>

        <div className='ThirdPage'>
          <h2>Our <span className='styl'>Services</span> </h2>
          <div>
            <div className='box'>
            <div><img className='Paint' src={Paint} typeof='image'></img><div className='down'><h5>Get your home/office painted by Top Painters in Bangalore.</h5></div></div>
            
            
            </div>


            <div className='box'>
            <div><img className='legal' src={legal} typeof='image'></img><div><h5>Property Legal Advisor</h5></div></div>
            </div>


            <div className='box'>
            <div><img className='consul' src={consul} typeof='image'></img><div><h5>Property Loan Consultant</h5></div></div>
            </div>


            <div className='box'>
            <div><img  className='contract' src={contract} typeof='image'></img><div><h5>Building Contractors</h5></div></div>
            </div>


            <div className='box'>
            <div><img className='management' src={management} typeof='image'></img><div><h5>Apartment Management Services</h5></div></div>
            </div>


            <div className='box'>
            <div><img className='lone' src={lone} typeof='image'></img><div><h5>Real Estate Consultant</h5></div></div>
            </div>

          </div>
       </div>

        <div className='lastpage'>
          <h2>Channel<span className='styl'> Partners </span> </h2>
          <Logo />
        </div>
        <Footer />
       
      
      
    </div>
  )
}

export default Home
