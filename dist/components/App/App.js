"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
require("./App.css");
const Main_1 = require("../../containers/Main/Main");
const Sidebar_1 = require("../../containers/Sidebar/Sidebar");
const App = () => {
    return (React.createElement("div", { className: "App" },
        React.createElement(Sidebar_1.default, null),
        React.createElement(Main_1.default, null)));
};
exports.default = App;
//# sourceMappingURL=App.js.map