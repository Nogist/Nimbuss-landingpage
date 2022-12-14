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

            .start()
          
            }}
            />
      </div>
    </div>
  )
}

export default TypeWrite