import React, { Component } from 'react';

import './Chat.css';
import Message from '../Message/Message';

class Chats extends Component {
    chatRef =  null;

    scrollToBottom = () => {
        this.chatRef.current.scrollTop = this.chatRef.current.scrollHeight;
    };

    constructor(props) {
        super(props);
        this.chatRef = React.createRef();
    }

    componentDidMount() {
        this.scrollToBottom();
    }

    componentDidUpdate() {
        this.scrollToBottom();
    }

    render() {
        return (
            <div className="Chat" ref={this.chatRef}>
                {this.props.messages.map(message => (
                    <Message message={message} key={message.number} />
                ))}
            </div>
        );
    }
}

export default Chats;