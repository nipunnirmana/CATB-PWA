import React, { useContext, useState } from 'react';
import { Context } from '../../Store/MyStore';
import './Trips.scss';

import { Link } from "react-router-dom";

import List from '../List/List';

export default function Trips() {

    const [{
        tabs: {
            scheduledTrips = [], completedTrips = [], documents: { numberOfExpiring } = []
        },
        driver: { lastName },
        onGoingTrip
    }] = useContext(Context);

    const scheduledTripsCount = scheduledTrips.reduce(
        (accumulatedTripCount, currentDay) => accumulatedTripCount + currentDay?.trips?.length || 0,
        0
    ).toString();

    const completedTripsCount = completedTrips.reduce(
        (accumulatedTripCount, currentDay) => accumulatedTripCount + currentDay?.trips?.length || 0,
        0
    ).toString();

    const currentHour = new Date().getHours();
    const greeting = currentHour < 12 ? 'Good Morning' : currentHour < 18 ? 'Good Afternoon' : 'Good Evening';

    const [tab, setTab] = useState('scheduledTrips');

    const swapActive = (event, tab) => {
        event.stopPropagation();
        document.querySelector('.tab.active')?.classList.remove('active');
        const classList = event.currentTarget;
        classList.classList.add('active');
        const scrollXPos = classList.classList.contains('documents') ? 100 : 0;
        document.querySelector('.tabs').scroll({
            left: scrollXPos,
            behavior: 'smooth'
        });
        setTab(tab);
    }

    return (

        <div className="trips-wrapper app-wrapper">
            <header className="trips-header app-header">
                <div className="trips-header-inner">
                    <div className="trips-greeting">
                        <span className="text-type-one">{greeting} </span>
                        <span className="text-type-two">{lastName}, </span>
                        <span className="text-type-three">You have</span>
                    </div>
                    <Link to='/settings' className="icon-settings" />
                </div>
                <div className="tabs">
                    <div className="tab active scheduled" onClick={(e) => swapActive(e, 'scheduledTrips')}>
                        <span className="count">{scheduledTripsCount.padStart(2, '0')}</span>
                        <span className="description">Scheduled Trips</span>
                    </div>
                    <div className="tab completed" onClick={(e) => swapActive(e, 'completedTrips')}>
                        <span className="count">{completedTripsCount.padStart(2, '0')}</span>
                        <span className="description">Completed Trips</span>
                    </div>
                    <div className="tab documents" onClick={(e) => swapActive(e, 'documents')}>
                        <span className="count">{numberOfExpiring.padStart(2, '0')}</span>
                        <span className="description">Documents Expiring </span>
                    </div>
                </div>
            </header>

            <List tab={tab} />

            {
                Object.keys(onGoingTrip).length
                    ? <Link to={`/trip/${onGoingTrip.tripId}`} className="on-going-trip">VIEW ONGOING TRIP</Link>
                    : <Link to="/" className="no-on-going-trip">NO ONGOING TRIP</Link>
            }

        </div>

    )
}
