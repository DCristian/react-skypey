import React, { Component } from 'react';

import './MessageInput.css';
import store from '../../store';
import { setTypingValue, sendMessage } from '../../actions';

class MessageInput extends Component {
    handleChange = (event) => {
        store.dispatch(setTypingValue(event.target.value));
    };
    handleSubmit = (event) => {
        if (event.key !== 'Enter') {
            return;
        }

        const { typing, activeUserId } = store.getState();
        store.dispatch(sendMessage(typing, activeUserId));
    };

    render () {
        return (
            <div className="MessageInput">
                <input
                    className="MessageInput__input"
                    onChange={this.handleChange}
                    value={this.props.value}
                    placeholder="write a message"
                    onKeyPress={this.handleSubmit}
                />
            </div>
        );
    }
}

export default MessageInput;