import React from 'react';
import './challenge-view.styles.css';
import CHALLENGES_DATA from './challenges.data'
import Challenge from './../challenge/challenge.component'

class ChallengeView extends React.Component{
    constructor(props){
        super(props)

        this.state = {
            challenges: CHALLENGES_DATA
        };
        console.log(CHALLENGES_DATA)
    }

    render(){
        const {challenges} = this.state;
        return (
            <div className='challenge-view'>
                {
                    challenges.map(({id, ...OtherCollectionProps}) =>(
                        <Challenge key={id} {...OtherCollectionProps} />
                    ))
                }
            </div>
        )
    }
}

export default ChallengeView;