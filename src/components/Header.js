import React, {useState} from 'react';
import {Navbar, Container, Nav, NavDropdown, Offcanvas, Form, FormControl, Button, Modal} from 'react-bootstrap';
import TourForm from './TourForm';

function Header() {

  const [tourModal, setTourModal] = useState(false);

  const [tourFormData, setTourFormData] = useState({
    date: '',
    name: '',
    email: '',
    phone: '',
    age: ''
  })

  const handleCloseTourModal = () => setTourModal(false);
  const handleShowTourModal = () => setTourModal(true);
  
  const handleTourFormChange = (event) => {
    const {name, value} = event.target
    setTourFormData(prevTourFormData => {
        return {
            ...prevTourFormData,
            [name]: value
        }
    })
  }
  
  const handleTourFormSubmit = (event) => {
    event.preventDefault();
    console.log(tourFormData);
    handleCloseTourModal();
  }

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
              <Form className='d-flex my-3 container-fluid px-0'>
                <FormControl
                  className='me-2'
                  type='search'
                  placeholder='Search'
                  aria-label='Search'
                />
                <Button className='rounded-pill px-3' variant='outline-light'>Search</Button>
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
              <Button className='tour-btn rounded-pill p-3 my-auto w-100 mt-4' onClick={handleShowTourModal}>Schedule a tour!</Button>

              <Modal className='tour-modal' show={tourModal} onHide={handleCloseTourModal} size='sm' >
                <Modal.Header className='border-0' closeButton></Modal.Header>
                <Modal.Header className='pt-0'>
                  <Modal.Title className='modal-title text-center w-100'>Schedule a tour today!</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <TourForm 
                    tourFormData={tourFormData}
                    handleTourFormChange={handleTourFormChange}
                  />
                </Modal.Body>
                <Modal.Footer>
                  <Button form='tour-form' className='tour-form-btn rounded-pill m-auto btn-lg border-0 w-100 my-2' onClick={handleTourFormSubmit}>
                    Submit Request
                  </Button>
                </Modal.Footer>
              </Modal>  
            </div>
          </div>
        </div>
      </div>
      
    </header>
  );
}

export default Header;
