import React, { useContext } from 'react';
import { Context } from '../../Store/MyStore';
import { Link } from "react-router-dom";
import './TripList.scss';

export default function TripList() {

    const [{ tabs: { scheduledTrips = [] } }] = useContext(Context);

    return (
        <div className="trip-list-wrapper">

            {scheduledTrips.map(({ id, day, trips }) => {
                return (<div className="trip-list-day" key={id}>
                    <div className="date">{day}</div>
                    {trips.map(({ tripId, tripFromTo, time }) => (
                        <Link className="trip" to={`trip/${tripId}`} id={tripId} key={tripId}>
                            <span className="id">{`#${tripId}`}</span>
                            <span className="start-end">{tripFromTo}</span>
                            <span className="time">{time}</span>
                            <i className="icon-more"></i>
                        </Link>
                    ))}
                </div>);
            })}
        </div>
    );
}
