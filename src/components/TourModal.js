import React from 'react';
import {Modal, Button, Form} from 'react-bootstrap';

function TourModal(props) {
  return (
    <Modal className='tour-modal' show={props.tourModal} onHide={props.handleCloseTourModal} size='sm' >
        <Modal.Header className='border-0' closeButton></Modal.Header>
        <Modal.Header className='pt-0'>
          <Modal.Title className='modal-title text-center w-100'>Schedule a tour today!</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form id='tour-form'>
            <Form.Group controlId='formBasicDate'>
              <Form.Label>Preferred Tour Date:</Form.Label>
              <Form.Control type='date' name='date' onChange={props.handleTourFormChange} value={props.tourFormData.date} />
            </Form.Group>
            <Form.Group className='mt-2' controlId='formBasicName'>
              <Form.Label>Child's Name:</Form.Label>
              <Form.Control type='text' name='name' onChange={props.handleTourFormChange} value={props.tourFormData.name} placeholder="What's your child's full name?" />
            </Form.Group>
            <Form.Group className='mt-2' controlId='formBasicEmail'>
              <Form.Label>Email:</Form.Label>
              <Form.Control type='email' name='email' onChange={props.handleTourFormChange} value={props.tourFormData.email} placeholder="Parent's email" />
            </Form.Group>
            <Form.Group className='mt-2' controlId='formBasicTel'>
              <Form.Label>Phone Number:</Form.Label>
              <Form.Control type='tel' name='phone' onChange={props.handleTourFormChange} value={props.tourFormData.phone} placeholder="Your number" />
            </Form.Group>
            <Form.Group className='mt-2' controlId='formBasicNumber'>
              <Form.Label>Child's Age:</Form.Label>
              <Form.Control type='number' name='age' onChange={props.handleTourFormChange} value={props.tourFormData.age} min='0' max='14'/>
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button form='tour-form' className='tour-form-btn rounded-pill m-auto btn-lg border-0 w-100' onClick={props.handleTourFormSubmit}>
            Submit Request
          </Button>
        </Modal.Footer>
      </Modal>
  );
}

export default TourModal;