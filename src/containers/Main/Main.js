import React from 'react';
import { connect } from 'react-redux';

import './Main.css';
import Empty from '../../components/Empty/Empty';
import ChatWindow from '../../containers/ChatWindow/ChatWindow';

const mapStateToProps = (state) => {
    return {
        user: state.user,
        activeUserId: state.activeUserId
    };
};

const Main = connect(mapStateToProps)(
    ({ user, activeUserId }) => {
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