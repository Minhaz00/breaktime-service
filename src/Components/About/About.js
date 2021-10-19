import React, { useEffect, useState } from 'react';
import Person from '../Person/Person';
import './About.css'
const About = () => {
    const [theraspist, setTherapist] = useState([]);
    useEffect(() => {
        fetch('./therapists.json')
            .then(res => res.json())
            .then(data => setTherapist(data));
    },[])
    return (
        <div>
            <div className='container my-5'>
                <h1>Our Mission</h1>
                <p className='mission'>Our Vision is to be the Wellness Spa of choice offering a preventive lifestyle that will add value to our clients and staff.To provide therapy to all people in order to relieve stress and tension, to improve range of motion and circulation, to enhance a state of well-being and offer a preventive lifestyle through all services provided by the spa in a professional manner.</p>
            </div>
            
            <div className='my-5'>
                <h1>Our Therapists</h1>
                <div className='therapists mt-4 container'>
                    {
                        theraspist.map(person => <Person
                            key={person.id}
                            person={person}
                        ></Person>)
                    }
                </div>
            </div>

            <div className='my-5 py-5'>
                <div className='about-counter container'>
                    <div className=''>
                        <h4 className=''>40</h4>
                        <p>Therapists</p>
                    </div>
                    <div className=''>
                        <h4 className=''>750+</h4>
                        <p>Clients</p>
                    </div>
                    <div className=''>
                        <h4 className=''>100+</h4>
                        <p>Treatments</p>
                    </div>
                    
                </div>
            </div>
        </div>
    );
};

export default About;



// const team = [
//     {
//         id:1,
//         name: "Mery Linda Joseph",
//         imgUrl: 'https://i1.sndcdn.com/artworks-000088448563-l8arb8-t500x500.jpg'

//     },
//     {
//         id:2,
//         name: "Karl Figueroa",
//         imgUrl: 'https://i.pinimg.com/236x/d9/a6/34/d9a634a24b959526f311ba382f5762cd.jpg'

//     },
//     {
//         id:3,
//         name: "Olive Day",
//         imgUrl: 'https://www.organics-beauty.com/img/img_therapist_shizuka.jpg'

//     },
//     {
//         id:4,
//         name: "Shirley Morris",
//         imgUrl: 'https://i1.sndcdn.com/artworks-000088448563-l8arb8-t500x500.jpg'

//     },
//     {
//         id:5,
//         name: "Danielle Carroll",
//         imgUrl: 'https://seoulcounseling.com/wp-content/uploads/2020/07/chad-profile-2-0x0.jpg'

//     },
//     {
//         id:6,
//         name: "Samantha Robinson",
//         imgUrl: 'https://jaxtherapynetwork.com/wp-content/uploads/2021/03/708666-2127765-3_320x400.jpg'

//     },
// ]
