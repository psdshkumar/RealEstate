
import React, { useState, useEffect } from 'react';
import '../Style/Logo.css'
import Footer from '../Navbar/Footer';

const Logo = () => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [currentImage1Index, setCurrentImage1Index] = useState(0);
    const images = ['./images/img1.jpg', './images/img2.jpg', './images/img3.jpg', './images/img4.jpeg', ];
    const images1 = [ './images/img4.jpeg', './images/img5.jpg', './images/img6.jpeg', './images/img7.jpeg', './images/img8.jpg'];
    
    const handlePrevClick = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
      };

      const handleNextClick = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
      };

      const handlePrev1Click = () => {
        setCurrentImage1Index((prevIndex) => (prevIndex - 1 + images.length) % images.length);
      };

      const handleNext1Click = () => {
        setCurrentImage1Index((prevIndex) => (prevIndex + 1) % images.length);
      };

      
  useEffect(() => {
    // Automatically advance every 3 seconds
    const intervalId = setInterval(() => {
      handleNextClick();
    }, 1000);
    return () => clearInterval(intervalId);
  }, []);


  useEffect(() => {
    // Automatically advance every 3 seconds
    const intervalId = setInterval(() => {
      handleNext1Click();
    }, 1000);
    return () => clearInterval(intervalId);
  }, []);


  return (
    <>
    

<div className="image-slider2">
<img className='image2' src={images[currentImageIndex]} alt={`Image1 ${currentImageIndex + 1}`} /></div>
<img className='image2' src={images1[currentImage1Index]} alt={`Image1 ${currentImage1Index + 2}`} />

<div className="image-slider2">
<img className='image2' src={images[currentImageIndex]} alt={`Image1 ${currentImageIndex + 1}`} /></div>
<img className='image2' src={images1[currentImage1Index]} alt={`Image1 ${currentImage1Index + 2}`} />








</>
    
  )
  
}

export default Logo
