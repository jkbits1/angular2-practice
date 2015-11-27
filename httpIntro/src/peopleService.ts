/**
 * Created by Jon on 27/11/15.
 */

//a simple service
import {Injectable} from 'angular2/angular2';
import {Http} from 'angular2/http';

@Injectable()
export class PeopleService {
    constructor(http:Http){
        //this.people = [
        //    {"id": 1, "name": "Brad"},
        //    {"id": 2, "name": "Jules"},
        //    {"id": 3, "name": "Jeff"}
        //];

        http.get('api/people.json')
            .forEach(response => console.log(response));

        this.people = http.get('api/people.json')
            .map(response => response.json());

    }
}
