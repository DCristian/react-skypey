import { SET_ACTIVE_USER_ID } from '../contants/action-types';

const reducer = (state = null, action) => {
    switch (action.type) {
        case SET_ACTIVE_USER_ID:
            return action.payload;
        default:
            return state;
    }
};

export default reducer;