/**
 * Created by Jon on 27/02/16.
 */

import {Component, Inject} from 'angular2/core';
import {Todo} from './todo';

@Component({
  selector: 'todo-list',
  template: `
    <ul>
      <todo
        *ngFor="#todo of todos"
        [completed]="todo.completed"
        [id]="todo.id"
      >{{todo.text}}</todo>
    </ul>
  `,
  directives: [Todo]
})
export class TodoList implements OnDestroy {
  constructor(
    @Inject('AppStore') private appStore: AppStore
  ){
    this.unsubscribe = this.appStore.subscribe(()=> {
      let state = this.appStore.getState();
      this.todos = state.todos;
    });
  }

  private ngOnDestroy(){
    //remove listener
    this.unsubscribe();
  }
}


