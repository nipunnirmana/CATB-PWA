
export const IS_LOGGED_IN = 'IS_LOGGED_IN';
export const IS_LOADING = 'IS_LOADING';
export const OPTION_LIST = 'OPTION_LIST';

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

        default:
            return state;
    }
};

export default Reducer;