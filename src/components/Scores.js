import React, { Component } from 'react';
import * as Constants from '../constants'
import {Link} from "react-router-dom";

class Scores extends Component {
    constructor(props) {
        super(props);
        if (Constants.default.TEAMS[0].SCORE > Constants.default.TEAMS[1].NAME) {
            Constants.default.TEAMS[0].TOTAL_SCORE++;
        } else if (Constants.default.TEAMS[1].SCORE > Constants.default.TEAMS[0].NAME) {
            Constants.default.TEAMS[1].TOTAL_SCORE++;
        }
    }

    render() {
        return (
            <div className="App-body">
                <h2>{Constants.default.TEAMS[0].NAME}</h2>
                <p>
                    You got {Constants.default.TEAMS[0].SCORE} correct answers out of {Constants.default.TEAMS[0].CHALLENGE}.
                </p>
                <p>
                    Your total score is {Constants.default.TEAMS[0].TOTAL_SCORE}.
                </p>
                <h2>{Constants.default.TEAMS[1].NAME}</h2>
                <p>
                    You got {Constants.default.TEAMS[1].SCORE} correct answers out of {Constants.default.TEAMS[1].CHALLENGE}.
                </p>
                <p>
                    Your total score is {Constants.default.TEAMS[0].TOTAL_SCORE}.
                </p>
                <h2>PLAY AGAIN!</h2>
                <p>
                    <Link to={'/challenge'} className="nav-link">Click here for another question.</Link>
                </p>
            </div>
        );
    }
}

export default Scores;