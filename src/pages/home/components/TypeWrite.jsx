import React from 'react';
import Typewriter from "typewriter-effect";

import './style.css';

const TypeWrite = () => {
  return (
    <div className='typewriter'>
      <div className='typewriter-content'>
        <Typewriter className='writer'
            
            onInit={(typewriter)=> {

            typewriter
            
            .typeString("We are the Leading Out-of-home  Advertising Company in Nigeria")
              
            .pauseFor(1000)
            .deleteAll()
            .typeString("Engage your Audience with Digital Outdoor Advertising Where They Are More Relaxed")
            .pauseFor(1000)
            .deleteAll()
            .typeString("Be Where Your Customers Are")
            .pauseFor(1000)
            .deleteAll()
            .typeString("Reach Over 1.5 Million Audience Across Platforms Monthly")
            .pauseFor(1000)
            .deleteAll()
            .typeString("We are the Leading Out-of-home  Advertising Company in Nigeria")
              
            .pauseFor(1000)
            .deleteAll()
            .typeString("Engage your Audience with Digital Outdoor Advertising Where They Are More Relaxed")
            .pauseFor(1000)
            .deleteAll()
            .typeString("Be Where Your Customers Are")
            .pauseFor(1000)
            .deleteAll()
            .typeString("Reach Over 1.5 Million Audience Across Platforms Monthly")

            .start();
          
            }}
            />
            {/* <p>With our outstanding digital out-of-home advertising opportunities, you are directly in the face of your target audience.</p>
            <button>Explore</button>
            <IoIosArrowDown className='ball' /> */}
            {/* .typewriter-content button {
  background-color: #1E52AE;
  padding: .8rem 3rem;
  border-radius: 40px;
  font-size: 18px;
  font-weight: 300;

} */}
{/* .typewriter-content p {
  margin: 0 !important;
  text-align: center;
  font-size: 20px;
  line-height: 2rem;
  width: 55%;
} */}
      </div>
    </div>
  )
}

export default TypeWrite