"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _ = require("lodash");
const static_data_1 = require("../static-data");
const action_types_1 = require("../contants/action-types");
const reducer = (state = static_data_1.getMessages(10), action) => {
    switch (action.type) {
        case action_types_1.SEND_MESSAGE:
            const { message, userId } = action.payload;
            const allUserMsgs = state[userId];
            const number = +_.keys(allUserMsgs).pop() + 1;
            return Object.assign({}, state, { [userId]: Object.assign({}, allUserMsgs, { [number]: {
                        number,
                        text: message,
                        is_user_msg: true
                    } }) });
        default:
            return state;
    }
};
exports.default = reducer;
//# sourceMappingURL=messages.js.map