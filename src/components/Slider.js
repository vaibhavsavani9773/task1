import React, { useState } from 'react';
import it1 from './img/it1.jpg';
import it2 from './img/it2.jpg';
import it3 from './img/it3.jpg';
import Checklist from './Checklist';
import { Link } from 'react-router-dom';
import LoginForm from './Loginform';
import Restapi from './Restapi';
import ListComponent from './ListComponent';
import SearchFilter from './SearchFilter';

const ImageSlider = () => {
  const images = [it1, it2, it3];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextSlide = () => {
    setCurrentImageIndex((currentImageIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentImageIndex((currentImageIndex - 1 + images.length) % images.length);
  };

  return (
    <div className="image-slider" >
      <button onClick={prevSlide} className="slider-button">
        &larr; Previous
      </button>
      <img src={images[currentImageIndex]} alt="Slider"  style={{ height:'200px', width:'200px'}}/>
      <button onClick={nextSlide} className="slider-button">
        Next &rarr;
      </button>
      <p><Link to='checklist'>goto checklist</Link></p>
      <p><Link to='Loginform'>goto LoginForm</Link></p>
      <p><Link to='Restapi'>goto Restapi</Link></p>
      <p><Link to='Counter'>goto Counter</Link></p>
      <p><Link to='ListComponent'>goto Listdiplay</Link></p>
      <p><Link to='SearchFilter'>goto SearchFilter</Link></p>
      
      
      
    </div>
  );
};
export default ImageSlider;
