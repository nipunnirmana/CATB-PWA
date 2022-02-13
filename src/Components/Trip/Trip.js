import React, { useEffect, useContext, useState } from 'react';
import { OPTION_LIST, IS_LOADING } from '../../Store/MyReducer';
import { Context } from '../../Store/MyStore';
import { useNavigate, useParams } from 'react-router-dom';

import './Trip.scss';

export default function Trip() {

    const { id: paramId } = useParams();

    const navigate = useNavigate();
    const [{ tabs: { scheduledTrips, completedTrips }, onGoingTrip }, dispatch] = useContext(Context);

    let allTrips = []
    scheduledTrips.forEach(({ trips }) => trips.forEach(trip => allTrips.push(trip)));
    completedTrips.forEach(({ trips }) => trips.forEach(trip => allTrips.push(trip)));
    allTrips.push(onGoingTrip);
    const currentTrip = allTrips.find(({ tripId }) => tripId === paramId) || {};

    const [status, setStatus] = useState();

    const handleStatusChange = (value) => {
        dispatch({ type: OPTION_LIST, payload: {} });
        dispatch({ type: IS_LOADING, payload: true });

        setTimeout(() => {
            dispatch({ type: IS_LOADING, payload: false });
        }, 1500)

    };



    const mockStatusDta = () => {
        const statusData = {
            title: 'UPDATE TRIP STATUS',
            type: 'trip',
            onClickEvent: handleStatusChange,
            data: [
                { name: 'SCHEDULED', value: 1, selected: false },
                { name: 'ON MY WAY', value: 2, selected: true },
                { name: 'AT PICKUP LOCATION', value: 3, selected: false },
                { name: 'PASSENGERS ON BOARD', value: 4, selected: false },
                { name: 'PAID AND TRIP COMPLETED', value: 5, selected: false }
            ]
        }

        setStatus(statusData)
    }

    useEffect(() => {
        mockStatusDta();
    }, []);

    const goBack = () => {
        navigate('/')
    }

    const openStatusList = () => {
        dispatch({ type: OPTION_LIST, payload: status });
    }

    const {
        tripStatus,
        tripFromTo,
        customer,
        date,
        time,
        pickupAddressLineOne,
        pickupAddressLineTwo,
        dropOffAddressLineOne,
        dropOffAddressLineTwo,
        Passengers,
        payment
    } = currentTrip;

    return (

        <div className="trip-wrapper app-wrapper">
            <header className="trip-header app-header">
                <div className="trip-header-inner">
                    <i className="icon-back" onClick={goBack}></i>
                    <span className="trip-id">{`#${paramId}`}</span>
                </div>
            </header>

            <div className="trip">
                <div className="trip-status">{tripStatus}</div>
                <div className="trip-basic-info">
                    <div className="trip-start-end">{tripFromTo}</div>
                    <div className="customer-name">{customer}</div>
                </div>
                <div className="trip-info">
                    <div className="label">Pickup Date and Time</div>
                    <div className="value">{`${date} at ${time}`}</div>
                </div>
                <div className="trip-info">
                    <div className="label">Pickup Address</div>
                    <div className="value"> {pickupAddressLineOne} <br /> {pickupAddressLineTwo}</div>
                </div>
                <div className="trip-info">
                    <div className="label">Dropoff Address</div>
                    <div className="value"> {dropOffAddressLineOne} <br /> {dropOffAddressLineTwo}</div>
                </div>
                <div className="trip-info">
                    <div className="label">Passengers</div>
                    <div className="value">{`${Passengers}`}</div>
                </div>
                <div className="trip-info">
                    <div className="label">Payment</div>
                    <div className="value">{`${payment}`}</div>
                </div>
                <span className="update-status" onClick={openStatusList}>UPDATE TRIP STATUS</span>
            </div>

        </div>

    )
}
