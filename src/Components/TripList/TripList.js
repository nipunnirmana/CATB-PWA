import React from 'react';
import { Link } from "react-router-dom";
import './TripList.scss';

export default function TripList() {
    return (
        <div className="trip-list-wrapper">

            <div className="trip-list-day">
                <div className="date">Today</div>
                <Link className="trip" to="trip/CATB12109">
                    <span className="id">#CATB12109</span>
                    <span className="start-end">BIA → Colombo</span>
                    <span className="time">12:10 PM</span>
                    <i className="icon-more"></i>
                </Link>
            </div>
        </div>
    );
}
