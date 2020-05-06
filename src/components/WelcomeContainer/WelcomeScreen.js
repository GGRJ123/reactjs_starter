import React, { Component } from "react";
import Login from "../LoginContainer/Login";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";


class WelcomeScreen extends Component {
    render() {
        return (
            <div>
                <h3>React Welcome Component</h3>
                <Link to ={"/sign-in"}>
                    <button type="submit" className="btn btn-primary btn-block" 
                    >Get started</button>
                    </Link>
                
            </div>
            
        );
    }
}

export default WelcomeScreen;