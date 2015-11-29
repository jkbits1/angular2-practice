/**
 * Created by Jon on 27/11/15.
 */

//our root app component
import {Component, FORM_DIRECTIVES, CORE_DIRECTIVES, Observable, EventEmitter} from 'angular2/angular2';
import {Http, URLSearchParams} from 'angular2/http';

@Component({
    selector: 'my-app'
    template: `
<div>
    Wikipedia Search
<input #search type="text" (keyup)="keyup($event)">
<ul>
    <li *ng-for="#result of results"><a href="{{result.url}}">{{result.title}}</a></li>
</ul>
<pre>{{ search.value | json }}</pre>
</div>
`,
directives: [CORE_DIRECTIVES, FORM_DIRECTIVES]
})
export class App {
    searches: EventEmitter = new EventEmitter();

    constructor(http:Http) {
        this.searches._subject
            .debounceTime(500)
            .distinctUntilChanged()
            .switchMap(term => {
                //working plunker http://plnkr.co/edit/P8dELQZ6HlglomXSvOcj?p=preview
                var params = new URLSearchParams();
                params.append('action', 'opensearch');
                params.append('search', encodeURI(term));
                params.append('format', 'json');

                //return jsonp.request("http://en.wikipedia.org/w/api.php?callback=JSON_CALLBACK", {search: params})
                return http.get("http://en.wikipedia.org/w/api.php?callback=JSON_CALLBACK", {search: params})
                    .map(res => res.json());
            })
            .subscribe((term) => {
                console.log('Searching term: ' + term);
            },
                error => console.error('Error loading Wikipedia article.'),
            () => console.log('Completed!')
        );
    }

    keyup($event){
        this.searches.next($event.currentTarget.value);
    }
}