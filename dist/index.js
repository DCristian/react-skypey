"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const ReactDOM = require("react-dom");
const react_redux_1 = require("react-redux");
require("./index.css");
const App_1 = require("./components/App/App");
const index_1 = require("./store/index");
const fancyLog = () => {
    console.log("%c Rendered with 👉 👉👇", "background: purple; color: #FFF");
    console.log(index_1.default.getState());
};
const render = () => {
    fancyLog();
    return ReactDOM.render(React.createElement(react_redux_1.Provider, { store: index_1.default },
        React.createElement(App_1.default, null)), document.getElementById('root'));
};
render();
//# sourceMappingURL=index.js.map