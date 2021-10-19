import React, { useState } from 'react';
import { Link , useLocation, useHistory} from 'react-router-dom';
import './Register.css'
import { getAuth, createUserWithEmailAndPassword , signInWithEmailAndPassword } from "firebase/auth";
import useAuth from '../../hooks/useAuth';



const Register = () => {
    const auth = getAuth();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [isLogin, setIsLogIn] = useState(false);
    const toggleLogin = e => {
        setIsLogIn(e.target.checked);
    }


    //google
    const {user, signInUsingGoogle } = useAuth();
    const location = useLocation();
    const history = useHistory();
    const redirectURL = location.state?.from || '/home';
    const handleGoogleSignIn = () => {
        signInUsingGoogle()
            .then(result => {
                history.push(redirectURL);
        })
    }
    //google

    const handleName = e => {
        user.displayName =  e.target.value;
    }

    const handleEmailChange = e => {
        setEmail(e.target.value);
    }
    const handlePasswordChange = e => {
        setPassword(e.target.value);
    }

    const handleRegistration = (event) => {
        event.preventDefault();
        if (password.length < 6) {
            setError('Password must be at least 6 characters.');
            return;
        }
        if (!/(?=.*[A-Z].*[A-Z])/.test(password)) {
            setError("Password must contain at least 2 uppercase letters.");
            return;
        }
        if (!/(?=.*[0-9].*[0-9])/.test(password)) {
            setError("Password must contain at least 2 digits.");
            return;
        }
        isLogin ? proccessLogin(email, password) : createNewUser(email, password);
    }

    const proccessLogin = (email, password) => {
        signInWithEmailAndPassword(auth, email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                setError('');
            })
            .catch((error) => {
                setError(error.message);
            })
    }

    const createNewUser = (email, password) => {
        createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                setError('');
            })
            .catch((error) => {
                setError(error.message);
            })
    }

    return (
        <div className='my-5 container'>
            <h1>{isLogin ? 'Please Login' : 'Create an account'}</h1>
            <form className='booking' onSubmit={handleRegistration}>
                {isLogin ? "" : <input required onBlur={handleName} placeholder='Name' type="text" name="" id="name" />}
                <input onBlur={handleEmailChange} placeholder='Email' type="email" name="" id="" />
                <input onBlur={handlePasswordChange} placeholder='Password' type="password" name="" id="" />
                <div>
                    <small className='text-danger'>{error}</small>
                </div>
                <input type="submit" value={isLogin? 'Login' : 'Register'} name="" id="" />
            </form>
            <button onClick={handleGoogleSignIn} className='log-in'>Sign In with Google</button>
            <br /> 
            <div class="form-check w-25 mx-auto">
                <input onChange={toggleLogin} class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                <label class="form-check-label" for="flexCheckDefault">
                    Already registered?
                </label>
            </div>
        </div>
    );
};

export default Register;