import React, {Fragment} from 'react';
import {Card} from 'react-bootstrap';
import Header from './Header';
import Footer from './Footer';

function Home() {
  return (
    <Fragment>
      <Header />
      {/*
          <div className='p-4 py-5 d-md-none'>
            <Button className='enrollment-btn rounded-pill p-3 my-auto w-100'>{'Enrollment & Tours'}</Button>
          </div>
        */}

      {/* Home Header */}
      <h1 className='home-page-title text-center p-5'>Welcome to Springbridge!</h1>
      <p className='page-description text-center m-auto my-5 fs-2 w-75'>We are a Japanese/English or Mandarin/English bilingual independent school in the heart of the Silicon Valley.</p>
      
      {/* Quick Facts - Change later so facts aren't hardcoded?*/}
      <article className='quick-facts'>
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
      </article>

      <article className='page-description w-75'>
        Springbridge’s carefully integrated curriculum strives to achieve academic excellence on par with the top private schools in Silicon Valley as measured by standardized test scores. Motivated, capable students suited for our bilingual curriculum and multicultural environment are carefully selected. Our students are immersed in authentic Japanese, Chinese and American curricula and taught by native speakers during the course of the school day. Saturday and after school classes are not required, freeing time for family and personal pursuits.
      </article>

      {/* Testimonies */}
      <Card className='testimonies p-3 m-lg-5'>
        <Card.Body>
          <img className='quote' src='./images/quote.png' />
          <figure>
            <blockquote className='blockquote mb-0 text-center p-3 fs-1' cite=''>
              <p>This is the school we've been waiting for!</p>
            </blockquote>
            <figcaption className='blockquote-footer mt-4 text-center fs-6'>
              Happy parent from<cite title='Source Title'> Yelp</cite>
            </figcaption>
            <a className='m-auto text-center w-25 mt-5 d-block' href='https://www.yelp.com/biz/springbridge-international-school-campbell' target='_blank'>
              <img className='w-100' alt="Springbridge International School" src="https://dyn.yelpcdn.com/extimg/en_US/rrc/2RP3xzZs6LeA_VL6BuMUUw.png" />
            </a>
          </figure>
          <img className='quote' src='./images/quote.png' />
        </Card.Body>
      </Card>

      {/* Location */}
      <Card className='locations text-center p-5 m-lg-5'>
        <Card.Title className='locations-title mb-4'>Locations</Card.Title>
        <Card.Body className='d-flex flex-column flex-lg-row'>
          <div className="map-container">
            <div className="gmap_canvas">
              <iframe id="gmap_canvas" src={'https://maps.google.com/maps?q=1980%20Hamilton%20Ave%20San%20Jose,%20CA%2095125&t=&z=13&ie=UTF8&iwloc=&output=embed'} frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0"></iframe>
            </div>
          </div>
          <Card.Text className='location-text mt-5 w-100'>
            <address>
              <span className='fw-bold'>Preschool - Kindergarten</span> <br />
              1625 W. Campbell Ave <br/>
              Campbell, CA 95008
            </address>
            <address className='mt-5'>
              <span className='fw-bold'>{'Elementary & Middle'}</span> <br/>
              1625 W. Campbell Ave <br/>
              Campbell, CA 95008
            </address>
          </Card.Text>
        </Card.Body>
      </Card>

      <Footer />
    </Fragment>
  );
}

export default Home;