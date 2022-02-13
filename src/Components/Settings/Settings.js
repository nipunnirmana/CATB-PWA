import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { IS_LOGGED_IN, IS_LOADING } from '../../Store/MyReducer';
import { Context } from '../../Store/MyStore';
import './Settings.scss';
import '../../fire';
import {
    getAuth, signOut
} from "firebase/auth";

export default function Settings() {
    const [{ tabs: { documents: { data = [] } = {} }, app: { version } }, dispatch] = useContext(Context);
    const navigate = useNavigate();

    const goBack = () => {
        navigate('/');
    }

    const handleSignOut = () => {
        dispatch({ type: IS_LOADING, payload: true });
        const auth = getAuth();
        signOut(auth).then(() => {
            localStorage.removeItem('customer');
            dispatch({ type: IS_LOGGED_IN, payload: false });
            navigate('/');
        }).catch((error) => {
            console.error('Error when logging out')
        }).finally(() => dispatch({ type: IS_LOADING, payload: false }));
    }

    return (

        <div className="settings-wrapper app-wrapper">
            <header className="settings-header app-header">
                <div className="settings-header-inner">
                    <i className="icon-back" onClick={goBack}></i>
                    <span className="settings-text">Settings</span>
                </div>
            </header>

            <div className="settings">
                <div className="setting">
                    <div className="setting-name">Set Expiration dates</div>
                    {data.map(({ name, expiresOn }) => (

                        <div className="setting-field">
                            <div className="label">{name}</div>
                            <input className="value" type="date" value={expiresOn} />
                        </div>

                    ))}
                </div>

                <button className="logout-button" onClick={handleSignOut}>LOGOUT</button>

                <span className="app-version">App V {version}</span>

            </div>

        </div>

    )
}
