import React from 'react';
import { Link } from 'react-router-dom';
import './IntroService.css'
const IntroService = (props) => {
    const { id, name, url, description } = props.intro;
    console.log(description);
    return (
        <div>
            <div className='introService'>
                <img src={url} alt="" />
                <div>
                    <h4 className='mt-3'>{name}</h4>
                    <p>{description}</p>
                    <Link to={`/serviceDetails/${id}`}>View Details</Link>
                </div>
            </div>
        </div>
    );
};

export default IntroService;