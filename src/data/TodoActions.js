
import TodoDispatcher from "./TodoDispatcher";
import TodoActionTypes from "./TodoActionTypes";

const Actions = {
  addTodo(text) {
    TodoDispatcher.dispatch({
      type: TodoActionTypes.ADD_TODO,
      text
    })
  }
};

export default Actions;
