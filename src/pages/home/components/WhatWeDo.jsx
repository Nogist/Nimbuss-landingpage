import React from 'react';
import picture1 from '../../../assets/1.webp';

const WhatWeDo = () => {
  return (
    <div className='whatwedo d-flex w-100 py-10 justify-content-center '>
      <div className='whatwedo-content d-flex flex-column py-10'>
        <span className='span'>
          <div className='iframe'>
            <iframe 
              frameborder="0"
              allowfullscreen="1"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              src="https://www.youtube.com/embed/0Eo7S7PCWuI?autoplay=0&mute=0&controls=1&origin=https%3A%2F%2Fnimbus.com.ng&playsinline=1&showinfo=0&rel=0&iv_load_policy=3&modestbranding=1&enablejsapi=1&widgetid=29"
              sandbox="allow-same-origin allow-scripts allow-forms allow-popups allow-popups-to-escape-sandbox"
              title='nimbus ad'
              id='nimbus'>
            </iframe>
          </div>
          <div className='iframe'>
            <h2>WHAT WE DO</h2>
            <p>All-round out-of-home advertising solutions which include branding, brand activation, consultancy and OOH advertising on billboard, lampost, shopping malls, superstores, street, road shows, digital OOH media, etc.</p>
          </div>
        </span>
        <span className='span1'>
          <div className='img'>
            <img src={picture1} alt='/' />
          </div>
          <div className='hero2'>
            <h2>WHY WORK WITH US</h2>
            <p >We are the leading digital out-of-home advertising agency in Nigeria with a network of outdoor advertising media nationwide and portfolio of projects for customers in all sectors across traditional OOH advertising platforms.</p>
          </div>
        </span>
      </div>
    </div>
  )
}

export default WhatWeDo