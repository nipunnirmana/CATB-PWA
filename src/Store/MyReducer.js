
export const IS_LOGGED_IN = 'IS_LOGGED_IN';

const Reducer = (state, action) => {
    switch (action.type) {
        case IS_LOGGED_IN:
            return {
                ...state,
                isLoggedIn: action.payload
            };
        default:
            return state;
    }
};

export default Reducer;