/**
 * Created by Jon on 27/02/16.
 */

import {Component, Inject} from 'angular2/core';
import {TodoActions} from './todoActions';

@Component({
  selector: 'filter-link',
  inputs: ['filter'],
  template: `
    <a href="#" (click)="applyFilter(filter);"
      [ngClass]="{'active': active, 'inactive': !active}">
      <ng-content></ng-content>
    </a>
  `
})
export class FilterLink implements OnDestroy {
  constructor(
    @Inject('AppStore') private appStore: AppStore
  private todoActions: TodoActions) {
  this.unsubscribe = this.appStore.subscribe(()=> {
  this.updateActive();

});
}

private ngOnInit() {
  this.updateActive();
}

private updateActive () {
  this.active = (this.filter == this.appStore.getState().currentFilter);
}

private ngOnDestroy(){
  this.unsubscribe();
}

private applyFilter(filter) {
  this.appStore.dispatch(this.todoActions.setCurrentFilter(filter));
}
}