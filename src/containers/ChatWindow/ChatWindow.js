import React from 'react';
import _ from 'lodash';

import './ChatWindow.css';
import store from '../../store/index';
import Header from '../../components/Header/Header';
import Chat from '../../components/Chat/Chat';
import MessageInput from '../MessageInput/MessageInput';

const ChatWindow = ({ activeUserId }) => {
    const state  = store.getState();
    const activeUser = state.contacts[activeUserId];
    const activeMessages = state.messages[activeUserId];

    return (
        <div className="ChatWindow">
            <Header user={activeUser}/>
            <Chat messages={_.values(activeMessages)}/>
            <MessageInput value={state.typing}/>
        </div>
    );
};

export default ChatWindow;