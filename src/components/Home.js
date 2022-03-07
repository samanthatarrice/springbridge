import React, {Fragment} from 'react';
import {Button, Card} from 'react-bootstrap';
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
      <Card className='testimonies p-3'>
        <Card.Body>
          <img className='quote' src='./images/quote.png' />
          <figure>
            <blockquote className='blockquote mb-0 text-center p-3 fs-1' cite=''>
              <p>This is the school we've been waiting for!</p>
            </blockquote>
            <figcaption className='blockquote-footer mt-4 text-center fs-6'>
              Happy parent from<cite title='Source Title'> Yelp</cite>
            </figcaption>
          </figure>
          <img className='quote' src='./images/quote.png' />
        </Card.Body>
      </Card>
      
      {/* Yelp Reviews */}
      <div className='d-flex justify-content-center align-items-center m-5'>
        <div className='yelp-logo mr-3'>
          <img className='w-100' src='./images/yelp.png' />
        </div>
        <div className='w-25 ml-3'>
          <img className='w-100' alt="Springbridge International School" src="https://dyn.yelpcdn.com/extimg/en_US/rrc/2RP3xzZs6LeA_VL6BuMUUw.png" />
        </div>
      </div>

      {/* Location */}
      <Card className='locations text-center p-5'>
        <Card.Title className='locations-title mb-4'>Locations</Card.Title>
        <Card.Body className='d-flex flex-column flex-lg-row'>
          <div className="mapouter">
            <div className="gmap_canvas">
              <iframe width="600" height="500" id="gmap_canvas" src={'https://maps.google.com/maps?q=1980%20Hamilton%20Ave%20San%20Jose,%20CA%2095125&t=&z=13&ie=UTF8&iwloc=&output=embed'} frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>
            </div>
          </div>
          <Card.Text className='location-text mt-5 w-100'>
            <div className=''>
              <p className='fw-bold'>Preschool - Kindergarten</p>
              <p>1625 W. Campbell Ave</p>
              <p>Campbell, CA 95008</p>
            </div>
            <div className='mt-5'>
              <p className='fw-bold'>{'Elementary & Middle'}</p>
              <p>1625 W. Campbell Ave</p>
              <p>Campbell, CA 95008</p>
            </div>
          </Card.Text>
        </Card.Body>
      </Card>


    </Fragment>
  )
}

export default Home;