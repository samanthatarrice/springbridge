import React, { Fragment } from 'react';
import {Accordion} from 'react-bootstrap';
import Header from './Header';
import Footer from './Footer';

function BilingualOverview() {
  return (
    <Fragment>
      <Header />
      
      <section className='overview-intro'>
        <h1 className='page-title'>Bilingual Program Overview</h1>
        <article className='page-description d-flex flex-column flex-lg-row container-fluid px-0 px-lg-4 align-items-center'>
          <div className='col col-lg-7 ps-lg-0'>
            <p className='mb-4'>Our highly skilled and dedicated teachers create a safe and engaging learning environment. Carefully designed classrooms stimulate meaningful, student-centered learning. Strong bonds are established between students and teachers, who stay with kindergarteners through first grade.</p>
            <p className='mb-4'>Teachers cater lessons to accommodate individual learning styles, increasing the pace of learning and depth of understanding. Technology and multi-media further accelerate comprehension, addressing multiple learning styles efficiently. Higher order thought processes are engaged at an earlier age. Small class size provides ample opportunity for collaborative learning as well as leadership. Children learn to communicate, expressing and critiquing ideas from multiple perspectives in written and oral formats.</p>
          </div>
          <figure className='col col-lg-5 p-0'>
            <img className='w-100' src='./images/teacher-rainbow-table.jpg' />
            <figcaption></figcaption>
          </figure>
        </article>
        <article className='page-description d-flex flex-column flex-lg-row-reverse container-fluid px-0 px-lg-4 align-items-center'>
          <div className='col col-lg-7 pe-lg-4'>
            <p className='mb-4'>Theme-based units incorporate skills and content from both cultures and a variety of subjects including the arts, social and physical sciences as well as develop critical thinking, problem solving and time management skills. Experiential activities involve students, allowing for multi-sensory learning. Learning is fun.</p>
            <p className='mb-4'>Parents receive systematic, thorough communication in written and verbal form assessing areas of growth as well as weakness with specific plans of action addressing those areas. Behavioral and academic interventions are quickly and skillfully employed when appropriate. Daily communication is common in our closely-knit community. Teachers meet daily, collaborating and sharing years of experience while crafting project-based units as well as carefully addressing each student’s learning styles. Efficient and engaging activities to facilitate growth are the result. Veteran teachers closely monitor student stress levels, skillfully finding the right learning zone to maximize learning while cultivating the love of learning.</p>
          </div>
          <figure className='col col-lg-5 p-0'>
            <img className='w-100' src='./images/middle-kids-tech.jpg' />
            <figcaption></figcaption>
          </figure>
        </article>
      </section>

      <article className='page-description d-flex flex-column flex-lg-row container-fluid px-0 px-lg-4'>
        <div className='col col-lg-6 ps-lg-0'>
          <h3 className='section-title'>Community</h3>
          <p className='mb-4'>Springbridge families are diverse and committed to education and building a vibrant, harmonious community. Families play a tremendous role in shaping this unique and special school of friends growing together. We share numerous wonderful and unique cultures together.</p>
        </div>
        <figure className='col col-lg-6 p-0 mb-0'>
          <img className='w-100' src='./images/community2.jpg' />
          <figcaption></figcaption>
        </figure>
      </article>
      <section className='overview-accordion d-flex flex-column flex-lg-row-reverse container-fluid px-0 px-lg-4'>
        <div className='col col-lg-6 pe-lg-4'>
          <Accordion className='mb-5' flush>
            <Accordion.Item eventKey="0">
              <Accordion.Header>{'Lunch & Snack'}</Accordion.Header>
              <Accordion.Body>
                <h4>Snack</h4>
                <p>Afternoon snack is provided for all students. Our snack menu includes a seasonal, organic fruit and a whole grain, minimally processed, organic cracker or bread. Organic yogurt is served once per week. Beverage choices include unsweetened, barley tea, organic milk or water. Families may provide soy, rice or other customized beverages which we can store in our refridgerator. Morning snack is provided by home as the core academic learning occurs before lunch and we want all students to be comfortable and ready to learn during the core learning time.</p>
                <h4>Lunch</h4>
                <p>Students may bring home lunch or order lunch through <a className='text-reset' href='https://www.choicelunch.com/'>ChoiceLunch</a>. Choicelunch, in their words, “make scrumptious, nutritious lunches that lead to healthier lives." Choicelunch offers local, fresh food served in environmentally freindly containers. Their vast menu includes a hot or cold meal, fruit, snack, dessert and healthy beverage selection of juice, milk or water. Families order online, even same day, and can select to have an emergency lunch provided when mornings are hectic or something in the backpack overflows.</p>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
              <Accordion.Header>After School</Accordion.Header>
              <Accordion.Body>
                <p>Springbridge International School offers after school activities to full time students including the following:</p>
                <ul>
                  <li>Chess</li>
                  <li>Coding</li>
                  <li>LEGO Engineering</li>
                  <li>Abacus</li>
                  <li>Photography</li>
                  <li>Dance</li>
                  <li>Art</li>
                  <li>Cooking</li>
                  <li>Golf</li>
                  <li>Tennis</li>
                  <li>Seasonal Sports</li>
                  <li>Spanish</li>
                  <li>Japanese</li>
                  <li>Chinese</li>
                </ul>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2">
              <Accordion.Header>Field Trips</Accordion.Header>
              <Accordion.Body>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
                est laborum.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="3">
              <Accordion.Header>Summer School</Accordion.Header>
              <Accordion.Body>
                <p>Springbridge International School‘s summer camp offers Japanese and Chinese immersion programs. Native speaking Japanese, Chinese and English teachers provide academic enrichment, sports, cultural arts and crafts, special events and fieldtrips. Students enrolled in Springbridge during the academic year may participate in either the Japanese/English program or Mandarin/English program. Summer camp is open for 7 weeks, beginning the second week after the end of the school year.</p>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="4">
              <Accordion.Header>International Exchange</Accordion.Header>
              <Accordion.Body>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
                est laborum.
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </div>
        <figure className='col col-lg-6 p-0 mb-0 mb-lg-5 align-bottom'>
          <img className='w-100' src='./images/middle-kids-tech.jpg' />
          <figcaption></figcaption>
        </figure>
      </section>

      <Footer />
      
    </Fragment>
  );
}

export default BilingualOverview;