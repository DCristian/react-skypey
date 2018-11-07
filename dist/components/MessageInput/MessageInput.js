"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
require("./MessageInput.css");
const MessageInput = (props) => {
    return (React.createElement("form", { className: "MessageInput", onSubmit: props.onSubmit },
        React.createElement("input", { className: "MessageInput__input", onChange: props.onChange, value: props.value, placeholder: "write a message" })));
};
exports.default = MessageInput;
//# sourceMappingURL=MessageInput.js.map