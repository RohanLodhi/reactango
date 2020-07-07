import React from 'react';
import './challenge-page.styles.css'
import { useParams } from 'react-router-dom';
import CHALLENGES_DATA from './../../components/challenge-view/challenges.data'
import EmbeddedGist from './../../components/embed-gist/embed-gist.component'

const ChallengePage = () => {
    let {id} = useParams();
    let challengeToRender = [];
    CHALLENGES_DATA.forEach(challenge => {
        if(challenge.id === parseInt(id)){
            challengeToRender = challenge;
            console.log(challengeToRender)
        }
    })

    return(
        <div className='challenge-body'>
            <h1>{challengeToRender.title}</h1>
            <span>By {challengeToRender.author}</span>
            <br /> <br /> <br />
            <div className='question'>
                {challengeToRender.questions.map(question =>(
                    <p>{question} </p>
                ))}
            </div>
            <div className='answer'>
                <h2>Answer: {challengeToRender.answer}</h2>
            </div>
            <h2>Solution: </h2>
            <EmbeddedGist gist={challengeToRender.solution}></EmbeddedGist>
            <br></br><br></br>
            <h2>Submissions: </h2>
            {challengeToRender.submissions.map(submission =>(
                    <p><a href={submission.link}>{submission.name}</a></p>
                ))}
        </div>
    )
}

export default ChallengePage;