import React from 'react';

import { withRouter } from 'react-router-dom';

function SignupButton(){
    const Button = withRouter(({history}) => (
        <button
        type = "button"
        onClick = {() => {history.push('/sign-up')}}
        className="btn btn-primary btn-block">
        Signup
        </button>
    ));

    return <Button/>
}

export default SignupButton;