
import React, { createContext, useReducer } from "react";
import Reducer from './MyReducer';

import tabs from '../Assets/mockData/tabs.json';
import driver from '../Assets/mockData/driver.json';
import onGoingTrip from '../Assets/mockData/onGoingTrip.json';
import app from '../Assets/mockData/app.json';


const initialState = {
    isLoggedIn: localStorage.getItem('customer') || false,
    isLoading: false,
    driver,
    tabs,
    onGoingTrip,
    app
};

const Store = ({ children }) => {
    const [state, dispatch] = useReducer(Reducer, initialState);
    return (
        <Context.Provider value={[state, dispatch]}>
            {children}
        </Context.Provider>
    )
};

export const Context = createContext(initialState);
export default Store;