
import * as uuid from "uuid";

class TodoService {
  todoList = [
    {
      id: uuid(),
      text: 'First task',
      complete: false
    },
    {
      id: uuid(),
      text: 'Second task',
      complete: false
    }
  ];

  getTodos() {
    return this.todoList;
  }

  addTodo(todo) {
    this.todoList.push(todo);
  }
}

export default new TodoService();
