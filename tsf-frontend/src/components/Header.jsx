import React from "react";
import {NavLink} from "react-router-dom";
import logo from '../assets/gears-logo.gif';
import '../style/header.sass';

function Header() {
    return (
        <nav id='mainNav' className="navbar navbar-expand navbar-dark bg-dark fixed-top">
            <div className="container-fluid">
                <a className="navbar-brand js-scroll-trigger">
                    <img src={logo} alt="HMF Logo" width='50px'/>
                    &nbsp; <span id='navTitle' className='align-middle'>HybridMetricsFramework</span>
                </a>

                <ul className="navbar-nav ml-auto text-uppercase">
                    <li className="nav-item mx-0 mx-lg-1 ">
                        <NavLink className="nav-link" to="/">
                            Run
                        </NavLink>
                    </li>
                    <li className="nav-item mx-0 mx-lg-1">
                        <NavLink className="nav-link" to="/tasks">
                            Tasks
                        </NavLink>
                    </li>
                    <li className="nav-item mx-0 mx-lg-1">
                        <NavLink className="nav-link" to="/results">
                            Results
                        </NavLink>
                    </li>
                    <li className="nav-item mx-0 mx-lg-1">
                        <NavLink className="nav-link" to="/guide">
                            Guide
                        </NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Header;
