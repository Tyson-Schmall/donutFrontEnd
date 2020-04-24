import React, { Component } from 'react';
import { Link } from "react-router-dom";

import holeLogo from "../images/holeLogo.png";


export default class NavigationContainer extends Component {
    constructor() {
        super();

    }

    render() {
        return (
            <div className="navigation-wrapper">
                {/* <div className='page-title'>
                    <p>Welcome to Hole Foods! Your local donut shop.</p>
                </div> */}

                <div className='logo'>
                    <img src={holeLogo} />
                </div>

                <div className="links-wrapper">
                    <Link to="/">Home</Link>
                    <Link to="/add_donut">Add Listing</Link>
                </div>
            </div>
        )
    }
}