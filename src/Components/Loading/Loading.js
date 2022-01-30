import spinner from '../../Assets/images/spinner.svg';
import React, { useContext } from 'react';
import { Context } from '../../Store/MyStore';
import './Loading.scss';

export default function Loading() {
    const [{ isLoading }] = useContext(Context);
    return (
        <div className={`spinner ${isLoading ? 'is-loading' : ''}`}>
            <img src={spinner} alt="Loading" />
        </div>
    );
}
