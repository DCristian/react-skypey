import { SET_TYPING_VALUE, SEND_MESSAGE } from '../contants/action-types'

const reducer = (state = '', action) => {
    switch (action.type) {
        case SET_TYPING_VALUE:
            return action.payload;
        case SEND_MESSAGE:
            return '';
        default:
            return state;
    }
};

export default reducer;