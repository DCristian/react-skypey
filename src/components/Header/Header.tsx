import * as React from 'react';

import './Header.css';
import { UserInterface } from '../../static-data';

export interface HeaderProps {
    user: UserInterface
}

const Header: React.SFC<HeaderProps> = ({ user }): JSX.Element => {
    const { name, status } = user;

    return (
        <header className="Header">
            <h1 className="Header__name">{name}</h1>
            <p className="Header__status">{status}</p>
        </header>
    );
};

export default Header;