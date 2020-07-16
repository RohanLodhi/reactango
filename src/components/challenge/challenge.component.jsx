import React from 'react';
import './challenge.styles.css';
import { Link } from 'react-router-dom';

const Challenge = ({number, title, author, questions, submissions, difficulty, solution}) => (
    <div className='challenge'>
        <div className='content'>
            <h3>
                <Link to={`/` + number}>{title.toUpperCase()}</Link>
            </h3>
            <p>Difficulty: <b>
                {difficulty}
                </b>
            </p>
            <p>
                {questions[0]}
            </p>
            <p>
                {questions[questions.length-1]}
            </p>
            <span>
                Author: {author}
            </span> <br /> <br />
            <span>
                Submissions: {submissions.length}
            </span>
        </div>
    </div>
)

export default Challenge;