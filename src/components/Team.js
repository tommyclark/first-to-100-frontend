import React, { Component } from 'react';
import { Button,  Form } from 'react-bootstrap';
import * as Constants from "../constants";

class Team extends Component {

    constructor(props) {
        super(props);
        this.state = { teamName: '' };
    }

    mySubmitHandler = (event) => {
        event.preventDefault();
        Constants.default.TEAM_ONE.NAME = this.state.teamName;
        this.props.history.push("/challenge")
    };

    myChangeHandler = (event) => {
        this.setState({teamName: event.target.value});
    };

    render() {
        return (
            <div className="App-body">
                <Form onSubmit={this.mySubmitHandler}>
                    <Form.Group controlId="formEnterTeamName">
                        <Form.Label>Team Name</Form.Label>
                        <Form.Control onChange={this.myChangeHandler} placeholder="Enter team name" />
                        <Form.Text className="text-muted">
                            Pick your team's name.
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

export default Team;