import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'app-root',
  template: 
  `
    <h1> {{ title }} </h1>
    <ul>
      <li *ngFor="let course of courses">
        {{ course }}
      </li>
    </ul>
  `,
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  title = "List of courses";
  courses: "";
}
