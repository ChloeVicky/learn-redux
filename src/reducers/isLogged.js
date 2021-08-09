const loggedReducer = (state = false, action) => {
    switch (action.type) {
        case 'SIGN_IN':
            return !state; // or write return true here.
        default:
            return state;
    }
}
export default loggedReducer;