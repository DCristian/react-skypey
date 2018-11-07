import * as React from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';

import './ChatWindow.css';
import Header from '../../components/Header/Header';
import Chat from '../../components/Chat/Chat';
import MessageInput from '../../components/MessageInput/MessageInput';
import { sendMessage, setTypingValue } from '../../actions';
import { RootState } from '../../store';
import { ActiveMessages, UserInterface } from '../../static-data';

interface StateProps {
    typing: string,
    activeUserId: string,
    activeUser: UserInterface,
    activeMessages: ActiveMessages
}

interface DispatchProps {
    setTypingValue: (value: string) => void,
    sendMessage: (typing: string, activeUserId: string) => void
}

type Props = StateProps & DispatchProps;

const mapStateToProps = (state: RootState, {}): StateProps => {
    return {
      typing: state.typing,
      activeUserId: state.activeUserId,
      activeUser: state.contacts[state.activeUserId],
      activeMessages: state.messages[state.activeUserId]
    };
};

const mapDispatchToProps = (dispatch: Dispatch): DispatchProps => {
    return {
        setTypingValue: (value: string) => {
            dispatch(setTypingValue(value));
        },
        sendMessage: (typing: string, activeUserId: string) => {
            dispatch(sendMessage(typing, activeUserId));
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(
    class ChatWindow extends React.Component<Props, {}> {
        handleMessageInputChange = (event: React.MouseEvent<HTMLInputElement>): void => {
            const value = event.currentTarget.value;
            this.props.setTypingValue(value);
        };

        handleMessageInputSubmit = (event: Event): void => {
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