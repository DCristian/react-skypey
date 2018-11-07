"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
require("./Header.css");
const Header = ({ user }) => {
    const { name, status } = user;
    return (React.createElement("header", { className: "Header" },
        React.createElement("h1", { className: "Header__name" }, name),
        React.createElement("p", { className: "Header__status" }, status)));
};
exports.default = Header;
//# sourceMappingURL=Header.js.map