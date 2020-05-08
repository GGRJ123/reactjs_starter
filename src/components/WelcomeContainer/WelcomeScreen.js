import React, { Component } from "react";
import Login from "../LoginContainer/Login";
import LoginButton from "../Buttons/LoginButton";
import SignupButton from "../Buttons/SignupButton";

class WelcomeScreen extends Component {
    render() {
        return (
            <div>
                <h3>React Welcome Component</h3>
                <LoginButton/>
                <SignupButton/>
                
            </div>
            
        );
    }
}

export default WelcomeScreen;