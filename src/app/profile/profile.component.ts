import { Component } from '@angular/core';

@Component({
  selector: 'profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
  profile: any;

  constructor(){
    this.profile = {
      name : 'Haneen',
      designation : 'Software Engineer',
      skills : "HTML, CSS, Bootstrap, JavaScript",
      location : "Kuwait",
      contact : [
        '9999-989-632',
        'haneen@kfh.com.kw'
      ]
    };
  }

}
