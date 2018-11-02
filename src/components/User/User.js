import React from 'react';

import './User.css';

const User = (props) => {
    const { name, profile_pic, status } = props.user;

    return (
        <div className='User' onClick={props.onClick}>
            <img src={profile_pic} alt={name} className='User__pic'/>
            <div className='User__details'>
                <p className="User__details-name">{name}</p>
                <p className="User__details-status">{status}</p>
            </div>
        </div>
    );
};

export default User;