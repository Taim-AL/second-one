import React from 'react';
////////////splide
import { Splide, SplideSlide } from '@splidejs/react-splide';
// Default theme
import '@splidejs/react-splide/css';
// or other themes
import '@splidejs/react-splide/css/skyblue';
import '@splidejs/react-splide/css/sea-green';
// or only core styles
import '@splidejs/react-splide/css/core';
///////img
import img1 from '../assets/images/testimonials/1.jpg';
import img2 from '../assets/images/testimonials/2.jpg';
import img3 from '../assets/images/testimonials/3.jpg';
import img4 from '../assets/images/testimonials/4.jpg';
import img5 from '../assets/images/testimonials/5.jpg';
////////////////component
import Card4 from './Card4';

export default () => {
    const data=[
        {
            img:img1,
            name:"Saul Goodman",
            about:"Ceo & Founder",
        },
        {
            img:img2,
            name:"Sara Wilsson",
            about:"Designer",
        },
        {
            img:img3,
            name:"jena Karlis",
            about:"Stor Owner",
        },
        {
            img:img4,
            name:"Matt Brandon",
            about:"Freelancer",
        },
        {
            img:img5,
            name:"John Larson",
            about:"Entrepreneur",
        },
    ]
  return (
    <Splide className='mt-5'
      options={ {
        type   : 'loop',
        drag   : 'free',
        focus  : 'center',
        rewind: true,
        gap   : '1rem',
        perPage: 1,
        arrows:false,
        autoplay:true,
        interval:3000,  
    } }
      aria-label="My Favorite Images">
        {data.map((e)=>{
            return(
                <>
                 <SplideSlide>
                        <Card4 img={e.img} name={e.name} about={e.about}/>
                 </SplideSlide>
                </>)})}
    </Splide>
    );}