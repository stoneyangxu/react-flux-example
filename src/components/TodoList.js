import React from 'react';
import {Row} from "antd";
import TodoItem from "./TodoItem";
import NewTodo from "./NewTodo";
import TodoService from "../services/TodoService";

class TodoList extends React.Component {

  constructor(props) {
    super(props);

    this.status = {
      todos: props.todos
    };

    this.onListUpdated = this.onListUpdated.bind(this);
  }

  onListUpdated() {
    this.setState({
      todos: TodoService.getTodos()
    });
  }

  render() {
    return (
      <div>
        {this.status.todos.map((todo, i) => <TodoItem key={i} todo={todo}/>)}

        <br/>
        <NewTodo onAdded={this.onListUpdated}/>
      </div>
    )
  }
}

export default TodoList;
