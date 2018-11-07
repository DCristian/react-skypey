import * as React from 'react';

import './User.css';
import { UserInterface } from '../../static-data';

export interface UserProps {
    user: UserInterface,
    onClick: () => any
}

const User: React.SFC<UserProps> = (props: UserProps): JSX.Element => {
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