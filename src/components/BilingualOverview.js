import React, { Fragment } from 'react';
import Header from './Header';
import Footer from './Footer';

function BilingualOverview() {
  return (
    <Fragment>
      <Header />
      
      <section className='overview-intro'>
        <h1 className='page-title text-center p-5'>Bilingual Program Overview</h1>
        <article className='page-description'>
          <p className='mb-4'>Our highly skilled and dedicated teachers create a safe and engaging learning environment. Carefully designed classrooms stimulate meaningful, student-centered learning. Strong bonds are established between students and teachers, who stay with kindergarteners through first grade.</p>
          <p>Teachers cater lessons to accommodate individual learning styles, increasing the pace of learning and depth of understanding. Technology and multi-media further accelerate comprehension, addressing multiple learning styles efficiently. Higher order thought processes are engaged at an earlier age. Small class size provides ample opportunity for collaborative learning as well as leadership. Children learn to communicate, expressing and critiquing ideas from multiple perspectives in written and oral formats.</p>
        </article>
      </section>

      <Footer />
    </Fragment>
  );
}

export default BilingualOverview;