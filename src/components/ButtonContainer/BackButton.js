import React from 'react';
import './Button.css';
import { withRouter } from 'react-router-dom';

export default function BackButton(){
    const Button = withRouter(({history}) => (
        <button
        type = "button"
        onClick = {() => {history.push('/sign-in')}}
        className="btn btn-primary btn-block">
        Back
        </button>
    ));

    return <Button/>
}