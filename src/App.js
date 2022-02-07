import React, { useContext } from 'react';
import { Routes, Route } from "react-router-dom";
import Login from './Components/Login/Login';
import Trips from './Components/Trips/Trips';
import Trip from './Components/Trip/Trip';
import Loading from './Components/Loading/Loading'
import { Context } from './Store/MyStore';
import Settings from './Components/Settings/Settings';
import OptionSelector from './Components/OptionSelector/OptionSelector';



export default function App() {

    const [{ isLoggedIn }] = useContext(Context);

    return (
        <div className="App">
            <Loading />
            <OptionSelector />
            <Routes>
                <Route path="/" element={isLoggedIn ? <Trips /> : <Login />} />
                <Route path="/trip/:id" exact element={isLoggedIn ? <Trip /> : <Login />} />
                <Route path="/settings" exact element={isLoggedIn ? <Settings /> : <Login />} />
            </Routes>
        </div>
    );
}
