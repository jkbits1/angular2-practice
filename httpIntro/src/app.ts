/**
 * Created by jk on 27/11/15.
 */

//our root app component
import {Component, View} from 'angular2/angular2'
import {PeopleService} from './peopleService'

@Component({
  selector: 'my-app',
  providers: [PeopleService]
  template: `
<div>
<h2>Hello Angular2!</h2>
<ul>
<li *ng-for="#person of people">
{{person.name}}
</li>
</ul>
</div>
`
})
export class App {
  constructor(peopleService:PeopleService) {
    this.people = peopleService.people;
  }
}
