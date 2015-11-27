/**
 * Created by Jon on 27/11/15.
 */

//a simple service
import {Injectable} from 'angular2/angular2';

@Injectable()
export class PeopleService {
    constructor(){
        this.people = [
            {"id": 1, "name": "Brad"},
            {"id": 2, "name": "Jules"},
            {"id": 3, "name": "Jeff"}
        ];
    }
}
