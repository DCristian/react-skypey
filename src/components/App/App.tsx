import * as React from 'react';

import './App.css';
import Main from '../../containers/Main/Main';
import Sidebar from '../../containers/Sidebar/Sidebar';

const App: React.SFC<{}> = () => {
    return (
        <div className="App">
            <Sidebar/>
            <Main/>
        </div>
    );
};

export default App;
