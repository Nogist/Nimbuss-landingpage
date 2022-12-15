import React from 'react';
import picture1 from '../../../assets/2.webp';
import picture3 from '../../../assets/3.webp';
import picture4 from '../../../assets/4.webp';

const Soow = () => {
  return (
    <div className='soow d-flex flex-column align-items-center py-10'>
      <div className='d-flex flex-column justify-content-center align-items-center'>
        <h2>Some of our work</h2>
        <p style={{marginTop: '.4rem'}}>We offer out-of-home advertising, branding </p> 
        <p> and activation consultancy.</p>
      </div>
      <div className='soow-gallery d-flex pt-10'>
        <span>
          <div>
            <img src={picture1} alt="/" />
          </div>
          <h3>Mall Screens</h3>
        </span>
        <span>
          <div>
            <img src={picture3} alt="/" />
          </div>
          <h3>Branding</h3>
        </span>
        <span>
          <div>
          <img src={picture4} alt="/" />
          </div>
          <h3>Activation</h3>
        </span>
      </div>
    </div>
  )
}

export default Soow