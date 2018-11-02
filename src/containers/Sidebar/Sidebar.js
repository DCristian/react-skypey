import React, { Component } from 'react';
import _ from 'lodash';

import './Sidebar.css';
import User from '../../components/User/User';
import store from '../../store';
import { setActiveUserId } from '../../actions';

class Sidebar extends Component {
    handleUserClick = (userId) => {
        store.dispatch(setActiveUserId(userId));
    };

    render() {
        const { contacts } = store.getState();

        return (
            <aside className='Sidebar'>
                {_.values(contacts).map(contact => {
                    return (
                        <User
                            key={contact.user_id}
                            user={contact}
                            onClick={this.handleUserClick.bind(this, contact.user_id)}
                        />
                    );
                })}
            </aside>
        );
    }
}

export default Sidebar;