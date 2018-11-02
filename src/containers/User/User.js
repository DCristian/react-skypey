import React, { Component } from 'react';

import './User.css';
import store from '../../store';
import { setActiveUserId } from '../../actions';

class User extends Component {
    handleUserClick = () => {
        store.dispatch(setActiveUserId(this.props.user.user_id));
    };

    render () {
        const { name, profile_pic, status } = this.props.user;

        return (
            <div className='User' onClick={this.handleUserClick}>
                <img src={profile_pic} alt={name} className='User__pic'/>
                <div className='User__details'>
                    <p className="User__details-name">{name}</p>
                    <p className="User__details-status">{status}</p>
                </div>
            </div>
        );
    }
}

export default User;