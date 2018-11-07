"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
require("./User.css");
const User = (props) => {
    const { name, profile_pic, status } = props.user;
    return (React.createElement("div", { className: 'User', onClick: props.onClick },
        React.createElement("img", { src: profile_pic, alt: name, className: 'User__pic' }),
        React.createElement("div", { className: 'User__details' },
            React.createElement("p", { className: "User__details-name" }, name),
            React.createElement("p", { className: "User__details-status" }, status))));
};
exports.default = User;
//# sourceMappingURL=User.js.map