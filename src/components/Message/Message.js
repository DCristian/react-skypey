import React from 'react';

import './Message.css';

const Message = ({ message }) => {
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