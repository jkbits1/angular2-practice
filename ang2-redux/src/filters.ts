/**
 * Created by Jon on 27/02/16.
 */


import {Component, Inject} from 'angular2/core';
import {FilterLink} from './filterLink';

@Component({
  selector: 'filters',
  template: `
    <p>Show:
      <filter-link filter='SHOW ALL'>All</filter-link>
      <filter-link filter='SHOW ACTIVE'>Active</filter-link>
      <filter-link filter='SHOW COMPLETED'>Completed</filter-link>
    </p>
  `,
  directives: [FilterLink]
})
export class Filters implements OnDestroy {
  constructor(
    @Inject('AppStore') private appStore: AppStore
  ){
    this.unsubscribe = this.appStore.subscribe(()=> {
      let state = this.appStore.getState();
      this.todos = state.todos;
    });
  }

  private ngOnDestroy(){
    this.unsubscribe();
  }
}