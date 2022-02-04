import React, { useEffect, useContext, useState } from 'react';
import { Routes, Route } from "react-router-dom";
import Login from './Components/Login/Login';
import Trips from './Components/Trips/Trips';
import Trip from './Components/Trip/Trip';
import Loading from './Components/Loading/Loading'
import { Context } from './Store/MyStore';


export default function App() {

    const [{ isLoggedIn }] = useContext(Context);

    return (
        <div className="App">
            <Loading />
            <Routes>
                <Route path="/" element={isLoggedIn ? <Trips /> : <Login />} />
                <Route path="/trip/:id" exact element={<Trip />} />
            </Routes>
        </div>
    );
}
