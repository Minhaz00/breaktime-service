import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import Header from '../Header/Header';
import IntroService from '../IntroService/IntroService';
import './Home.css'
import choose1 from '../../images/icon-img-1.png'
import choose2 from '../../images/icon-img-2.png'
import choose3 from '../../images/icon-img-3.png'
import choose4 from '../../images/icon-img-4.png'
import choose5 from '../../images/icon-img-5.png'
import choose6 from '../../images/icon-img-6.png'

const Home = () => {
    const [service, setService] = useState([]);
    useEffect(() => {
        fetch('./home.json')
            .then(res => res.json())
            .then(data => setService(data));
    },[])
    return (
        <div>
            <Header></Header>
            <h1 className='mt-5'>Explore Our services</h1>
            <small className='m-3 text-center'>Whether you’re looking to relax, relieve stress and tension, or improve circulation and energy, Breaktime has the right massage therapy for you. </small>
            <div className='intro container'>
                {
                    service.map(intro => <IntroService
                        key={intro.id}
                        intro={intro}
                    ></IntroService>)
                }
                
            </div>
            <div>
                <NavLink className='see-more' to='/service'>See More</NavLink>
            </div>
            <div className='home-appointment py-4 my-5'>
                <h1>15 Years of Quality Service in Acupuncture therapies</h1>
                <p>A wide range of procedures & Individual approach to patient. SPRAINS, STRAINS AND PAINS?Find an Specialist Therapists in Our Clinic</p>
                <div>
                    <h2>Opening Hours</h2>
                    <h4>Monday to Thursday</h4>
                    <p>9.30 am – 6.30 pm</p>
                    <h4>Friday to Sunday</h4>
                    <p>11.00 am – 5.00 pm</p>
                </div>
                <NavLink to='/booking'>Get an appointment</NavLink>
            </div>
            <div className='my-5 container'>
                <h1>Why People Choose Us</h1>
                <div className='choose'>
                        <div className='choose-point '>
                            <img src={choose1} alt="" />
                            <h4>Advanced Procedures</h4>
                            <p>Having a deeper understanding of advanced massage techniques will allow massage therapists to create effective treatment plans.</p>
                        </div>
                        <div className='choose-point '>
                            <img src={choose2} alt="" />
                            <h4>Most Effective Treatment</h4>
                            <p>Having a deeper understanding of advanced massage techniques will allow massage therapists to create effective treatment plans.</p>
                        </div>
                        <div className='choose-point '>
                            <img src={choose3} alt="" />
                            <h4>With a Touch of Kindness</h4>
                            <p>Having a deeper understanding of advanced massage techniques will allow massage therapists to create effective treatment plans.</p>
                        </div>
                        <div className='choose-point '>
                            <img src={choose4} alt="" />
                            <h4>Friendly Atmosphere</h4>
                            <p>Having a deeper understanding of advanced massage techniques will allow massage therapists to create effective treatment plans.</p>
                        </div>
                        <div className='choose-point '>
                            <img src={choose5} alt="" />
                            <h4>Certified Therapist</h4>
                            <p>Having a deeper understanding of advanced massage techniques will allow massage therapists to create effective treatment plans.</p>
                        </div>
                        <div className='choose-point'>
                            <img src={choose6} alt="" />
                            <h4>Individual Approach</h4>
                            <p>Having a deeper understanding of advanced massage techniques will allow massage therapists to create effective treatment plans.</p>
                        </div>
                </div>
            </div>
            <div>
                <h1 className='mt-5 mb-4'>Package & Pricing Table</h1>
                <div className='pricing container'>
                    <div className='package'>
                        <h5>BASIC</h5>
                        <h2>$ 109/mo</h2>
                        <p>2 days / week</p>
                        <p>40 minutes / day</p>
                        <p>1 day Counselling </p>
                        <button>BUY NOW</button>
                    </div>
                    <div className='package'>
                        <h5>STANDARD</h5>
                        <h2>$ 199/mo</h2>
                        <p>3 days / week</p>
                        <p>45 minutes / day</p>
                        <p>2 day Counselling </p>
                        <button>BUY NOW</button>
                    </div>
                    <div className='package'>
                        <h5>PREMIUM</h5>
                        <h2>$ 259/mo</h2>
                        <p>4 days / week</p>
                        <p>40 minutes / day</p>
                        <p>3 day Counselling </p>
                        <button>BUY NOW</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;