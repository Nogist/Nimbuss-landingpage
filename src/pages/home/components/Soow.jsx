import React from 'react';
import picture1 from '../../../assets/2.webp';
import picture3 from '../../../assets/3.webp';
import picture4 from '../../../assets/4.webp';

const Soow = () => {
  return (
    <div className='soow d-flex flex-column align-items-center py-10'>
      <div className='d-flex flex-column justify-content-center align-items-center'>
        <h2>Some of our work</h2>
        <p>We offer out-of-home advertising, branding and activation consultancy.</p>
      </div>
      <div className='d-flex flex-row justify-content-between align-items-center pt-10'>
        <span>
          <img src={picture1} alt="/" />
          <h2>Mall Screens</h2>
        </span>
        <span>
          <img src={picture3} alt="/" />
          <h2>Branding</h2>
        </span>
        <span>
          <img src={picture4} alt="/" />
          <h2>Activation</h2>
        </span>
      </div>
    </div>
  )
}

export default Soow