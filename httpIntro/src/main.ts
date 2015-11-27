//main entry point
import {bootstrap, provide} from 'angular2/angular2';
import {App} from './app';

bootstrap(App)
    .catch(err => console.error(err));