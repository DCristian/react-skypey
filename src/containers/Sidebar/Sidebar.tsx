import * as React from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import * as _ from 'lodash';

import './Sidebar.css';
import User from '../../components/User/User';
import { setActiveUserId } from '../../actions';
import { RootState } from '../../store';
import { Contacts } from '../../static-data';

interface StateProps {
    contacts: Contacts
}

interface DispatchProps {
    setActiveUserId: (userId: string) => void
}

type Props = StateProps & DispatchProps;

const mapStateToProps = (state: RootState): StateProps => {
    return {
        contacts: state.contacts
    };
};



const mapDispatchToProps = (dispatch: Dispatch): DispatchProps => {
    return {
        setActiveUserId: (userId: string): void => {
            dispatch(setActiveUserId(userId));
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(
    ({ contacts, setActiveUserId }: Props): JSX.Element => {
        return (
            <aside className='Sidebar'>
                {_.values(contacts).map(contact => {
                    return (
                        <User
                            key={contact.user_id}
                            user={contact}
                            onClick={setActiveUserId.bind({}, contact.user_id)}
                        />
                    );
                })}
            </aside>
        );
    }
);