import { Component } from '@angular/core';
import { Profile } from './profile';

@Component({ //A decorator that tells Angular this is a component
  selector: 'root', //The selector for this component
  templateUrl: './app.component.html', //The html for this component
  styleUrls: ['./app.component.css']//The css for this component
})
export class AppComponent {
  title : string = "Dynamic E-Store";
  currentDate : string = new Date().toLocaleTimeString();

  profile !: Profile;

  constructor(){
    this.profile = new Profile();
    this.profile.name = "Omar";
    this.profile.designation = "UI Developer";
    this.profile.skills = "HTML, CSS, JS, TS, JQuery, AJAX";
    this.profile.location = "Kuwait";
    this.profile.contact = [
      '236-999-999',
      'omar@gmail.com'
    ];
  }

  


  
}