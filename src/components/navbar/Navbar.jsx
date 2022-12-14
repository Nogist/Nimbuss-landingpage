import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';
import { GiHamburgerMenu } from 'react-icons/gi';
import { IoMdArrowDropdown,IoMdArrowDropup } from 'react-icons/io'
import { IoMdClose }from 'react-icons/io';
import logo from '../../assets/logo.png';
import './navbar.css';

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [hover, setHover] = useState(false);
  const [hovers, setHovers] = useState(false);
  const toggle = () => setToggleMenu(!toggleMenu);
  const hove = () => setHover(!hover);
  const hoves = () => setHovers(!hovers);

  return (
    <div className='navbar'>
      <div className='navbar-container'>
        <div className='navbar-logo'>
          <NavLink to='/'>
            <img src={logo} alt="logo" />
          </NavLink>
        </div>
        <div className='navbar-links'>
          {/* <NavLink
      className="navbar__link" to='/'>Home</NavLink> */}
          <NavLink className="navbar__link" to='/about' onMouseEnter={hove} onMouseLeave={hove}> About
            {!hover ? (<IoMdArrowDropdown />) : (<IoMdArrowDropup /> ) }
            <div className={hover ? 'options open .dropdown_menu-4 ' : 'closed-link'}>
              <span>
                <NavLink to='/about'>Our Network</NavLink>
              </span>
              <NavLink  to='/about'>Full Team Profile</NavLink>
            </div>
          </NavLink>
       
          <NavLink className="navbar__link" to='/service' onMouseEnter={hoves} onMouseLeave={hoves}> Services
            {hovers ? (<IoMdArrowDropup />) : (<IoMdArrowDropdown /> )}
            <div className={hovers ? 'options .dropdown_menu-4' : 'closed-link'}>
              <span><NavLink to='/about'>Billboard Ardvertising</NavLink></span>
              <span><NavLink to='/about'>Lamp Post Advertising</NavLink></span>
              <span><NavLink  to='/about'>Shopping Mall Superstore</NavLink></span>
              <span><NavLink  to='/about'>Gureilla Advertising</NavLink></span>
              <NavLink to='/about'>Brand Adverstising</NavLink>
            </div>
          </NavLink>
          
          <NavLink
      className="navbar__link" to='/project'>Nimbus Aid Project</NavLink>
          <NavLink
      className="navbar__link" to='/gallery'> Gallery</NavLink>
          <NavLink
      className="navbar__link" to='/blog'>Blog</NavLink>
          <NavLink
      className="navbar__link" to='/contact'>Contact Us</NavLink>
        </div>
        <div>
          <div className='navbar-menu' onClick={toggle}>
              {!toggleMenu ? (<GiHamburgerMenu className='navbar-icon'/>) : (<IoMdClose className='navbar-icon' style={{fontSize: '2.5rem' }} />)}
          </div>
          <div className={toggleMenu ? 'navbar-links-mobile scale-up-center' : 'navbar-links-mobile-off'}>
          <NavLink className='navbar-mobile-drop'>
            <NavLink to='/about'> About </NavLink>
            <div onClick= {hove} className='navbar-mobile-icon'>
              {!hover ? (<IoMdArrowDropdown />) : (<IoMdArrowDropup /> ) } 
            </div>
          </NavLink>
          <NavLink className={hover ? 'under-link scale-up' : 'closed-link' } to='/about'>Our Network</NavLink>
          <NavLink className={hover ? 'under-link scale-up' : 'closed-link' } to='/about'>Full Team Profile</NavLink>
          <NavLink className='navbar-mobile-drop'>
            <NavLink  to='/service'> Services </NavLink>
            <div onClick={hoves} className='navbar-mobile-icon'>
              {hovers ? (<IoMdArrowDropup />) : (<IoMdArrowDropdown /> )}
            </div>
          
          </NavLink>
          
            <NavLink className={hovers ? 'under-link scale-up' : 'closed-link' } to='/about'>Billboard Ardvertising</NavLink>
            <NavLink className={hovers ? 'under-link scale-up' : 'closed-link' } to='/about'>Lamp Post Advertising</NavLink>
            <NavLink className={hovers ? 'under-link scale-up' : 'closed-link' } to='/about'>Shopping Mall Superstore</NavLink>
            <NavLink className={hovers ? 'under-link scale-up' : 'closed-link' } to='/about'>Gureilla Advertising</NavLink>
            <NavLink className={hovers ? 'under-link scale-up' : 'closed-link' } to='/about'>Brand Adverstising</NavLink>
        
          <NavLink  to='/project'>Nimbus Aid Project</NavLink>
          <NavLink  to='/gallery'> Gallery</NavLink>
          <NavLink to='/blog'>Blog</NavLink>
          <NavLink  to='/contact'>Contact Us</NavLink>
        </div>
        </div>
        
      </div>
    </div>
  )
}

export default Navbar