import { Component } from "angular2/core";
import { AuthorService} from "./author.service"

@Component({
    selector:"author",
    template:`
    <h4>Author</h4>
    {{ title }}
    <ul>
        <li *ngFor="#author of authors">
        {{ author }}
        </li>
    </ul>
    <br>
    <input type="text" [(ngModel)]="note" (keyup.enter)="eventCall($event)"> 
    {{ note }}
    `,
    providers: [AuthorService]
    

})
export class AuthorComponent{
    title="The title of author page";
    authors;
    note;
    constructor(authorService:AuthorService){
        this.authors=authorService.getAuthors();
        this.note;
    }

    eventCall(e){
        alert("You entered " +e.target.value );
    }

}