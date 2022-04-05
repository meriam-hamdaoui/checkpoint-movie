import React, { useState } from 'react';
import {Modal, Form, Button } from 'react-bootstrap';

function AddMovie({addToList}) {
    const [show, setShow] = useState(false);
    const [title, setTitle] = useState('');
    const [year, setYear] = useState('');
    const [description, setDescription] = useState('');
    const [posterURL, setPosterURL] = useState('');
    const [rating, setRating] = useState('');
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleClick = () => {
        handleClose();
        addToList({title,year,description,posterURL,rating});
    }
  
    return (
      <> 
       <Button variant="primary" onClick={handleShow}>+</Button> 
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body>
              <Form>
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Movie Title</Form.Label>
                    <Form.Control onChange={(e) => setTitle(e.target.value)}/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Movie release Year</Form.Label>
                    <Form.Control onChange={(e) => setYear(e.target.value)}/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Label>URL movie poster</Form.Label>
                    <Form.Control onChange={(e) => setPosterURL(e.target.value)}/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Label>movie description</Form.Label>
                    <Form.Control onChange={(e) => setDescription(e.target.value)}/>
                </Form.Group>                
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Label>rating</Form.Label>
                    <Form.Control onChange={(e) => setRating(e.target.value)}/>
                </Form.Group>
              </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={handleClick}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
  
  export default AddMovie;