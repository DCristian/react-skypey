import React, { Component } from 'react';
import _ from 'lodash';

import './ChatWindow.css';
import store from '../../store/index';
import Header from '../../components/Header/Header';
import Chat from '../../components/Chat/Chat';
import MessageInput from '../../components/MessageInput/MessageInput';
import { sendMessage, setTypingValue } from '../../actions';

class ChatWindow extends Component {
    handleMessageInputChange = (event) => {
        store.dispatch(setTypingValue(event.target.value));
    };

    handleMessageInputSubmit = (event) => {
        event.preventDefault();
        const { typing, activeUserId } = store.getState();
        store.dispatch(sendMessage(typing, activeUserId));
    };

    render () {
        const state  = store.getState();
        const activeUser = state.contacts[this.props.activeUserId];
        const activeMessages = state.messages[this.props.activeUserId];

        return (
            <div className="ChatWindow">
                <Header user={activeUser}/>
                <Chat messages={_.values(activeMessages)}/>
                <MessageInput
                    value={state.typing}
                    onChange={this.handleMessageInputChange}
                    onSubmit={this.handleMessageInputSubmit}
                />
            </div>
        );
    }
}

export default ChatWindow;