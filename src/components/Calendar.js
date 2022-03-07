import React, { Fragment } from 'react';
import Header from './Header';
import Footer from './Footer';

function Calendar() {
  return (
    <Fragment>
      <Header />
      
      <section>
        <h1>{'Calendar & Events'}</h1>
      </section>

      <Footer />
    </Fragment>
  );
}

export default Calendar;