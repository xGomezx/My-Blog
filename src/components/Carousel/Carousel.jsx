import React, { useState } from 'react';
import carousel1 from '../../assets/carousel1.jpg';
import carousel2 from '../../assets/carousel2.webp';
import carousel3 from '../../assets/carousel3.jpg';

const Carousel = () => {
  const images = [carousel1, carousel2, carousel3];
  const [currentSlide, setCurrentSlide] = useState(0);

  const goToPreviousSlide = () => {
    const newIndex = (currentSlide === 0) ? images.length - 1 : currentSlide - 1;
    setCurrentSlide(newIndex);
  };

  const goToNextSlide = () => {
    const newIndex = (currentSlide === images.length - 1) ? 0 : currentSlide + 1;
    setCurrentSlide(newIndex);
  };

  return (
    <div id="default-carousel" className="relative w-11/12 h-3/4 mb-6" data-carousel="slide">
      <div className="relative h-56 overflow-hidden rounded-lg md:h-96">
       
        <div className="duration-700 ease-in-out" data-carousel-item>
          <img src={images[currentSlide]} className="absolute block w-11/12 h-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt={`Slide ${currentSlide + 1}`} />
        </div>
      </div>

    
      <button type="button" className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" onClick={goToPreviousSlide} data-carousel-prev>
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
          
          <svg className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 1 1 5l4 4"/>
          </svg>
          <span className="sr-only">Anterior</span>
        </span>
      </button>

      <button type="button" className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" onClick={goToNextSlide} data-carousel-next>
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
        
          <svg className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4"/>
          </svg>
          <span className="sr-only">Siguiente</span>
        </span>
      </button>
    </div>
  );
};

export default Carousel;
