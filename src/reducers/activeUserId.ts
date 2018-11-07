import { SET_ACTIVE_USER_ID } from '../contants/action-types';

export interface ActiveUserIdAction {
    type: string,
    payload: string
}

const reducer = (state: string = '', action: ActiveUserIdAction): string => {
    switch (action.type) {
        case SET_ACTIVE_USER_ID:
            return action.payload;
        default:
            return state;
    }
};

export default reducer;