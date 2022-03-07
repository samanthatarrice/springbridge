import React, { Fragment } from 'react';
import Header from './Header';
import Footer from './Footer';

function Elementary() {
  return (
    <Fragment>
      <Header />
      
      <section className='prek-kinder-intro'>
        <h1 className='page-title'>Preschool﹣Kindergarten</h1>
        <article className='page-description d-flex flex-column flex-lg-row container-fluid px-0 px-lg-4'>
          <div className='col col-lg-7 ps-lg-0'>
            <p className='mb-4'>Our preschool through kindergarten billingaul programs prepare students for Elementary school through play, discovery and an emphasis on Japanese or Mandarin language exposure. Younger children are the most adept at aquiring new languages, and continue to practice English at school and in their home and social environments.</p>
          </div>
          <figure className='col col-lg-5 p-0 mb-0'>
            <img className='w-100' src='./images/kids-eating.jpg' />
            <figcaption></figcaption>
          </figure>
        </article>
      </section>

      <section className='overview-accordion d-flex flex-column flex-lg-row-reverse container-fluid px-0 px-lg-4'>
        <div className='col col-lg-6 pe-lg-4'>
          <Accordion className='mb-5' flush>
            <Accordion.Item eventKey="0">
              <Accordion.Header>Preschool</Accordion.Header>
              <Accordion.Body>
                <p>Springbridge International School offers Japanese or Mandarin immersion preschool for children ages 2.5 through 4. Children develop socially, emotionally and physically as they join their classmates in both learning activities and free play. Communication is encouraged as children increase their knowledge and understanding of themselves and the world. Children begin to prepare for prekindergarten as early language and math concepts are developed. Our carefully integrated curriculum introduces students to materials they will revisit in later grades and creates the ideal environment in which the bilingual brain can form its unique neural paths. The benefits include greater memory, multitasking ability, concentration and sorting, among others. It is here the children take their first steps with their future classmates in our accelerated kindergarten through grade 8 education at Springbridge International School.</p>
                <h4>Sample Preschool Schedule</h4>
                <Table responsive>
                  <thead>
                    <tr>
                      <th>Time</th>
                      <th>Activity</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>8 – 8:30</td>
                      <td>Free Play/Morning Exercise in Japanese or Mandarin</td>
                    </tr>
                    <tr>
                      <td>8:30 – 8:50</td>
                      <td>Free Play/Morning Exercise in Japanese or Mandarin</td>
                    </tr>
                    <tr>
                      <td>8:50 – 9:30</td>
                      <td>{'Lessons & Activities in Japanese or Mandarin'}</td>
                    </tr>
                    <tr>
                      <td>9:30 – 10:00</td>
                      <td>Snack and recess in Japanese or Mandarin</td>
                    </tr>
                    <tr>
                      <td>10 – 10:20</td>
                      <td>Circle Time in English</td>
                    </tr>
                    <tr>
                      <td>10:20 – 11</td>
                      <td>{'Lessons & Activities in English'}</td>
                    </tr>
                    <tr>
                      <td>11 – 12</td>
                      <td>Lunch and Recess in Japanese or Mandarin</td>
                    </tr>
                    <tr>
                      <td>12:00 – 1:30</td>
                      <td>Story/Nap time in Japanese or Mandarin</td>
                    </tr>
                    <tr>
                      <td>1:30 – 2</td>
                      <td>Quiet Free Play in Japanese or Mandarin</td>
                    </tr>
                    <tr>
                      <td>2 – 2:20</td>
                      <td>Story Time in English</td>
                    </tr>
                    <tr>
                      <td>2:20 – 3:00</td>
                      <td>{'Lessons & Activities in Japanese or Mandarin'}</td>
                    </tr>
                    <tr>
                      <td>3:00 – 3:30</td>
                      <td>Snack and Recess in Japanese or Mandarin</td>
                    </tr>
                    <tr>
                      <td>3:30 – 4:00</td>
                      <td>Arts and Crafts in Japanese or Mandarin</td>
                    </tr>
                    <tr>
                      <td>4:00 – 4:30</td>
                      <td>Physical Education in Japanese or Mandarin</td>
                    </tr>
                    <tr>
                      <td>4:30 – 5:00</td>
                      <td>Music in Japanese or Mandarin</td>
                    </tr>
                    <tr>
                      <td>5:00 – 5:30</td>
                      <td>Story Time, Dramatic Play in Japanese or Mandarin</td>
                    </tr>
                    <tr>
                      <td>5:30 – 6:00</td>
                      <td>Recess and Dismissal in Japanese or Mandarin</td>
                    </tr>
                  </tbody>
                </Table>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
              <Accordion.Header>Prekindergarten</Accordion.Header>
              <Accordion.Body>
                <p>At age four, children are introduced to prekindergarten and kindergarten materials that prepare them for academic success in either English and Japanese or English and Mandarin. This is a very important part of our unique school as it prepares students with a strong foundation on which they will enjoy learning at an accelerated rate, outpacing monolingual children. Children build upon the academic and social skills learned in preschool. More complex mathematical concepts are connected to what they have learned and the children learn to read so that they can read to learn. Kindergarten math and language concepts are introduced, providing students a head start to kindergarten.</p>
                <h4>Sample Prekindergarten Schedule</h4>
                <Table responsive>
                  <thead>
                    <tr>
                      <th>Time</th>
                      <th>Activity</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>8 – 9</td>
                      <td>Free Play/Morning Exercise in Japanese or Mandarin</td>
                    </tr>
                    <tr>
                      <td>9 – 9:30</td>
                      <td>Circle time in English language arts</td>
                    </tr>
                    <tr>
                      <td>9:30 – 10</td>
                      <td>Language arts activity in English</td>
                    </tr>
                    <tr>
                      <td>10 – 10:30</td>
                      <td>Snack and recess in Japanese or Mandarin</td>
                    </tr>
                    <tr>
                      <td>10:30 – 11</td>
                      <td>Circle Time in Japanese or Mandarin language arts</td>
                    </tr>
                    <tr>
                      <td>11 – 11:30</td>
                      <td>Language arts activity in Japanese or Mandarin</td>
                    </tr>
                    <tr>
                      <td>11:30 – 12</td>
                      <td>Lunch in Japanese or Mandarin</td>
                    </tr>
                    <tr>
                      <td>12:00 – 1</td>
                      <td>Recess in Japanese or Mandarin</td>
                    </tr>
                    <tr>
                      <td>1 – 1:30</td>
                      <td>Math lesson in English</td>
                    </tr>
                    <tr>
                      <td>1:30 – 2</td>
                      <td>Math activity in English</td>
                    </tr>
                    <tr>
                      <td>2 – 2:20</td>
                      <td>Recess in Japanese or Mandarin</td>
                    </tr>
                    <tr>
                      <td>2:20 – 3</td>
                      <td>Math lesson in Japanese or Mandarin</td>
                    </tr>
                    <tr>
                      <td>3 – 3:30</td>
                      <td>Snack and Recess in Japanese or Mandarin</td>
                    </tr>
                    <tr>
                      <td>3:30 – 4</td>
                      <td>Arts and Crafts in Japanese or Mandarin</td>
                    </tr>
                    <tr>
                      <td>4 – 4:30</td>
                      <td>Physical Education in Japanese or Mandarin</td>
                    </tr>
                    <tr>
                      <td>4:30 – 5</td>
                      <td>Music in Japanese or Mandarin</td>
                    </tr>
                    <tr>
                      <td>5 – 5:30</td>
                      <td>Story Time and Dramatic Play in Japanese or Mandarin</td>
                    </tr>
                    <tr>
                      <td>5:30 – 6</td>
                      <td>Recess and dismissal in Japanese or Mandarin</td>
                    </tr>
                  </tbody>
                </Table>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2">
              <Accordion.Header>Kindergarten</Accordion.Header>
              <Accordion.Body>
                God help us, we're in the hands of engineers. Eventually, you do plan to have dinosaurs on your dinosaur tour, right? So you two dig up, dig up dinosaurs? What do they got in there? King Kong? Just my luck, no ice. You're a very talented young man, with your own clever thoughts and ideas. Do you need a manager? Yeah, but John, if The Pirates of the Caribbean breaks down, the pirates don’t eat the tourists. God creates dinosaurs. God destroys dinosaurs. God creates Man. Man destroys God. Man creates Dinosaurs. God help us, we're in the hands of engineers. Must go faster... go, go, go, go, go!
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

export default Elementary;