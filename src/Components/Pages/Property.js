import React from 'react'
import '../Style/Property.css'
import Nav from '../Navbar/Nav'
import Pict from '../Asset/findHome.jpg'
import flat1 from '../Asset/flat1.jpg'
import flat2 from '../Asset/flat2.jpg'
import flat3 from '../Asset/flat3.jpg'
import flat4 from '../Asset/flat1.jpg'
import flat5 from '../Asset/flat5.jpg'
import flat6 from '../Asset/flat6.jpg'
import { Navigate } from 'react-router-dom'
import OrderSummry from './OrderSummry'
import { useNavigate } from 'react-router-dom'
import Logo from './Logo'
import Footer from '../Navbar/Footer'





const Property = () => {
    const Navigate = useNavigate ()
  return (
    
    <div className='PropertyPage'>
        <Nav />
        <img  className='picture' src={Pict} typeof='image'></img>
        <Logo />
        <h2 className='title'>Find <span className='sty3'>Property</span></h2>
        <div className='box2'>
            <img className='flat1' src={flat1} typeof='image'></img>
            <h3 className='head1'>66.0 Lacs 30*40 West Facing Plot for Sale at Balaji layout Byrathi Hennur Road Bangalore</h3>
            <h5 className='tale1'>Area 1200 Sq.Ft. Sq.Ft. @ ? 5,500 / Sq.Ft.
Hennur Main Road, Bangalore, Karnataka
30*40 West Facing Plot for Sale at Balaji layout Byrathi Hennur Road Bangalore its very Close to Ollyon</h5>
<button className='shortlist' onClick={()=>Navigate('/Shortlist')}>Shortlist</button>
        </div>

        <div className='box2'>
            <img className='flat1' src={flat2} typeof='image'></img>
            <h3 className='head1'>66.0 Lacs 30*40 East Facing Plot for Sale at Jaynagar  main Road Bangalore</h3>
            <h5 className='tale1'>Area 1200 Sq.Ft. Sq.Ft. @ ? 5,500 / Sq.Ft.
Hennur Main Road, Bangalore, Karnataka
30*40 East Facing Plot for Sale at Jaynagar  main Road Bangalore its very Close to orian mall</h5>
<button className='shortlist' onClick={()=>Navigate('/Shortlist')}>Shortlist</button>
        </div>

        <div className='box2'>
            <img className='flat1' src={flat3} typeof='image'></img>
            <h3 className='head1'>80.0 Lacs 30*40 West Facing Plot for Sale at Munisipal layout Byrathi Hennur Road Bangalore</h3>
            <h5 className='tale1'>Area 1200 Sq.Ft. Sq.Ft. @ ? 5,500 / Sq.Ft.
Hennur Main Road, Bangalore, Karnataka
30*40 West Facing Plot for Sale at at Munisipal layout Byrathi Hennur Road Bangalore its very Close to bus Stand</h5>
<button className='shortlist' onClick={()=>Navigate('/Shortlist')}>Shortlist</button>
        </div>
      
        <div className='box2'>
            <img className='flat1' src={flat4} typeof='image'></img>
            <h3 className='head1'>76.0 Lacs 30*40 East Facing Plot for Sale at Mani layout Byrathi Hosur Road Bangalore</h3>
            <h5 className='tale1'>Area 1200 Sq.Ft. Sq.Ft. @ ? 5,500 / Sq.Ft.
Hennur Main Road, Bangalore, Karnataka
30*40 West Facing Plot for Sale at at Mani layout Byrathi Hosur Road Bangalore its very Close to Ollyon</h5>
<button className='shortlist' onClick={()=>Navigate('/Shortlist')}>Shortlist</button>
        </div>

        <div className='box2'>
            <img className='flat1' src={flat5} typeof='image'></img>
            <h3 className='head1'>70.0 Lacs 30*40 West Facing Plot for Sale at Kalyan layout  Hebal Road Bangalore</h3>
            <h5 className='tale1'>Area 1200 Sq.Ft. Sq.Ft. @ ? 5,500 / Sq.Ft.
Hennur Main Road, Bangalore, Karnataka
30*40 West Facing Plot for Sale at Kalyan layout  Hebal Road Bangalore its very Close to Hebal Lake</h5>
<button className='shortlist' onClick={()=>Navigate('/Shortlist')} >Shortlist</button>
        </div>
        <div className='box2'>
            <img className='flat6' src={flat6} typeof='image'></img>
            <h3 className='head1'>1C.0 Lacs 60*80 North Facing Plot for Sale at Prastige layout Manjunath nagar Tumkur Road Bangalore</h3>
            <h5 className='tale1'>Area 1200 Sq.Ft. Sq.Ft. @ ? 5,500 / Sq.Ft.
Tumkur Main Road, Bangalore, Karnataka
60*80 North Facing Plot for Sale at Prstige layout Manjunath nagar Tumkur Road Bangalore its very Close to Metro</h5>
<button className='shortlist'onClick={()=>Navigate('/Shortlist')} >Shortlist</button>
        </div>

        <button className='Next' onClick={()=>Navigate('/Shortlist')}>Next Page</button>

        <Footer />
        
    </div>
       
        
        
  )
}

export default Property
