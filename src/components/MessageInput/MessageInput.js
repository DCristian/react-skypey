import React from 'react';

import './MessageInput.css';

const MessageInput = (props) => {
    return (
        <form className="MessageInput" onSubmit={props.onSubmit}>
            <input
                className="MessageInput__input"
                onChange={props.onChange}
                value={props.value}
                placeholder="write a message"
            />
        </form>
    );
};

export default MessageInput;