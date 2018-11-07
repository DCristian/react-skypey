"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const action_types_1 = require("../contants/action-types");
const reducer = (state = null, action) => {
    switch (action.type) {
        case action_types_1.SET_ACTIVE_USER_ID:
            return action.payload;
        default:
            return state;
    }
};
exports.default = reducer;
//# sourceMappingURL=activeUserId.js.map