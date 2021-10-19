import React from 'react';
import './Person.css';
import icon1 from '../../images/5365678_fb_facebook_facebook logo_icon.png'
import icon2 from '../../images/5296765_camera_instagram_instagram logo_icon.svg'
const Person = (props) => {
    const { name, imgUrl } = props.person;
    return (
        <div>
            <div className='person'>
                <img src={imgUrl} alt="" />
                <h4>{name}</h4>
                <div className='social'>
                    <a href="/"><img src={icon1} alt="" /></a>
                    <a href="/"><img src={icon2} alt="" /></a>
                </div>
            </div>
        </div>
    );
};

export default Person;