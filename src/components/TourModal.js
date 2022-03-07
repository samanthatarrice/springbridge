import React from 'react';
import {Modal, Button, Form} from 'react-bootstrap';

function TourModal(props) {
  return (
    <Modal className='tour-modal' show={props.tourModal} onHide={props.handleCloseTourModal}>
        <Modal.Header className='border-0' closeButton></Modal.Header>
        <Modal.Header className='pt-0'>
          <Modal.Title className='modal-title text-center w-100'>Schedule a tour today!</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className='' controlId='formBasicDate'>
              <Form.Label>Preferred Tour Date:</Form.Label>
              <Form.Control type='date' placholder='When would you like to tour?' />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button className='rounded-pill m-auto' onClick={props.handleCloseTourModal}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
  );
}

export default TourModal;