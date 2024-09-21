import React from 'react';
///////////images
import img1 from '../assets/images/clients/client-1.png';
import img2 from '../assets/images/clients/client-2.png';
import img3 from '../assets/images/clients/client-3.png';
import img4 from '../assets/images/clients/client-4.png';
import img5 from '../assets/images/clients/client-5.png';
import img6 from '../assets/images/clients/client-6.png';
import img7 from '../assets/images/clients/client-7.png';
import img8 from '../assets/images/clients/client-8.png';
//////////////splide
import { Splide, SplideSlide } from '@splidejs/react-splide';
// Default theme
import '@splidejs/react-splide/css';
// or other themes
import '@splidejs/react-splide/css/skyblue';
import '@splidejs/react-splide/css/sea-green';
// or only core styles
import '@splidejs/react-splide/css/core';

export default () => {
  return (
    <Splide className='mt-5'
      options={ {
        type   : 'loop',
        drag   : 'free',
        focus  : 'center',
        rewind: true,
        gap   : '1rem',
        perPage: 6,
        arrows:false,
        autoplay:true,
        interval:3000,  
      } }
      aria-label="My Favorite Images">
        <SplideSlide>
          <img className='clients' style={{width:"60%"}} src={img1} alt="Image 1"/>
        </SplideSlide>
        <SplideSlide>
          <img className='clients' style={{width:"60%"}} src={img2} alt="Image 2"/>
        </SplideSlide>
        <SplideSlide>
          <img className='clients' style={{width:"60%"}} src={img3} alt="Image 3"/>
        </SplideSlide>
        <SplideSlide>
          <img className='clients' style={{width:"60%"}} src={img4} alt="Image 4"/>
        </SplideSlide>
        <SplideSlide>
          <img className='clients' style={{width:"60%"}} src={img5} alt="Image 5"/>
        </SplideSlide>
        <SplideSlide>
          <img className='clients' style={{width:"60%"}} src={img6} alt="Image 6"/>
        </SplideSlide>
        <SplideSlide>
          <img className='clients' style={{width:"60%"}} src={img7} alt="Image 7"/>
        </SplideSlide>
        <SplideSlide>
          <img className='clients' style={{width:"60%"}} src={img8} alt="Image 8"/>
        </SplideSlide>
    </Splide> 
  );}