import React, { Fragment } from 'react';
import { Link } from 'react-router-dom'
import Helmet from 'react-helmet'


const Quizinstructions =()=> (
    <Fragment>
        <Helmet><title>Quiz Instruction - Quiz App</title></Helmet>
        <div className="instructions container">
            <h1>How to play the game</h1>
            <p>Ensure you read this guide from start to finish</p>
            <ul className="browser-default" id="main-list">
                <li>The game has a duration of 15minutes and ends  as soon as your time elapses.</li>
                <li>Each game consist of 15 questions.</li>
                <li>Every question contain 4 options.</li>
                <li>Select the option which best answers the question by clicking or selecting it.</li>
                <li>Each game has 2 lifelines namely.
                    <ul>
                        <li>2 50-50 chances</li>
                        <li>5 hints</li>

                    </ul>
                </li>
                <li>selecting the 50-59 lifeline by clicking the icon
                    <span className="mdi mdi-set-center mdi-24px lifeline-icon"></span>
                    will remove 2 wrong answers, leaving the correct answer and one wrong answer
                </li>
                <li>Using hint by clicking the icon
                <span className="mdi mdi-lightbulb-on mdi-24px lifeline-icon"></span>
                will remove 2 wrong answers, leaving the correct answer and one wrong answer
                </li>
                <li>feel free to quit or retire from the game at any time. In that case your score will be reveal</li>
                <li>the timer starts as soon as the game loads</li>
                <li>let do this if you think you 've got what it takes</li>
                 

            </ul>
            <div>
                <span className="left"><Link to="/">No take me back</Link></span>
                <span className="right"><Link to="/play/quiz">Okay let's do this</Link></span>
            </div>

        </div>
    </Fragment>
)

export default Quizinstructions;