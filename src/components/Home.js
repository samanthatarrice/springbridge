import React, {Fragment} from 'react';
import {Button} from 'react-bootstrap';
import Header from './Header';

function Home() {
  return (
    <Fragment>
      <Header />

      {/* Button */}
      <div className='p-4 py-5'>
        <Button className='enrollment-btn rounded-pill p-3 my-auto w-100 d-md-none'>{'Enrollment & Tours'}</Button>
      </div>

      {/* Home Header */}
      <h1 className='page-title text-center'>Welcome to Springbridge!</h1>
      <p className='page-description text-center'>We are a Japanese/English or Mandarin/English bilingual independent school in the heart of the Silicon Valley.</p>
      
      {/* Quick Facts - Change later so facts aren't hardcoded?*/}
      <div className='d-flex flex-column flex-lg-row align-items-center'>
        <div className='quick-fact-container text-center rounded-circle d-flex flex-column justify-content-center'>
          <h2 className='quick-fact-title'>1/6</h2>
          <p className='fs-3'>Teacher/Student Ratio</p>
          <img src='./images/teacher.png' />
        </div>
        <div className='quick-fact-container text-center rounded-circle d-flex flex-column justify-content-center'>
          <h2 className='quick-fact-title'>16</h2>
          <p className='fs-3'>Average students/class</p>
          <img src='./images/students.png' />
        </div>
        <div className='quick-fact-container text-center rounded-circle d-flex flex-column justify-content-center'>
          <h2 className='quick-fact-title'>7</h2>
          <p className='fs-3'>Average Years Teaching</p>
          <img src='./images/apple.png' />
        </div>
      </div>

      {/* Testimonies */}

    </Fragment>
  )
}

export default Home;