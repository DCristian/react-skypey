import React, {Component} from 'react';

import './App.css';
import Main from '../../containers/Main/Main';
import Sidebar from '../../containers/Sidebar/Sidebar';

class App extends Component {
    render() {
        return (
            <div className="App">
                <Sidebar/>
                <Main/>
            </div>
        );
    }
}

export default App;
