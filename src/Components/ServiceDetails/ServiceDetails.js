import React from 'react';
import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom'
import './ServiceDetails.css'

const ServiceDetails = () => {
    const {Id} = useParams();
    const [details, setDetails] = useState([]);
    const [singleDetails, setSingleDetails] = useState({});
    let seeDetails;
    useEffect(() => {
        fetch('/home.json')
            .then(res => res.json())
            .then(data => setDetails(data));
    }, []);

    console.log(details);

    useEffect(() => {
        for (const detail of details) {
            if(detail.id == Id){
                setSingleDetails(detail);
            }
        }
    }, [details])
    console.log(singleDetails);
    return (
        <div>
            <div className='container border border-2'>
                <div>
                    <img className='single-img my-5' src={singleDetails.url} alt="" />
                    <h1 className=''>{singleDetails.name}</h1>
                    <h1>Price: ${singleDetails.price}</h1>
                </div>
                <div>
                    <p className='w-75 text-start mx-auto'>{singleDetails.description}</p>
                </div>
                <div  className='get-appointment mb-5'>
                    <Link to='/booking'>Get an appointment</Link>
                </div>
                    
                
                
            </div>
        </div>
    );
};

export default ServiceDetails;