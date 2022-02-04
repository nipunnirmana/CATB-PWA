import React from 'react';
import './Trips.scss';

import { Link } from "react-router-dom";

import TripList from '../TripList/TripList';

export default function Trips() {

    const swapActive = (event) => {
        event.stopPropagation();
        document.querySelector('.tab.active')?.classList.remove('active');
        const classList = event.currentTarget;
        classList.classList.add('active');
        const scrollXPos = classList.classList.contains('documents') ? 100 : 0;
        document.querySelector('.tabs').scroll({
            left: scrollXPos,
            behavior: 'smooth'
        })
    }

    return (

        <div className="trips-wrapper app-wrapper">
            <header className="trips-header app-header">
                <div className="trips-header-inner">
                    <div className="trips-greeting">
                        <span className="text-type-one">Good Morning </span>
                        <span className="text-type-two">Fernando, </span>
                        <span className="text-type-three">You have</span>
                    </div>
                    <i className="icon-settings"></i>
                </div>
                <div className="tabs">
                    <div className="tab active scheduled" onClick={swapActive}>
                        <span className="count">09</span>
                        <span className="description">Scheduled Trips</span>
                    </div>
                    <div className="tab completed" onClick={swapActive}>
                        <span className="count">10</span>
                        <span className="description">Completed Trips</span>
                    </div>
                    <div className="tab documents" onClick={swapActive}>
                        <span className="count">02</span>
                        <span className="description">Documents Expiring </span>
                    </div>
                </div>
            </header>

            <TripList />

            <Link to="/" className="on-going-trip">NO ONGOING TRIP</Link>

        </div>

    )
}
