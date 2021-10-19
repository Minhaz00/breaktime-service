import React from 'react';
import { Link } from 'react-router-dom';
const Blog = (props) => {
    const { name, url, description, title } = props.blog;
    return (
        <div>
            <div className='introService'>
                <img src={url} alt="" />
                <div>
                    <h4 className='mt-3'>{name}</h4>
                    <p>{description}</p>
                    <Link to='/home'>Read More</Link>
                </div>
            </div>
        </div>
    );
};

export default Blog;