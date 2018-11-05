import React from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';

import './Sidebar.css';
import User from '../../components/User/User';
import { setActiveUserId } from '../../actions';

const mapStateToProps = (state) => {
    return {
        contacts: state.contacts
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        setActiveUserId: (userId) => {
            dispatch(setActiveUserId(userId));
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(
    ({ contacts, setActiveUserId }) => {
        return (
            <aside className='Sidebar'>
                {_.values(contacts).map(contact => {
                    return (
                        <User
                            key={contact.user_id}
                            user={contact}
                            onClick={setActiveUserId.bind(this, contact.user_id)}
                        />
                    );
                })}
            </aside>
        );
    }
);