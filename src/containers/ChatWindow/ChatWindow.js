import React, { Component } from 'react';
import { connect } from 'react-redux';

import './ChatWindow.css';
import Header from '../../components/Header/Header';
import Chat from '../../components/Chat/Chat';
import MessageInput from '../../components/MessageInput/MessageInput';
import { sendMessage, setTypingValue } from '../../actions';

const mapStateToProps = (state) => {
    return {
      typing: state.typing,
      activeUserId: state.activeUserId,
      activeUser: state.contacts[state.activeUserId],
      activeMessages: state.messages[state.activeUserId]
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        setTypingValue: (value) => {
            dispatch(setTypingValue(value));
        },
        sendMessage: (typing, activeUserId) => {
            dispatch(sendMessage(typing, activeUserId));
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(
    class ChatWindow extends Component {
        handleMessageInputChange = (event) => {
            const value = event.currentTarget.value;
            this.props.setTypingValue(value);
        };

        handleMessageInputSubmit = (event) => {
            event.preventDefault();

            if (this.props.typing.length === 0) {
                return;
            }

            this.props.sendMessage(this.props.typing, this.props.activeUserId);
        };

        render() {
            return (
                <div className="ChatWindow">
                    <Header user={this.props.activeUser}/>
                    <Chat messages={this.props.activeMessages}/>
                    <MessageInput
                        value={this.props.typing}
                        onChange={this.handleMessageInputChange}
                        onSubmit={this.handleMessageInputSubmit}
                    />
                </div>
            );
        }
    }
);