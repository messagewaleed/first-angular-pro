import { Component } from '@angular/core';

@Component({ //A decorator that tells Angular this is a component
  selector: 'root', //The selector for this component
  templateUrl: './app.component.html', //The html for this component
  styleUrls: ['./app.component.css']//The css for this component
})
export class AppComponent {
  title : string = "Dynamic E-Store";
  currentDate : string = new Date().toLocaleTimeString();
}