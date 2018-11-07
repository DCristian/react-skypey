import * as React from 'react';

import './Message.css';
import { MessageInterface } from '../../static-data';

export interface MessageProps {
    message: MessageInterface,
    key?: number
}

const Message: React.SFC<MessageProps> = ({ message }): JSX.Element => {
    const { text, is_user_msg } = message;

    let className = 'Message';
    if (is_user_msg) {
        className += ' is-user-msg';
    }

    return (
        <span className={className}>
            {text}
        </span>
    );
};

export default Message;