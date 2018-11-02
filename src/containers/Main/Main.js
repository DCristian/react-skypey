import React from 'react';

import './Main.css';
import Empty from '../../components/Empty/Empty';
import ChatWindow from '../../containers/ChatWindow/ChatWindow';
import store from '../../store';

const Main = () => {
    const { user, activeUserId } = store.getState();

    let mainContent = <Empty user={user} activeUserId={activeUserId}/>;

    if (activeUserId) {
        mainContent = <ChatWindow activeUserId={activeUserId}/>;
    }

    return (
        <main className='Main'>{mainContent}</main>
    );
};

export default Main;