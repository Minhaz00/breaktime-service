import React from 'react';
import { NavLink } from 'react-router-dom';
import './Booking.css'
const Booking = () => {
    return (
        <div className='my-5 container booking'>
            <h1>Get an Appointment</h1>
            <input placeholder='Name' type="text"  required/><br />
            <input placeholder='Email' type="email" required/><br />
            <input placeholder='Phone' type='number' required/><br />
            <input placeholder='Catagory' type="text" required/><br />
            <input placeholder='Time' type='date' required /><br />
            <textarea placeholder='Message' name="" id="" cols="25" rows="5"></textarea>
            <br />
            <NavLink to='/submit'>Submit</NavLink>
        </div>
    );
};

export default Booking;