import { Component } from '@angular/core';

@Component({
  selector: 'profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {

  flag : boolean = false;


  profile: any;

  constructor(){
    this.profile = {
      name : 'Haneen',
      designation : 'Software Engineer',
      skills : "HTML, CSS, Bootstrap, JavaScript",
      location : "Kuwait",
      contact : [
        '9999-989-632',
        '8888-700-989',
        'haneen@kfh.com.kw',
        'haneen@gmail.com'
      ]
    };
  }

  // handleButtonClick(){
  //   console.log("Button was just clicked..."); 
  // }

  toggleContactDetails(){
    this.flag = !this.flag;
  }

}
