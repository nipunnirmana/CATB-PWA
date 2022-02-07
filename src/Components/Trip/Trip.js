import React, { useEffect, useContext, useState } from 'react';
import { OPTION_LIST, IS_LOADING } from '../../Store/MyReducer';
import { Context } from '../../Store/MyStore';
import { useNavigate } from 'react-router-dom';

import './Trip.scss';

export default function Trip() {

    const navigate = useNavigate();

    const [, dispatch] = useContext(Context);

    const [status, setStatus] = useState();

    const handleStatusChange = (value) => {
        dispatch({ type: OPTION_LIST, payload: {} });
        dispatch({ type: IS_LOADING, payload: true });

        setTimeout(() => {
            dispatch({ type: IS_LOADING, payload: false });
        }, 1500)

    };

    useEffect(() => {
        mockStatusDta()
    });

    const mockStatusDta = () => {
        const statusData = {
            title: 'UPDATE TRIP STATUS',
            type: 'trip',
            onClickEvent: handleStatusChange,
            data: [
                { name: 'firstOption', value: 1, selected: false },
                { name: 'secondOption', value: 2, selected: true }
            ]
        }

        setStatus(statusData)
    }

    const goBack = () => {
        navigate('/')
    }

    const openStatusList = () => {
        dispatch({ type: OPTION_LIST, payload: status });
    }

    return (

        <div className="trip-wrapper app-wrapper">
            <header className="trip-header app-header">
                <div className="trip-header-inner">
                    <i className="icon-back" onClick={goBack}></i>
                    <span className="trip-id">#CATB12101</span>
                </div>
            </header>

            <div className="trip">
                <div className="trip-status">Scheduled</div>
                <div className="trip-basic-info">
                    <div className="trip-start-end">BIA →  Kollupitiya | Round Trip</div>
                    <div className="customer-name">Mr. Amit Priyanka</div>
                </div>
                <div className="trip-info">
                    <div className="label">Pickup Date and Time </div>
                    <div className="value">Today at 08:10 AM</div>
                </div>
                <div className="trip-info">
                    <div className="label">Pickup Date and Time </div>
                    <div className="value">Today at 08:10 AM</div>
                </div>

                <span className="update-status" onClick={openStatusList}>UPDATE TRIP STATUS</span>

            </div>

        </div>

    )
}
