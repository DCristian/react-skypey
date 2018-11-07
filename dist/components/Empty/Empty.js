"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
require("./Empty.css");
const Empty = ({ user }) => {
    const { name, profile_pic, status } = user;
    const first_name = name.split(" ")[0];
    return (React.createElement("div", { className: "Empty" },
        React.createElement("h1", { className: "Empty__name" },
            "Welcome, ",
            first_name,
            " "),
        React.createElement("img", { src: profile_pic, alt: name, className: "Empty__img" }),
        React.createElement("p", { className: "Empty__status" },
            React.createElement("b", null, "Status:"),
            " ",
            status),
        React.createElement("button", { className: "Empty__btn" }, "Start a conversation"),
        React.createElement("p", { className: "Empty__info" }, "Search for someone to start chatting with or go to Contacts to see who is available")));
};
exports.default = Empty;
//# sourceMappingURL=Empty.js.map