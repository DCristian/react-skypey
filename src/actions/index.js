import { SET_ACTIVE_USER_ID, SET_TYING_VALUE, SEND_MESSAGE } from '../contants/action-types';

export const setActiveUserId = id => ({
    type: SET_ACTIVE_USER_ID,
    payload: id
});

export const setTypingValue = (value) => ({
    type: SET_TYING_VALUE,
    payload: value
});

export const sendMessage = (message, userId) => ({
    type: SEND_MESSAGE,
    payload: {
        message,
        userId
    }
});