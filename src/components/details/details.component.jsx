import React from 'react';
import './details.styles.css'
import img from './../../assets/croods.png';

const Details = () => (
    <div className='details'>
        <div className='image'>
            <img src={img} alt='Hello There :)'></img>
        </div>
        <div className='text-content'>
            <p>Hi! I'm Litomayez and this website is for the weekly coding challenges that are conducted on my discord server. A chill, laid-back and recently made programming server. It is aimed to help people who know programming and teach those who don't. All are welcome here! Click on the button below to join :)</p>
            <div className="wrapper">
                <a href='https://discord.gg/uWhgpaY'>
                    <button>
                        Join Now
                    </button>
                </a>
            </div>
        </div>
    </div>
)

export default Details;