import React, { Component } from 'react';
import { Button,  Form } from 'react-bootstrap';
import axios from 'axios';
import * as Constants from '../constants'
import ReactDOM from "react-dom";

class Challenge extends Component {

    constructor(props) {
        super(props);
        window.question = { question: '' };

        axios.get(`${Constants.default.BASE_URL}/question`)
            .then(response => {
                window.question = response.data;
                this.forceUpdate();
            });
    }

    mySubmitHandler = (event) => {
        event.preventDefault();
        Constants.default.TEAMS[Constants.default.CURRENT_TEAM].CHALLENGE = this.state.answer;

        if (Constants.default.TEAMS.length - 1 <= Constants.default.CURRENT_TEAM) {
            Constants.default.CURRENT_TEAM = 0;
            this.props.history.push("/answer")
        } else {
            Constants.default.CURRENT_TEAM++;
            ReactDOM.findDOMNode(this.challengeField).value = "";
            this.forceUpdate()
        }
    };

    myChangeHandler = (event) => {
        this.setState({answer: event.target.value});
    };

    render() {
        return (
            <div className="App-body">
                <Form onSubmit={this.mySubmitHandler}>
                    <Form.Group controlId="formEnterTeamName">
                        <h1>{Constants.default.TEAMS[Constants.default.CURRENT_TEAM].NAME}</h1>
                        <Form.Label>{window.question.question}</Form.Label>
                        <Form.Control ref={ form => this.challengeField = form }
                                      onChange={this.myChangeHandler} placeholder="How many could you name?" />
                        <Form.Text className="text-muted">
                            Enter the number of answers you could name. Whoever has the most answers wins.
                        </Form.Text>
                    </Form.Group>

                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
            </div>
        );
    }
}

export default Challenge;