/**
 * Created by Jon on 27/02/16.
 */

import {Component} from 'angular2/core'
import {Filters} from './filters';
import {AddTodo} from './addTodo';
import {TodoList} from './todoList';

@Component({
  selector: 'root',
  template:
    `<div>
      <filters></filters>
      <add-todo></add-todo>
      <todo-list></todo-list>
    </div>`,
  directives: [AddTodo, TodoList, Filters]
})
export class App { }