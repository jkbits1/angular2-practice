//main entry point
import {bootstrap, provide} from 'angular2/angular2';
import {App} from './app';
import {HTTP_BINDINGS} from 'angular2/http';

bootstrap(App, [HTTP_BINDINGS])
    .catch(err => console.error(err));