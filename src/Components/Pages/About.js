import React from 'react'
import '../Style/About.css'
import Nav from '../Navbar/Nav'
import Pict from '../Asset/Logo1.png'
import { useNavigate } from 'react-router-dom'
import Footer from '../Navbar/Footer'

const About = () => {
  const Navigate = useNavigate ()
  return (
   
    <div>
        <Nav/>
        <img  className='picture' src={Pict} typeof='image'></img>
        <div className='page1'>
        <h2 className='About'>About <span className='sty2'>Us</span> </h2>

<h3 className='About-us'> BLUESAPPHIRE Constructions and Realtors proudly extends its reach beyond being the pre-eminent Real Estate Agent in Bangalore, by also offering comprehensive construction services. As we recognize that owning a property is an ambition close to every individual’s heart, we strive to make it a tangible reality, especially in an IT city like Bangalore, where owning a house is considered a triumph.

Our venture into the construction domain is a testament to our commitment to delivering excellence in every aspect of our services. From erecting a new building to the remodeling of an existing one, our focus on quality, customer satisfaction, and sustainability sets us apart from the rest.

At BLUESAPPHIRE Constructions and Realtors, we provide a wide range of trustworthy real estate and construction services, such as:

<h4 className='point'>
Real Estate Consultancy Service</h4>
<h5 className='point2'>Building Construction and Development Services
House Renovation Services 
Property Valuation Services
Property Legal Consultancy Services
Home Loan Consultancy Services
With a foundation built on our immense knowledge, a dedicated team of professionals, and an impressive track record, we have carved out a significant name in the real estate and construction sectors in Bangalore. We remain one step ahead of other property dealers due to the following features:
</h5>



<h4 className='point'>
Real Estate Consultancy Service</h4>
<h5 className='point2'>Building Construction and Development Services
House Renovation Services
Property Valuation Services
Property Legal Consultancy Services
Home Loan Consultancy Services
With a foundation built on our immense knowledge, a dedicated team of professionals, and an impressive track record, we have carved out a significant name in the real estate and construction sectors in Bangalore. We remain one step ahead of other property dealers due to the following features:
</h5>

<h4 className='point'>
Reliable Advisory Services</h4>
<h5 className='point2'>Hassle-free Handling of Legal Paperwork
Transparency in Transactions
Competitive Valuation of Property
Efficient Designing and Construction for New and Existing Properties
Financial Assistance & Help in Securing Loans and Funds</h5>


We are recognized as one of the leading real estate agents and construction service providers in Bangalore. Our scope extends to buying, selling, and renting residential and commercial properties in Bangalore and surrounding areas. We also have a firm presence in places beyond Bangalore like Ooty, Chennai, Kerala, and more.

Our commitment extends towards providing a greener and nature-friendly habitat to our clients. As you move to your new home in Bangalore or the picturesque outskirts of the city, be prepared to start every day amidst freshness and tranquility. With Global Constructions and Realtors, make your dreams of owning and creating a beautiful home come true.</h3>

        </div>

        <button className='AboutButton' onClick={()=>Navigate('/Shortlist')}><h3>Tell Us What You Are Looking For</h3></button>
        <Footer />
        
    </div>
  )
}

export default About
