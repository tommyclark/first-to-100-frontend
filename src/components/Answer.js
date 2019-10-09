import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Button,  Form } from 'react-bootstrap';
import axios from 'axios';
import * as Constants from '../constants'
import Countdown, {zeroPad} from 'react-countdown-now';

class Answer extends Component {
    constructor(props) {
        super(props);

        this.state = { countdownRenderer: '', timeLeft: '' };

        const Completionist = () => {
            if (Constants.default.TEAMS.length - 1 <= Constants.default.CURRENT_TEAM) {
                Constants.default.CURRENT_TEAM = 0;
                this.props.history.push("/scores");
            } else {
                Constants.default.CURRENT_TEAM++;
                this.setState({timeLeft: Date.now() + 300000});
            }
            return (
                <div>Time up</div>
            );
        };

        this.state.timeLeft = Date.now() + 300000;
        this.state.countdownRenderer = ({minutes, seconds, completed }) => {
            if (completed) {
                return <Completionist />;
            } else {
                return <span>{zeroPad(minutes, 2)}:{zeroPad(seconds, 2)}</span>;
            }
        };
    }

    mySubmitHandler = (event) => {
        event.preventDefault();

        axios.post(`${Constants.default.BASE_URL}/question/${window.question.questionId}`, {
            answer: this.state.answer,
        })
        .then(response => {
            Constants.default.TEAMS[Constants.default.CURRENT_TEAM].SCORE++;
            this.forceUpdate();
            if (Constants.default.TEAMS[Constants.default.CURRENT_TEAM].SCORE >= Constants.default.TEAMS[Constants.default.CURRENT_TEAM].CHALLENGE) {
                this.props.history.push("/scores");
            }
        })
        .catch(function (error) {
            console.log(error);
        });

        ReactDOM.findDOMNode(this.answerField).value = "";
    };

    myChangeHandler = (event) => {
        this.setState({answer: event.target.value});
    };

    render() {
        return (
            <div className="App-body">
                <div className="top-left">
                    <Countdown key={this.state.timeLeft} date={this.state.timeLeft} renderer={this.state.countdownRenderer}>
                    </Countdown>
                </div>
                <div className="top-right">
                    Score: {Constants.default.TEAMS[Constants.default.CURRENT_TEAM].SCORE} / {Constants.default.TEAMS[Constants.default.CURRENT_TEAM].CHALLENGE}
                </div>
                <Form onSubmit={this.mySubmitHandler}>
                    <Form.Group controlId="formEnterTeamName">
                        <h1>A question for {Constants.default.TEAMS[Constants.default.CURRENT_TEAM].NAME}</h1>
                        <Form.Label>{window.question.question}</Form.Label>
                        <Form.Control ref={ form => this.answerField = form }
                                      onChange={this.myChangeHandler} placeholder="Enter your answer" />
                    </Form.Group>

                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
            </div>
        );
    }
}

export default Answer;