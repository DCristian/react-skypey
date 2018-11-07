"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const _ = require("lodash");
require("./Chat.css");
const Message_1 = require("../Message/Message");
class Chats extends React.PureComponent {
    constructor(props) {
        super(props);
        this.chatRef = null;
        this.scrollToBottom = () => {
            this.chatRef.current.scrollTop = this.chatRef.current.scrollHeight;
        };
        this.chatRef = React.createRef();
    }
    componentDidMount() {
        this.scrollToBottom();
    }
    componentDidUpdate() {
        this.scrollToBottom();
    }
    render() {
        return (React.createElement("div", { className: "Chat", ref: this.chatRef }, _.values(this.props.messages).map((message) => (React.createElement(Message_1.default, { message: message, key: message.number })))));
    }
}
exports.default = Chats;
//# sourceMappingURL=Chat.js.map