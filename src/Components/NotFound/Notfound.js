import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import './Notfound.css'
const Notfound = () => {
    return (
        <div className=''>
            <Container className='notfound'>
                <Row className='mx-auto menu mt-3'>
                    <Col xs={1} md={1}> 
                    </Col>
                    <Col xs={10} md={10}>
                        <h1>404</h1>
                        <h4>Page Not Found!</h4>
                        <NavLink to='/home'><button>Back to Home</button></NavLink>
                    </Col>
                    <Col xs={1} md={1}>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Notfound;