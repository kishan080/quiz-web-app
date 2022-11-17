import React from "react";
import '../styles/SignIn.css';
function SignIn() {

    const [signIn_or_signUp, setSignIn_or_signUp] = React.useState({
        signIn: true,
        to: '/signin',
    });


    return (
        <div className="signIn-container">
            <div className="signIn-form">
                {signIn_or_signUp.signIn ? <h1>Sign In</h1> : <h1>Sign Up</h1>}
                <form action={signIn_or_signUp.to} method="post">
                    <div className="form-group">
                        <input type="text" placeholder="Username" />
                        {!signIn_or_signUp.signIn && <input type="email" placeholder="Email" />}
                        <input type="password" placeholder="Password" />
                    </div>
                    {signIn_or_signUp.signIn ?
                        <p onClick={() => {
                            setSignIn_or_signUp({
                                signIn: false,
                                to: '/signup',
                            });
                        }}>Don't have an account?</p>
                        :
                        <p onClick={() => {
                            setSignIn_or_signUp({
                                signIn: true,
                                to: '/signin',
                            });
                        }}>Already have an account?</p>
                    }
                    <button type="submit">submit</button>
                </form>


            </div>
        </div>
    );
}

export default SignIn;