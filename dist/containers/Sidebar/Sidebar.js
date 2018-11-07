"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const react_redux_1 = require("react-redux");
const _ = require("lodash");
require("./Sidebar.css");
const User_1 = require("../../components/User/User");
const actions_1 = require("../../actions");
const mapStateToProps = (state) => {
    return {
        contacts: state.contacts
    };
};
const mapDispatchToProps = (dispatch) => {
    return {
        setActiveUserId: (userId) => {
            dispatch(actions_1.setActiveUserId(userId));
        }
    };
};
exports.default = react_redux_1.connect(mapStateToProps, mapDispatchToProps)(({ contacts, setActiveUserId }) => {
    return (React.createElement("aside", { className: 'Sidebar' }, _.values(contacts).map(contact => {
        return (React.createElement(User_1.default, { key: contact.user_id, user: contact, onClick: setActiveUserId.bind(this, contact.user_id) }));
    })));
});
//# sourceMappingURL=Sidebar.js.map