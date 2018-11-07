"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const action_types_1 = require("../contants/action-types");
const reducer = (state = '', action) => {
    switch (action.type) {
        case action_types_1.SET_TYPING_VALUE:
            return action.payload;
        case action_types_1.SEND_MESSAGE:
            return '';
        default:
            return state;
    }
};
exports.default = reducer;
//# sourceMappingURL=typing.js.map