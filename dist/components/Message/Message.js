"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
require("./Message.css");
const Message = ({ message }) => {
    const { text, is_user_msg } = message;
    let className = 'Message';
    if (is_user_msg) {
        className += ' is-user-msg';
    }
    return (React.createElement("span", { className: className }, text));
};
exports.default = Message;
//# sourceMappingURL=Message.js.map