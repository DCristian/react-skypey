"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const react_redux_1 = require("react-redux");
require("./ChatWindow.css");
const Header_1 = require("../../components/Header/Header");
const Chat_1 = require("../../components/Chat/Chat");
const MessageInput_1 = require("../../components/MessageInput/MessageInput");
const actions_1 = require("../../actions");
const mapStateToProps = (state) => {
    return {
        typing: state.typing,
        activeUserId: state.activeUserId,
        activeUser: state.contacts[state.activeUserId],
        activeMessages: state.messages[state.activeUserId]
    };
};
const mapDispatchToProps = (dispatch) => {
    return {
        setTypingValue: (value) => {
            dispatch(actions_1.setTypingValue(value));
        },
        sendMessage: (typing, activeUserId) => {
            dispatch(actions_1.sendMessage(typing, activeUserId));
        }
    };
};
exports.default = react_redux_1.connect(mapStateToProps, mapDispatchToProps)(class ChatWindow extends React.Component {
    constructor() {
        super(...arguments);
        this.handleMessageInputChange = (event) => {
            const value = event.currentTarget.value;
            this.props.setTypingValue(value);
        };
        this.handleMessageInputSubmit = (event) => {
            event.preventDefault();
            if (this.props.typing.length === 0) {
                return;
            }
            this.props.sendMessage(this.props.typing, this.props.activeUserId);
        };
    }
    render() {
        return (React.createElement("div", { className: "ChatWindow" },
            React.createElement(Header_1.default, { user: this.props.activeUser }),
            React.createElement(Chat_1.default, { messages: this.props.activeMessages }),
            React.createElement(MessageInput_1.default, { value: this.props.typing, onChange: this.handleMessageInputChange, onSubmit: this.handleMessageInputSubmit })));
    }
});
//# sourceMappingURL=ChatWindow.js.map