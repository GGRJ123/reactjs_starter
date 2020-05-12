import React from 'react';
import './Button.css';
import { withRouter } from 'react-router-dom';

export default function InstruccionesButton(){
    const Button = withRouter(({history}) => (
        <button
        type = "button"
        onClick = {() => {history.push('/spanish-instruction')}}
        className="btn btn-primary btn-block">
        Instrucciones
        </button>
    ));

    return <Button/>
}