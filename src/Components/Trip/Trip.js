import React from 'react';

import './Trip.scss';

export default function Trip() {

    const goBack = () => {
        window.history.back()
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

                <span className="update-status">UPDATE TRIP STATUS</span>

            </div>

        </div>

    )
}
