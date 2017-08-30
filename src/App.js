import React, { Component } from 'react';
import './App.css';
import ClickCounter from "./components/ClickCounter";
import TodoList from "./components/TodoList";
import TodoService from "./services/TodoService";

class App extends Component {


  constructor(props) {
    super(props);

    this.state = {
      todos: TodoService.getTodos()
    }
  }

  render() {
    return (
        <TodoList todos={this.state.todos} />
    );
  }
}

export default App;
