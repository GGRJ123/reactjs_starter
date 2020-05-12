import React from 'react';
import './Button.css';
import { withRouter } from 'react-router-dom';

function LoginButton(){
    const Button = withRouter(({history}) => (
        <button
        type = "button"
        onClick = {() => {history.push('/sign-in')}}
        className="btn btn-primary btn-block">
        Login
        </button>
    ));

    return <Button/>
}

export default LoginButton;