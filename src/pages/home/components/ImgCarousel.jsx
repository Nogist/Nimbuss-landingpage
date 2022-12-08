import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import picture1 from '../../../assets/1.png';
import picture2 from '../../../assets/2.png';
import picture3 from '../../../assets/3.png';
import picture4 from '../../../assets/4.png';
import picture5 from '../../../assets/5.png';
import picture6 from '../../../assets/6.png';
import picture7 from '../../../assets/7.png';
import picture8 from '../../../assets/8.png';



import './style.css';



const ImgCarousel = () => {
  return (
    <div name='carousel' className='container w-100 px-0 '>
      <Carousel className='carousel w-100 px-0' showArrows={false} autoPlay={true} infiniteLoop={true} >
        <div>
          <img src={picture1} alt='/' />
        </div>
        <div>
          <img src={picture2} alt='/' />
        </div>
        <div>
          <img src={picture3} alt='/' />
        </div>
        <div>
          <img src={picture4} alt='/' />
        </div>
        <div>
          <img src={picture5} alt='/' />
        </div>
        <div>
          <img src={picture6} alt='/' />
        </div>
        <div>
          <img src={picture7} alt='/' />
        </div>
        <div>
          <img src={picture8} alt='/' />
        </div>
      </Carousel>
    </div>
  );
};

export default ImgCarousel;