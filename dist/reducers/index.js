"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const redux_1 = require("redux");
const user_1 = require("./user");
const contacts_1 = require("./contacts");
const activeUserId_1 = require("./activeUserId");
const messages_1 = require("./messages");
const typing_1 = require("./typing");
exports.default = redux_1.combineReducers({
    user: user_1.default,
    contacts: contacts_1.default,
    activeUserId: activeUserId_1.default,
    messages: messages_1.default,
    typing: typing_1.default
});
//# sourceMappingURL=index.js.map