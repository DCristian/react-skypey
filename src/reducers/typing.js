import { SET_TYING_VALUE, SEND_MESSAGE } from '../contants/action-types'

const reducer = (state = '', action) => {
    switch (action.type) {
        case SET_TYING_VALUE:
            return action.payload;
        case SEND_MESSAGE:
            return '';
        default:
            return state;
    }
};

export default reducer;