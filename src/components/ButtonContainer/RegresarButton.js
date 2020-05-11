import React from 'react';

import { withRouter } from 'react-router-dom';

function RegresarButton(){
    const Button = withRouter(({history}) => (
        <button
        type = "button"
        onClick = {() => {history.push('/sign-in')}}
        className="btn btn-primary btn-block">
        Regresar al juego
        </button>
    ));

    return <Button/>
}

export default RegresarButton;