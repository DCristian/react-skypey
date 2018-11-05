import React, { PureComponent } from 'react';
import _ from 'lodash';

import './Chat.css';
import Message from '../Message/Message';

class Chats extends PureComponent {
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
                {_.values(this.props.messages).map(message => (
                    <Message message={message} key={message.number} />
                ))}
            </div>
        );
    }
}

export default Chats;