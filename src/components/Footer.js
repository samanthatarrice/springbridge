import React from 'react';

function Footer() {
  return (
    <footer>
      <div className='contact-logo-container d-flex flex-column flex-lg-row justify-content-evenly align-items-center p-5 m-auto'>
        <div className='footer-contact-container text-center'>
          <p>Icon and phone goes here</p>
          <p>Icon and email goes here</p>
        </div>
        <div className='logo-container text-center my-3 my-lg-0'>
          <img className='logo-lg' src='./images/logo-lg.png' />
        </div>
        <div className='social-media-container d-flex my-3'>
          <div className='w-25'>
            <img className='w-100' src='./images/facebook.png' />
          </div>
          <div className='w-25 mx-5'>
            <img className='w-100' src='./images/linkedin.png' />
          </div>
          <div className='w-25'>
            <img className='w-100' src='./images/yelp-logo.png' />
          </div>
        </div>
      </div>
      <div className='address-attribution-container d-flex flex-column flex-lg-row justify-content-evenly align-items-center m-auto pb-5 px-5'>
        <div className='prek-address text-center'>
          <p className='fw-bold'>Preschool - Kindergarten</p>
          <p>1625 W. Campbell Ave</p>
          <p>Campbell, CA 95008</p>
        </div>
        <div className='elem-address text-center my-lg-0 my-5'>
          <p className='fw-bold'>{'Elementary & Middle'}</p>
          <p>1625 W. Campbell Ave</p>
          <p>Campbell, CA 95008</p>
        </div>
        <div className='attribution-container text-center'>
          <p className='fw-bold'>Springbridge International School</p>
          <p>©️ 2022</p>
          <p>All Rights Reserved</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;