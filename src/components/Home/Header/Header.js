import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { BsFillCartCheckFill } from "react-icons/bs";
import logo2 from '../../../images/logo2.png'
const Header = () => {
    return (
        <div className='container'>
            <>

  <Navbar bg="white" variant="light" >
    <Container>
        <Navbar.Brand as={Link} to="/">
            <img height={30} src={logo2} alt="" />
    </Navbar.Brand>
    
    
    <Nav.Link className='ms-auto text-black' as={Link} to='/login'>
        <BsFillCartCheckFill></BsFillCartCheckFill>
    </Nav.Link>
    <Nav.Link className='text-black' as={Link} to='/login'>
        Login
        </Nav.Link>
        <button className='btn btn-link bg-info text-black text-decoration-none'>Signout</button>
    </Container>
  </Navbar>
</>
        </div>
    );
};

export default Header;