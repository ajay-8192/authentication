import React, { Component } from 'react';
import '../indexPage/styles.css';
import loginSVG from '../../login.svg';
import { Link } from 'react-router-dom';

class HomePage extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="main-container">
                <div className="container">
                    <div className="left-container">
                        <h1>Taskify helps teams work more collaboratively and get more done.</h1>
                        <p>Taskify’s boards, lists, and cards enable teams to organize and prioritize projects in a fun, flexible, and rewarding way.</p>
                    </div>
                    <div className="right-container">
                        <img src={ loginSVG } alt="task-management-demo-image"/>
                    </div>
                </div>
                <Link className="btn btn-danger" to="/login">Get Started</Link>
            </div>
        );
    }
}

export default HomePage;