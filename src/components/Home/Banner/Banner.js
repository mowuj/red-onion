import { Button } from 'bootstrap';
import React from 'react';
import { Form, FormControl } from 'react-bootstrap';
import './Banner.css'
const Banner = () => {
    return (
        <div className='container banner  d-flex flex-column justify-content-center align-items-center'>
            <h2>Best Food Waiting For your belly</h2>
            <div className='rounded-2  '>                            
            <Form className="d-flex w-100 mx-auto">
            <FormControl
          type="search"
          placeholder="Search"
          className="me-2"
          aria-label="Search"
        />
        <button className='outline-success'>Search</button>
      </Form>
            </div>
        </div>
    );
};

export default Banner;