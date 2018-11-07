import * as React from 'react';
import { connect } from 'react-redux';

import './Main.css';
import Empty from '../../components/Empty/Empty';
import ChatWindow from '../ChatWindow/ChatWindow';
import { UserInterface } from '../../static-data';
import { RootState } from '../../store';

interface StateProps {
    user: UserInterface,
    activeUserId: string
}

const mapStateToProps = (state: RootState): StateProps => {
    return {
        user: state.user,
        activeUserId: state.activeUserId
    };
};

const Main = connect(mapStateToProps)(
    ({ user, activeUserId }: StateProps) => {
        let mainContent = <Empty user={user}/>;

        if (activeUserId) {
            mainContent = <ChatWindow />;
        }

        return (
            <main className='Main'>{mainContent}</main>
        );
    }
);

export default Main;