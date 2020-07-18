import React from 'react';
import './leaderboard.styles.css';
import SUBMITTERS from './submitters.data';

const Leaderboard = () => (
    <div className='leaderboard' id='leaderboard'>
        <h2>Leaderboard</h2>
        {SUBMITTERS.map(({id, name, points}) => {
            return(
                <div className='rankings'>
                    <h3 key={id}>{name}</h3>
                    <p>{points}</p>
                </div>
        )})}
    </div>
)

export default Leaderboard;