import {Component} from 'angular2/core'
import {CourseService} from './course.service'
@Component({
    selector:'courses',
    template:`
    <h2>Courses</h2>
        {{ title }}
        <ul>
            <li *ngFor="#Course of courses">
            {{ Course }}
            </li>
        </ul>
    <button (click)="runClick()">Click</button>
    `,
    providers: [CourseService]
})
export class CoursesComponent{
    title="The title of course Page";
    courses;

  constructor(courseService: CourseService){
        this.courses=courseService.getCourses();
    } 
    
    runClick():any{
        alert('You Just Clicked');
    }
}
