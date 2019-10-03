import React, { Component } from 'react';
import { Button,  Form } from 'react-bootstrap';
import * as Constants from "../constants";
import ReactDOM from "react-dom";

class Team extends Component {

    constructor(props) {
        super(props);
        this.state = { teamName: '' };
    }

    mySubmitHandler = (event) => {
        event.preventDefault();
        Constants.default.TEAMS[Constants.default.CURRENT_TEAM].NAME = this.state.teamName;

        if (Constants.default.TEAMS.length - 1 <= Constants.default.CURRENT_TEAM) {
            Constants.default.CURRENT_TEAM = 0;
            this.props.history.push("/challenge")
        } else {
            Constants.default.CURRENT_TEAM++;
            ReactDOM.findDOMNode(this.teamNameField).value = "";
        }
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
                        <Form.Control ref={ form => this.teamNameField = form }
                                      onChange={this.myChangeHandler} placeholder="Enter team name" />
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