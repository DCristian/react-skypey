import React from 'react';

import './Main.css';
import Empty from '../Empty/Empty';
import ChatWindow from '../../containers/ChatWindow/ChatWindow';

const Main = ({ user, activeUserId }) => {
    let mainContent = <Empty user={user} activeUserId={activeUserId}/>;

    if (activeUserId) {
        mainContent = <ChatWindow activeUserId={activeUserId}/>;
    }

    return (
        <main className='Main'>{mainContent}</main>
    );
};

export default Main;