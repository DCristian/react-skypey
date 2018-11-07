import * as React from 'react';

import './MessageInput.css';

export interface MessageInputProps {
    value: string,
    onSubmit: (...args: any) => any,
    onChange: (...args: any) => any
}

const MessageInput: React.SFC<MessageInputProps> = (props: MessageInputProps): JSX.Element => {
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