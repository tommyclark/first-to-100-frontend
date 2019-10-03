import React, { Component } from 'react';
import { Button,  Form } from 'react-bootstrap';
import axios from 'axios';
import * as Constants from '../constants'

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
        Constants.default.TEAMS[0].CHALLENGE = this.state.answer;
        this.props.history.push("/answer")
    };

    myChangeHandler = (event) => {
        this.setState({answer: event.target.value});
    };

    render() {
        return (
            <div className="App-body">
                <Form onSubmit={this.mySubmitHandler}>
                    <Form.Group controlId="formEnterTeamName">
                        <h1>{Constants.default.TEAMS[0].NAME}</h1>
                        <Form.Label>{window.question.question}</Form.Label>
                        <Form.Control onChange={this.myChangeHandler} placeholder="How many could you name?" />
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