import React, { Fragment } from 'react';
import Header from './Header';
import Footer from './Footer';

function Admissions() {
  return (
    <Fragment>
      <Header />
      
      <section>
        <h1 className='page-title'>{'Admissions & Tuition'}</h1>
      </section>

      <Footer />
    </Fragment>
  );
}

export default Admissions;