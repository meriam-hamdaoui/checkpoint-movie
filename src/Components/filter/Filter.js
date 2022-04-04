import React from 'react';
import {Form, FormControl, Button, Navbar} from 'react-bootstrap'


function Filter() {
  return (
    <div className='Filter'>
        <Navbar fixed='top' bg="dark" expand="lg">
            <Navbar.Brand style={{color : 'white'}} href="#home">Movie List</Navbar.Brand>
            <Form className="d-flex">
                <FormControl
                type="search"
                placeholder="Search a movie ..."
                className="me-2"
                aria-label="Search"
                />
                <Button className='btn btn-outline-primary' variant="outline-success" >Search</Button>                               
            </Form>
        </Navbar>
    </div>
  )
}

export default Filter