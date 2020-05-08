import React from "react";
import LoginButton from "../Buttons/LoginButton";
import SignupButton from "../Buttons/SignupButton";

function WelcomeScreen(){
        return (
            <div className = "welcome">
                <h3>Welcome!</h3>
                <LoginButton/>
                <SignupButton/>
                
            </div>    
        )
}

export default WelcomeScreen;