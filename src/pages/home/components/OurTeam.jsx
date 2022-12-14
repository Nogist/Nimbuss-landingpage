import React from 'react';
import Slider from "react-slick";
import "../../../components/slick.css"; 
import "../../../components/slick-theme.css";
import logo1 from '../../../assets/bbc.webp';
import logo2 from '../../../assets/intel.webp';
import logo3 from '../../../assets/aerial.webp';
import logo4 from '../../../assets/coke.webp';
import logo5 from '../../../assets/mtn.webp';
import logo6 from '../../../assets/nestle.webp';
import logo7 from '../../../assets/orbit.webp';
import logo8 from '../../../assets/uba.webp';
import logo9 from '../../../assets/unilever.webp';
import logo10 from '../../../assets/Wrigley.webp';
import team from '../../../assets/team.webp';
import { Link } from 'react-router-dom';


const OurTeam = () => {

  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <div className='OurTeam'>
      <div>
        <h2>Trusted by Agencies & Popular brands</h2>
        <p>We are committed to helping you build meaningful interaction and topnotch digital brand communications with customers everywhere and everytime.</p>
      </div>
      <div className='slider-settings py-5'>
          <Slider {...settings} >
            <div>
              <img width='100%'style={{width:'96px', height:'64px', objectFit:'contain'}} src={logo1} alt='/' />
            </div>
            <div>
              <img width='100%'style={{width:'96px', height:'64px', objectFit:'contain'}}src={logo2} alt='/' />
            </div>
            <div>
              <img width='100%'style={{width:'96px', height:'64px', objectFit:'contain'}} src={logo3} alt='/' />
            </div>
            <div>
              <img width='100%'style={{width:'96px', height:'64px', objectFit:'contain'}}src={logo4} alt='/' />
            </div>
            <div>
              <img width='100%'style={{width:'96px', height:'64px', objectFit:'contain'}} src={logo5} alt='/' />
            </div>
            <div>
              <img width='100%'style={{width:'96px', height:'64px', objectFit:'contain'}}  src={logo6} alt='/' />
            </div>
            <div>
              <img width='100%'style={{width:'96px', height:'64px', objectFit:'contain'}} src={logo7} alt='/' />
            </div>
            <div>
              <img width='100%'style={{width:'96px', height:'64px', objectFit:'contain'}} src={logo8} alt='/' />
            </div>
               <div>
              <img width='100%'style={{width:'96px', height:'64px', objectFit:'contain'}} src={logo9} alt='/' />
            </div>
            <div>
              <img width='100%'style={{width:'96px', height:'64px', objectFit:'contain'}} src={logo10} alt='/' />
            </div>
          </Slider>
      </div>
      <div className='ourmain-team w-100 px-20 py-10 text-center'>
        <h2>Our Team</h2>
        <p>We are a team of experts working collaboratively to empower you with <br /> opportunities to reach your customers and grow your bottom line</p>
        <img src={team} alt='/' />
        <button className='mt-10'> <Link to='/about'>View our full profile</Link></button>
      </div>
    </div>
  )
}

export default OurTeam