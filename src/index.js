import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import AppContainer from "./containers/AppContainer";
import TodoActions from './data/TodoActions';


ReactDOM.render(<AppContainer />, document.getElementById('root'));
registerServiceWorker();


TodoActions.addTodo('My first task');
TodoActions.addTodo('Another task');
TodoActions.addTodo('Finish this tutorial');
