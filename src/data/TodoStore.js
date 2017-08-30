import {ReduceStore} from "flux/utils";
import TodoDispatcher from "./TodoDispatcher";
import Immutable from 'immutable';
import TodoActionTypes from "./TodoActionTypes";
import Todo from "./Todo";
import Counter from "./Counter";

class TodoStore extends ReduceStore {

  constructor() {
    super(TodoDispatcher)
  }

  getInitialState() {
    return Immutable.OrderedMap();
  }

  reduce(state, action) {
    switch (action.type) {
      case TodoActionTypes.ADD_TODO:

        if (!action.text) {
          return state;
        }

        const id = Counter.increment();
        return state.set(id, new Todo({
          id,
          text: action.text,
          complete: false
        }));

        return state;

      case TodoActionTypes.DELETE_TODO:
        return state.delete(action.id);
      case TodoActionTypes.TOGGLE_TODO:
        return state.update(
          action.id,
          todo => todo.set('complete', !todo.complete)
        );
      default:
        return state;
    }
  }
}

export default new TodoStore();
