import React, {Component} from 'react';
import _ from 'lodash';

import './App.css';
import Main from '../../components/Main/Main';
import Sidebar from '../../components/Sidebar/Sidebar';
import store from '../../store';

class App extends Component {
    render() {
        const { contacts, user, activeUserId } = store.getState();

        return (
            <div className="App">
                <Sidebar contacts={_.values(contacts)}/>
                <Main user={user} activeUserId={activeUserId}/>
            </div>
        );
    }
}

export default App;
