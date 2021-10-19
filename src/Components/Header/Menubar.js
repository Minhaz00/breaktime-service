import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import logo from '../../images/twitter_header_photo_1.jpg'
import './Menubar.css'
const Menubar = () => {
    const { user, logOut } = useAuth();
    return (
        <div>
            <Navbar bg="white" expand="lg">
                <Container className='d-flex .justify-content-end align-items-center'>
                    <img href="#home" className='w-25' src={logo} alt="" />
                    <div>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto menu ">
                            <NavLink to='/home'>Home</NavLink>
                            <NavLink to='/service'>Service</NavLink>
                            <NavLink to='/about'>About Us</NavLink>
                            <NavLink to='/Blogs'>Blogs</NavLink>
                            <NavLink to='/booking'>Booking</NavLink>
                            {
                                    user?.email ?
                                        <Button className='logout' onClick={logOut}
                                        variant="light">Logout</Button>
                                        :
                                        <Nav.Link as={Link} to="/register">Login/Register</Nav.Link>   
                            }
                            <Navbar.Text>
                            <a href="#login">{user?.displayName}</a>
                            </Navbar.Text>  
                        </Nav>
                        </Navbar.Collapse>
                    </div>
                </Container>
            </Navbar>
            
        </div>
    );
};

export default Menubar;