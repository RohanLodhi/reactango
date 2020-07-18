import React from 'react';
import './homepage.styles.css'
import ChallengeView from './../../components/challenge-view/challenge-view.component'
import Details from './../../components/details/details.component'
import Leaderboard from './../../components/leaderboard/leaderboard.component'

const HomePage = () => (
    <div> 
        <Details />
        <div className='href-leader'>
            <a href='#leaderboard'>
                <p>Go to Leaderboard</p>
            </a>
        </div>
        <div className='body'>
            <ChallengeView />
            <Leaderboard />
        </div>
    </div>
)

export default HomePage;
