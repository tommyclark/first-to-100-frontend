import React, { Component } from 'react';
import logo from "../logo.svg";
import {Link} from "react-router-dom";

class Home extends Component {
    render() {
        return (
            <div className="App-body">
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                    <Link to={'/team'} className="nav-link">Play the game</Link>
                </p>
            </div>
        );
    }
}

export default Home;