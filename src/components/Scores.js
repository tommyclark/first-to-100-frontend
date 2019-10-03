import React, { Component } from 'react';
import * as Constants from '../constants'

class Scores extends Component {
    render() {
        return (
            <div className="App-body">
                <h2>{Constants.default.TEAMS[0].NAME}</h2>
                <p>
                    You got {Constants.default.TEAMS[0].SCORE} correct answers out of {Constants.default.TEAMS[0].CHALLENGE}.
                </p>
            </div>
        );
    }
}

export default Scores;