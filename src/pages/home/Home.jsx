import React from 'react';
import Footer from '../../components/footer/Footer';
import Navbar from '../../components/navbar/Navbar';
import ImgCarousel from './components/ImgCarousel';
import TypeWrite from './components/TypeWrite';
import { IoIosArrowDown } from 'react-icons/io';
import WhatWeDo from './components/WhatWeDo';
import Soow from './components/Soow';

import InnProject from '../project/component/InnProject';
import Form from '../contact/component/Form';

const Home = () => {
  return (
    <div className='home'>
      <Navbar />
      <ImgCarousel />
      <div className='home-body'>
        <div>
          <TypeWrite />
          <p>With our outstanding digital out-of-home advertising opportunities, you are directly in the face of your target audience.</p>
          <button>Explore</button>
          <a href='#whatarewe'><IoIosArrowDown className='ball' /></a>
        </div>
      </div>
      <div>
        <div>
          <h2 id='whatarewe'>Who We Are?</h2>
          <p>An outdoor media and advertising agency based in Lagos with a network of digital out-of-home advertising platforms across the country which we deploy to improve reach, visibility and engagement for our customers.</p>
        </div>
      </div>
      <WhatWeDo />
      <Soow />
      <InnProject />
      <Form />
      <Footer />
    </div>
  )
}

export default Home