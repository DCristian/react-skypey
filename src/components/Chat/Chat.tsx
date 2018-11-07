import * as React from 'react';
import * as _ from 'lodash';

import './Chat.css';
import { ActiveMessages } from '../../static-data';
import Message from '../Message/Message';

export interface ChatsProps {
    messages: ActiveMessages
}

class Chats extends React.PureComponent<ChatsProps, {}> {
    chatRef: React.RefObject<HTMLDivElement>;

    constructor(props: ChatsProps) {
        super(props);
        this.chatRef = React.createRef();
    }

    scrollToBottom = (): void => {
        if (this.chatRef.current) {
            this.chatRef.current.scrollTop = this.chatRef.current.scrollHeight;
        }
    };

    componentDidMount() {
        this.scrollToBottom();
    }

    componentDidUpdate() {
        this.scrollToBottom();
    }

    render() {
        return (
            <div className="Chat" ref={this.chatRef}>
                {_.values(this.props.messages).map((message) => (
                    <Message message={message} key={message.number} />
                ))}
            </div>
        );
    }
}

export default Chats;