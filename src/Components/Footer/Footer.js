import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import logo from '../../images/twitter_header_photo_1.jpg'
import './Footer.css'
import icon1 from '../../images/5365678_fb_facebook_facebook logo_icon.png'
import icon2 from '../../images/5296765_camera_instagram_instagram logo_icon.svg'
import icon3 from '../../images/5296521_play_video_vlog_youtube_youtube logo_icon.png'
import icon4 from '../../images/5296520_bubble_chat_mobile_whatsapp_whatsapp logo_icon.svg'
const Footer = () => {
    return (
        <div>
            <hr />
            <img className='w-25' src={logo} alt="" />
            <Container className=''>
                <Row className='mx-auto menu mt-3 mx-5'>
                    <Col xs={12} md={1}>
                        
                    </Col>
                    <Col xs={12} md={2}>
                    <NavLink to='/home'>Home</NavLink>
                    </Col>
                    <Col xs={12} md={2}>
                    <NavLink to='/service'>Service</NavLink>
                    </Col>
                    <Col xs={12} md={2}>
                    <NavLink to='/about'>About Us</NavLink>
                    </Col>
                    <Col xs={12} md={2}>
                    <NavLink to='/Blogs'>Blogs</NavLink>
                    </Col>
                    <Col xs={12} md={2}>
                    <NavLink to='/booking'>Booking</NavLink>
                    </Col>
                    <Col xs={12} md={1}>
                   
                    </Col>
                </Row>
                <Row className='mt-3 social'>
                    <a href="https://www.google.com/"><img src={icon1} alt="" /></a>
                    <a href="https://www.google.com/"><img src={icon2} alt="" /></a>
                    <a href="https://www.google.com/"><img src={icon3} alt="" /></a>
                    <a href="https://www.google.com/"><img src={icon4} alt="" /></a>
                </Row>
                <Row className='mt-3 mb-3'>
                    <small>&copy;Copyright 2021 | Breaktime.</small>
                </Row>
                
            </Container>
        </div>
    );
};

export default Footer;