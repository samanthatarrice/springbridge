import React from 'react';
import {Navbar, Container, Nav, NavDropdown, Offcanvas, Form, FormControl, Button} from 'react-bootstrap';

function Header() {
  return (
    <header>
      <Navbar expand={false} collapseOnSelect fixed='top'>
        <Container fluid>
          <Navbar.Brand href='#'>
            <img className='logo-sm' src='./images/logo-sm.png' />
            <span className='school-name d-sm-none d-md-inline'>Springbridge</span>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls='offcanvasNavbar' />
          <Navbar.Offcanvas
            id='offcanvasNavbar'
            aria-labelledby='offcanvasNavbarLabel'
            placement='end'
            scroll={true}
          >
            <Offcanvas.Header closeButton closeLabel='Close' closeVariant='white'>
              <Offcanvas.Title id='offcanvasNavbarLabel'>Springbridge</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className='justify-content-end flex-grow-1 pe-3'>
                <Nav.Link href='#about'>About</Nav.Link>
                <NavDropdown title='Academics' id='offcanvasNavbarDropdown'
                menuVariant='dark'>
                  <NavDropdown.Item href='#overview'>Bilingual Program Overview</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href='#japanese'>Japanese Program 🇯🇵</NavDropdown.Item>
                  <NavDropdown.Item href='#mandarin'>Mandarin Program 🇨🇳</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href='#prek-kinder'>
                    Preschool﹣Kindergarten
                  </NavDropdown.Item>
                  <NavDropdown.Item href='#elementary'>
                    Elementary School
                  </NavDropdown.Item>
                  <NavDropdown.Item href='#middle'>
                    Middle School
                  </NavDropdown.Item>
                </NavDropdown>
                <Nav.Link href='#admissions'>{'Admissions & Tuition'}</Nav.Link>
                <Nav.Link href='#calendar'>Calendar</Nav.Link>
                <Nav.Link href='#staff'>{'Staff & Employment'}</Nav.Link>
                <Nav.Link href='#faq'>FAQ</Nav.Link>
              </Nav>
              <Form className='d-flex my-3'>
                <FormControl
                  type='search'
                  placeholder='Search'
                  className='me-2'
                  aria-label='Search'
                />
                <Button className='rounded-pill' variant='outline-light'>Search</Button>
              </Form>
              <Button className='mt-3 rounded-pill p-3 w-50' variant='light'>School Portal</Button>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
      <div className='hero container-fluid d-flex flex-column-reverse flex-lg-row'>
        <div className='col-lg-6 p-0'>
          <img className='w-100' src='./images/kids-field.jpg' />
        </div>
        <div className='col-lg-6 p-5 d-flex align-items-center'>
          <div className='d-flex align-items-center justify-content-center'>
            <img className='owl' src='./images/owl.png' />
            <div className='p-2 text-center'>
              <h1>Springbridge</h1>
              <h2>International School</h2>
              <h3>Bilingual Education</h3>
              <Button className='enrollment-btn rounded-pill p-3 my-auto w-100 d-md-block d-none mt-4'>{'Enrollment & Tours'}</Button>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header;
