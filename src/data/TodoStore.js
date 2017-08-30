import {ReduceStore} from "flux/utils";
import TodoDispatcher from "./TodoDispatcher";
import Immutable from 'immutable';
import TodoActionTypes from "./TodoActionTypes";

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
        return state;
      default:
        return state;
    }
  }
}

export default new TodoStore();
