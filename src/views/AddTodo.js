import React from 'react';
import TodoActions from "../data/TodoActions";

class AddTodo extends React.Component {


  constructor(props) {
    super(props);

    this.state = {
      text: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.addTodo = this.addTodo.bind(this);
  }

  handleChange(e) {
    e.preventDefault();
    this.setState({
      text: e.target.value
    });
  }

  addTodo() {
    console.log(this.state.text);
    this.props.onAddTodo(this.state.text);
  }

  render() {
    return (
      <div>
        <input type="text" onChange={this.handleChange} />
        <button className="btn primary-btn" onClick={this.addTodo}>Add</button>
      </div>
    )
  }
}

export default AddTodo;
