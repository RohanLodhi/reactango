import React from 'react';
import './404-not-found.styles.css';
import logo from './../../assets/404.png';

const NotFound = () => (
    <div className='not-found-wrapper'>
        <div className='not-found-image'>
            <img src={logo} alt='404 not found'></img>
        </div>
        <div className='not-found-details'>
            <h1>404</h1>
            <h2>UH OH! Looks like you're lost.</h2>
            <p>The page you're looking for doesn't exist. How you got here is a mystery, but you can click on the header to go back to the homepage.</p>
        </div>
    </div>
)

export default NotFound;