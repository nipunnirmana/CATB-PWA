
import React, { createContext, useReducer } from "react";
import Reducer from './MyReducer';

import tabs from '../Assets/mockData/tabs.json';


const initialState = {
    isLoggedIn: localStorage.getItem('customer') || false,
    isLoading: false,
    driver: {
        firstName: 'Nipun',
        lastName: 'Fernando',
    },
    tabs,
    options: {}
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