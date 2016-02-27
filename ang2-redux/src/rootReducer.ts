/**
 * Created by Jon on 27/02/16.
 */

import * as TodoActions from './todoActions';

const initialState = {
  todos: [],
  currentFilter: 'SHOW_ALL'
};

export function rootReducer(state = initialState, action){
  switch (action.type) {
    case TodoActions.ADD_TODO:
      return {
        todos: state.todos.concat({
          id: action.id,
          text: action.text,
          completed: action.completed
        }),
        currentFilter: state.currentFilter
      };
    case TodoActions.TOGGLE_TODO:
      return {
        todos: toggleTodo(state.todos, action),
        currentFilter: state.currentFilter
      };
    case TodoActions.SET_CURRENT_FILTER:
      return {
        todos: state.todos.map(todo => todo),
        currentFilter: action.filter
      };
    default:
      return state;
  }
};

function toggleTodo(todos, action){
  return todos.map(todo => {
    if (todo.id !== action.id)
      return todo;

    return {
      id: todo.id,
      text: todo.text,
      completed: !todo.completed
    };
  });
}
