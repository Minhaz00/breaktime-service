import React from 'react';
import { Link,  useLocation, useHistory  } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
// import useFirebase from '../../hooks/UseFirebase';


const Login = () => {
    const { signInUsingGoogle } = useAuth();
    const location = useLocation();
    const history = useHistory();
    const redirectURL = location.state?.from || '/home';
    const handleGoogleSignIn = () => {
        signInUsingGoogle()
            .then(result => {
                history.push(redirectURL);
        })
    }
    return (
        <div className='my-5 container booking'>
            <h1>Log In</h1>
            <form>
                <input placeholder='Email' type="email" required/><br />
                <input placeholder='Password' type='password' required/><br />
                <input className='btn-regular' type="submit" value="Login" />
            </form>
            <button onClick={handleGoogleSignIn} className='log-in'>Sign In with Google</button>
            <br />
            <p className='mb-3'>New to Breaktime?<br /><br />
                <Link className='log-in' to='/register'>Register</Link>
            </p>

        </div>
    );
};

export default Login;