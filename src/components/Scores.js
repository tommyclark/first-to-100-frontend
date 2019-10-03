import React, { Component } from 'react';
import * as Constants from '../constants'

class Scores extends Component {
    render() {
        return (
            <div className="App-body">
                <h2>{Constants.default.TEAMS[Constants.default.CURRENT_TEAM].NAME}</h2>
                <p>
                    You got {Constants.default.TEAMS[Constants.default.CURRENT_TEAM].SCORE} correct answers out of {Constants.default.TEAMS[Constants.default.CURRENT_TEAM].CHALLENGE}.
                </p>
            </div>
        );
    }
}

export default Scores;