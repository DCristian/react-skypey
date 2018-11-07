import { SET_TYPING_VALUE, SEND_MESSAGE } from '../contants/action-types'

export interface TypingAction {
    type: string,
    payload: string
}

const reducer = (state: string = '', action: TypingAction): string => {
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