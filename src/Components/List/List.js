import React, { useContext } from 'react';
import { Context } from '../../Store/MyStore';
import { Link } from "react-router-dom";
import './List.scss';

export default function List({ tab }) {

    const [{ tabs: { [tab]: currentTab } }] = useContext(Context);

    return (
        <div className="list-wrapper">

            {currentTab.length ? tab === "documents" ? currentTab.data.map(({ id, name, expiresOn, daysLeft }) => {
                return <div className="list" key={id}>
                    <div className="title">{name}</div>
                    <div className="document">
                        <span className="days-left">{daysLeft} Left</span>
                        <span className="expires-on">Expires on {expiresOn}</span>
                    </div>
                </div>
            }) : currentTab.map(({ id, day, trips }) => {
                return (<div className="list" key={id}>
                    <div className="title">{day}</div>
                    {trips.map(({ tripId, tripFromTo, time }) => (
                        <Link className="trip" to={`trip/${tripId}`} id={tripId} key={tripId}>
                            <span className="id">{`#${tripId}`}</span>
                            <span className="start-end">{tripFromTo}</span>
                            <span className="time">{time}</span>
                            <i className="icon-more"></i>
                        </Link>
                    ))}
                </div>);
            }) : <div className="no-trips-wrapper">

                <div className="no-trips-inner">
                    <i className="icon-parked-car" />
                    <span className="no-trips">NO TRIPS AVAILABLE</span>
                </div>

            </div>}

        </div>
    );
}
