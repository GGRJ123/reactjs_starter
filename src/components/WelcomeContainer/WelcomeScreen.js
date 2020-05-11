import React from "react";
import LoginButton from "../ButtonContainer/LoginButton";
import SignupButton from "../ButtonContainer/SignupButton";

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