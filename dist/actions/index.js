"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const action_types_1 = require("../contants/action-types");
exports.setActiveUserId = (id) => ({
    type: action_types_1.SET_ACTIVE_USER_ID,
    payload: id
});
exports.setTypingValue = (value) => ({
    type: action_types_1.SET_TYPING_VALUE,
    payload: value
});
exports.sendMessage = (message, userId) => ({
    type: action_types_1.SEND_MESSAGE,
    payload: {
        message,
        userId
    }
});
//# sourceMappingURL=index.js.map