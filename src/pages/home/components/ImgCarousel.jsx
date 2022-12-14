import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import picture1 from '../../../assets/11.webp';
import picture2 from '../../../assets/12.webp';
import picture3 from '../../../assets/13.webp';
import picture4 from '../../../assets/14.webp';




import './style.css';



const ImgCarousel = () => {
  return (
    <div name='carousel' className='containerssss w-100 px-0 '>
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
      </Carousel>
    </div>
  );
};

export default ImgCarousel;