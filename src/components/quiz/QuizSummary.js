import React, { Component, Fragment } from 'react'
import Helmet from 'react-helmet'
import { Link } from 'react-router-dom'

export default class QuizSummary extends Component {
    constructor(props) {
        super(props);
        this.state = {
            numberofQuestions: 0,
            numberOfAnsweredQuestions: 0,
            score: 0,
            correctAnswers: 0,
            wrongAnswers: 0,
            hintUsed: 0,
            fiftyFiftyUsed: 0
        }
    }

    componentDidMount() {
        const { state } = this.props.location;
        if (state) {
            this.setState({

                numberofQuestions: state.numberofQuestions,
                numberOfAnsweredQuestions: state.numberOfAnsweredQuestions,
                score: (state.score / state.numberofQuestions) * 100,
                correctAnswers: state.correctAnswers,
                wrongAnswers: state.wrongAnswers,
                hintUsed: state.hintUsed,
                usedfiftyfifty: state.usedfiftyfifty

            });
        }

    }
    render() {

        const { state, score } = this.props.location;
        let stats, remark;

        const userScore = this.state.score;

        if (userScore <= 30) {
            remark = 'You need more practice';
        } else if (userScore > 30 && score <= 50) {
            remark = 'Better luck next time';
        } else if (userScore > 50 && score <= 70) {
            remark = 'You can do better';
        } else if (userScore > 71 && score <= 84) {
            remark = 'Great work';
        } else {
            remark = 'You are absolutely genius';
        }

        if (state !== undefined) {
            stats = (
                <Fragment>
                    
                    <div className="center">
                        <span className="mdi mdi-check-circle-outline success-icon "></span>
                        <h1>Quiz has ended</h1>
                    </div>
                    
                    <div className="container">
                        <h4>{remark}</h4>
                        <h2>Your score is: {this.state.score.toFixed(0)}&#37;</h2>
                        <span className="stat left">Total number of question</span>
                        <span className="stat right"> {this.state.numberofQuestions} </span><br />

                        <span className="stat left">Number of attempted question</span>
                        <span className="stat right"> {this.state.numberOfAnsweredQuestions} </span><br />

                        <span className="stat left">Number of correct answer</span>
                        <span className="stat right"> {this.state.correctAnswers} </span><br />

                        <span className="stat left">Number of wrong answer</span>
                        <span className="stat right"> {this.state.wrongAnswers} </span><br />

                        <span className="stat left">Hint used</span>
                        <span className="stat right"> {this.state.hintUsed} of 5 used </span><br />

                        <span className="stat left">fiftyFifty Used</span>
                        <span className="stat right"> {this.state.usedfiftyfifty} of 2 used </span><br />
                    </div>
                    <section>
                        <ul>
                            <li>
                                <Link to="/" className="back">Back to Home</Link>
                            </li>
                            <li>
                                <Link to="/play/quiz" className="take" >Play again</Link>
                            </li>
                        </ul>
                    </section>
                </Fragment>
            );
        } else {
            stats = (

                <section>
                    <h1 className="no-stats"> No Stats please take the quiz</h1>
                    <ul>
                        <li>
                            <Link to="/" className="back"> Back to Home</Link>
                        </li>
                        <li>
                            <Link to="/play/quiz" className="take" >take a quiz</Link>
                        </li>
                    </ul>
                </section>

            )
        }
        return (
            <Fragment>
                <Helmet><title>Quiz App - Summary</title></Helmet>
                <div className="summary-container">
                    {stats}
                </div>
                
            </Fragment>
        )
    }
}
