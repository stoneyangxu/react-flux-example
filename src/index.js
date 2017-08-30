import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import AppContainer from "./containers/AppContainer";

ReactDOM.render(<AppContainer />, document.getElementById('root'));
registerServiceWorker();
