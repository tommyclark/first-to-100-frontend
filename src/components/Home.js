import React, { Component } from 'react';
import logo from "../logo.svg";
import {Link} from "react-router-dom";
import axios from "axios";
import * as Constants from "../constants";

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = { loadingFinished: false };


        axios.get(`${Constants.default.BASE_URL}/health`)
            .then(response => {
                this.setState({loadingFinished: true});
                this.forceUpdate();
            });
    }

    render() {
        const loadingFinished = this.state.loadingFinished;

        let loadingBar;
        if (loadingFinished) {
            loadingBar = <Link to={'/team'} className="nav-link">Play the game</Link>;
        } else {
            loadingBar = "Loading...";
        }

        return (
            <div className="App-body">
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                    {loadingBar}
                </p>
            </div>
        );
    }
}

export default Home;