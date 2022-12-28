import { Component, Input } from '@angular/core';
import { Profile } from '../profile';

@Component({
  selector: 'profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {


  // @Input('name') name !: string;
  // @Input('designation') designation !: string;


  @Input("defaultValue") defaultValue : string = "Default Preference";

  flag : boolean = false;

  @Input('profile') profile !: Profile


  // profile : any;

  constructor(){
    
  }

  ngOnInit(){ //Lifecyle hook
    // this.profile = {
    //   name : this.name,
    //   designation : this.designation,
    //   skills : "HTML, CSS, Bootstrap, JavaScript",
    //   location : "Kuwait",
    //   contact : [
    //     '9999-989-632',
    //     '8888-700-989',
    //     'haneen@kfh.com.kw',
    //     'haneen@gmail.com'
    //   ]
    // };
  }

  // handleButtonClick(){
  //   console.log("Button was just clicked..."); 
  // }

  toggleContactDetails(){
    this.flag = !this.flag;
  }

}
