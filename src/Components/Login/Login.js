import React from 'react';
import vector01 from '../../Assets/images/app-vec-01.svg';
import vector02 from '../../Assets/images/app-vec-02.svg';
import './Login.scss';

export default function Login() {
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
                        <span className="login-label">Mobile Number</span>
                        <input className="login-input" type="text" required />
                    </div>

                    <div className="login-field">
                        <span className="login-label">Password</span>
                        <span className="icon-eye-show-svgrepo-com-1">
                            <input className="login-input" type="password"  required />
                            <span className="icon-eye-show"></span>
                        </span>
                    </div>

                    <input className="login-button" type="submit" value="login" />

                </form>

                <span className="login-forgot-password">Forgot Password ? Call Us 011 0421128429</span>

            </section>
            <footer>
                <img alt="Footer Vector" src={vector02} />
            </footer>
        </div>
    )
}
