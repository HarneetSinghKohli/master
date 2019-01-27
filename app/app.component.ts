import {Component, Directive} from 'angular2/core';
import { CoursesComponent } from './courses.component';
import { AuthorComponent } from './authors.component';

@Component({
    selector: 'my-app',
    template: `
    <h1>My First Angular 2 AP</h1>
    <courses></courses>
    <author></author>
   `,
    directives:[CoursesComponent,AuthorComponent]
})
export class AppComponent { }