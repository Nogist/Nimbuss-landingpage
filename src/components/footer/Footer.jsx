import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo2.webp'
import { AiOutlineTwitter, AiFillLinkedin, AiOutlineMail, AiFillMessage } from 'react-icons/ai';
import { MdFacebook } from 'react-icons/md';
import { FiInstagram, FiPhone } from 'react-icons/fi';
import { GoLocation } from 'react-icons/go';
import ssl from '../../assets/ssl_image.webp';

import './footer.css';

const Footer = () => {
  return (
    <div className='footer'>
      <div className='footer-container'>
        <div className='footer-contain-1 '>
          <p className='m-0'>Would you love to explore our advertising possibilities?</p>
          <Link to='./contact'>Contact Us</Link>
        </div>
        <div className='footer-container-logos d-flex flex-column justify-content-center align-items-center pt-3' >
          <div className='footer-container-logo-home'>
            <img className='w-100 h-100' src={logo} alt="logo" />
          </div>
          <div className='logos-home d-flex flex-row my-3'>
            <a href='https://twitter.com/NimbusMediaNG' target='blank' ><AiOutlineTwitter /></a>
            <a href='https://web.facebook.com/nimbusNG/?_rdc=1&_rdr' target='blank' ><MdFacebook /></a>
            <a href='https://www.instagram.com/nimbusmediang/' target='blank' ><FiInstagram /></a>
            <a href='https://www.linkedin.com/company/nimbus-media-limited/' target='blank' ><AiFillLinkedin /></a>
          </div>
        </div>
        <div className='d-flex  w-100 justify-content-center align-items-center shortouts-all mb-3 mt-3'>
          <div className='d-flex flex-row align-items-center  shortouts'>
            <AiOutlineMail />
            <p className='m-o'>wale@nimbus.com.ng</p>
          </div>
          <div className='d-flex flex-row align-items-center justify-content-center  shortouts'>
            <GoLocation />
            <p className='m-o flex-wrap justify-content-center pl-3'>Nimbus Media Limited, 16, Igbasan Street, Opebi, Ikeja, Lagos.</p>
          </div>
          <div className='d-flex flex-row align-items-center  my-0 shortouts'>
            <FiPhone />
            <p className='my-o'>(+234)-706-327-4951</p>
          </div>
        </div>
        <div className='mb-2 footer-container-logo-home' >
          <img className='w-100 h-100' src={ssl} alt="ssl" />
        </div>
        <div className='d-flex flex-row align-items-center w-100 justify-content-sm-between footer-bottom'>
          <div className='d-flex flex-row footer-bottom-content text-sm flex-wrap'>
            <p>COPYRIGHT NIMBUS MEDIA 2022</p>
            <p>-</p>
            <Link to='/cookie'>TERMS & CONDITIONS PRIVACY POLICY</Link>
          </div>
          <Link id='footer-bottom-contact' to='/contact'><AiFillMessage /></Link>
        </div>
      </div>
    </div>
  )
}

export default Footer