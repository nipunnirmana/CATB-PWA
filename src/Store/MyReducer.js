
export const IS_LOGGED_IN = 'IS_LOGGED_IN';
export const IS_LOADING = 'IS_LOADING';
export const OPTION_LIST = 'OPTION_LIST';
export const TABS = 'TABS';
export const DRIVER = 'DRIVER';
export const ON_GOING_TRIP = 'ON_GOING_TRIP';
export const APP = 'APP';

const Reducer = (state, action) => {
    switch (action.type) {
        case IS_LOGGED_IN:
            return {
                ...state,
                isLoggedIn: action.payload
            };
        case IS_LOADING:
            return {
                ...state,
                isLoading: action.payload
            };
        case OPTION_LIST:
            return {
                ...state,
                options: action.payload
            };
        case TABS:
            return {
                ...state,
                tabs: action.payload
            };
        case DRIVER:
            return {
                ...state,
                driver: action.payload
            };
        case ON_GOING_TRIP:
            return {
                ...state,
                onGoingTrip: action.payload
            };
        case APP:
            return {
                ...state,
                app: action.payload
            };


        default:
            return state;
    }
};

export default Reducer;