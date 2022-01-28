import * as React from "react";
import { Routes, Route } from "react-router-dom";
import Login from './Components/Login/Login';


export default function App() {
    return (
        <div className="App">
            <Routes>
                <Route path="/" element={<Login />} />
            </Routes>
        </div>
    );
}
