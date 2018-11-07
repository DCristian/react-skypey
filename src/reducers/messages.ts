import * as _ from 'lodash';

import { AllMessages, getMessages } from '../static-data';
import { SEND_MESSAGE } from '../contants/action-types';

export interface MessagesAction {
    type: string,
    payload: {
        message: string,
        userId: string
    }
}

const reducer = (state: AllMessages = getMessages(10), action: MessagesAction): AllMessages => {
    switch (action.type) {
        case SEND_MESSAGE:
            const { message, userId } = action.payload;
            const allUserMsgs = state[userId];
            const number = +_.keys(allUserMsgs).pop()! + 1;

            return {
                ...state,
                [userId]: {
                    ...allUserMsgs,
                    [number]: {
                        number,
                        text: message,
                        is_user_msg: true
                    }
                }
            };
        default:
            return state;
    }
};

export default reducer;