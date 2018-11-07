import { SET_ACTIVE_USER_ID, SET_TYPING_VALUE, SEND_MESSAGE } from '../contants/action-types';
import { ActiveUserIdAction } from '../reducers/activeUserId';
import { TypingAction } from '../reducers/typing';
import { MessagesAction } from '../reducers/messages';

export const setActiveUserId = (id: string): ActiveUserIdAction => ({
    type: SET_ACTIVE_USER_ID,
    payload: id
});

export const setTypingValue = (value: string): TypingAction => ({
    type: SET_TYPING_VALUE,
    payload: value
});

export const sendMessage = (message: string, userId: string): MessagesAction => ({
    type: SEND_MESSAGE,
    payload: {
        message,
        userId
    }
});