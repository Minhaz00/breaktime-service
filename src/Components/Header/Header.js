import React from 'react';
import { Carousel } from 'react-bootstrap';
import img1 from '../../images/herbal-compress-herbal-spa-treatment-equipments-put-dark-floor.jpg'
import img2 from '../../images/FB-AMF-7.25.17-SM.webp'
import img3 from '../../images/christin-hume-0MoF-Fe0w0A-unsplash.jpg'
import './Header.css'


const Header = () => {
    return (
        <div>
            <Carousel className='carousel-container'>
                <Carousel.Item>
                    <img
                    className="d-block w-100 carousel"
                    src={img1}
                    alt="First slide"
                    />
                    <Carousel.Caption>
                    <h1>Keep your health.Feel alive again.</h1>
                    <h1>Essential Balance, Massage and Wellness.</h1>
                    <p>The professional hands you can trust.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={img2}
                    alt="Second slide"
                    />

                    <Carousel.Caption>
                    <h1>Electroacupuncture, Auriculoterapia, Moxibustion, Cupping and many more...</h1>
                    <p>Most effective treatment by certified therapist</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={img3}
                    alt="Third slide"
                    />

                    <Carousel.Caption>
                    <h1>SPRAINS, STRAINS AND PAINS?</h1>
                    <p>Find an Specialist Therapists in Our Clinic</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    )
};

export default Header;