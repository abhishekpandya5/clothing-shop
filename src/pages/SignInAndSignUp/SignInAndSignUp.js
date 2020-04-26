import React from 'react'
import SignIn from '../../components/SignIn/SignIn';
import SignUp from '../../components/SignUp/SignUp';

import './signInAndSignUp.scss';

const SignInAndSignUp = () => {
    return (
        <div className="signin-and-signup">
            <SignIn />
            <SignUp />
        </div>
    )
}

export default SignInAndSignUp;