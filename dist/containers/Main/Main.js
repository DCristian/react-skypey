"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const react_redux_1 = require("react-redux");
require("./Main.css");
const Empty_1 = require("../../components/Empty/Empty");
const ChatWindow_1 = require("../ChatWindow/ChatWindow");
const mapStateToProps = (state) => {
    return {
        user: state.user,
        activeUserId: state.activeUserId
    };
};
const Main = react_redux_1.connect(mapStateToProps)(({ user, activeUserId }) => {
    let mainContent = React.createElement(Empty_1.default, { user: user });
    if (activeUserId) {
        mainContent = React.createElement(ChatWindow_1.default, null);
    }
    return (React.createElement("main", { className: 'Main' }, mainContent));
});
exports.default = Main;
//# sourceMappingURL=Main.js.map