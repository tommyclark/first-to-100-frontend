import React, { Component } from 'react';
import * as Constants from '../constants'

class Scores extends Component {
    render() {
        return (
            <div className="App-body">
                <h2>{Constants.default.TEAM_ONE.NAME}</h2>
                <p>
                    You got {Constants.default.TEAM_ONE.SCORE} correct answers out of {Constants.default.TEAM_ONE.CHALLENGE}.
                </p>
            </div>
        );
    }
}

export default Scores;