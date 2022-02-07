import React, { useEffect, useContext, useState } from 'react';
import { Context } from '../../Store/MyStore';
import { IS_LOADING, IS_LOGGED_IN } from '../../Store/MyReducer';
import vector01 from '../../Assets/images/app-vec-01.svg';
import vector02 from '../../Assets/images/app-vec-02.svg';
import './Login.scss';
import '../../fire';
import {
    getAuth,
    signInWithEmailAndPassword,
    onAuthStateChanged
} from "firebase/auth";


export default function Login() {

    const [, dispatch] = useContext(Context);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [togglePassword, setTogglePassword] = useState(false);


    const handlePasswordToggle = () => {
        setTogglePassword(!togglePassword);
    }

    const handleLogin = () => {
        const isInvalidEmail = !/\S+@\S+\.\S+/.test(email);
        if (isInvalidEmail) {
            setError('Please enter and valid email address');
            return;
        } else if (!password) {
            setError('Password cannot be empty');
            return;
        } else {
            setError('');
        }
        dispatch({ type: IS_LOADING, payload: true });
        const auth = getAuth();
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                dispatch({ type: IS_LOGGED_IN, payload: true });
            })
            .catch(({ code = false }) => {
                if (code === 'auth/wrong-password' || code === 'auth/user-not-found') {
                    setError('You have entered an invalid email or password');
                } else {
                    setError('Something went wrong, Please try again');
                }
            }).finally(() => dispatch({ type: IS_LOADING, payload: false }));
    };


    const authListener = () => {
        const auth = getAuth();
        onAuthStateChanged(auth, (data) => {

            const { uid } = data || {};

            if (uid) {
                localStorage.setItem('customer', JSON.stringify({ uid }));
            } else {
                localStorage.removeItem('customer');
                dispatch({ type: IS_LOGGED_IN, payload: false });
            }
        });
    }


    useEffect(() => {
        authListener();
    }, [])

    return (
        <div className="login-wrapper">
            <header className="login-header">
                <img alt="Header Vector" src={vector01} />
            </header>
            <section className="login-inner">

                <div>
                    <span className="login-heading-line-1-1">Colombo</span>
                    <span className="login-heading-line-1-2">Airport</span>
                </div>
                <div>
                    <span className="login-heading-line-1-1">Taxi</span>
                    <span className="login-heading-line-1-2">Booking</span>
                </div>

                <form className="login-form">

                    <div className="login-field">
                        <span className="login-label">Email Address</span>
                        <input
                            className="login-input"
                            type="text"
                            required value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>

                    <div className="login-field">
                        <span className="login-label">Password</span>
                        <span className="icons">
                            <input
                                className="login-input"
                                type={togglePassword ? "text" : "password"}
                                required value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                            <span className={`icon-eye-${togglePassword ? 'hide' : 'show'}`} onClick={handlePasswordToggle}></span>
                        </span>
                    </div>

                    <div className="form-error">{error}</div>

                    <input className="login-button" type="button" value="login" onClick={handleLogin} />

                </form>

                <span className="login-forgot-password">Forgot Password ? Call Us 011 0421128429</span>

            </section>
            <footer>
                <img alt="Footer Vector" src={vector02} />
            </footer>
        </div>
    )
}
