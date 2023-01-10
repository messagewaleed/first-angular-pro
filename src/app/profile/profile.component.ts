import { Component, Input } from '@angular/core';
import { Profile } from '../profile';
import { TruncatePipe } from '../truncate.pipe';

@Component({
  selector: 'profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {


  doj = new Date(2021, 9, 12);

  // @Input('name') name !: string;
  // @Input('designation') designation !: string;


  @Input("defaultValue") defaultValue : string = "Default Preference";

  flag : boolean = false;

  @Input('profile') profile !: Profile


  //  profile !: any;

  constructor(private truncatePipe : TruncatePipe){
    
  }

  ngOnInit(){ //Lifecyle hook
    this.profile = {
      name : this.profile.name,
      designation : this.profile.designation,
      // skills : this.profile.skills,
      skills: this.truncatePipe.transform(this.profile.skills, 5, "###"),
      location : this.profile.location,
      contact : this.profile.contact
    };
  }

  // handleButtonClick(){
  //   console.log("Button was just clicked..."); 
  // }

  toggleContactDetails(){
    this.flag = !this.flag;
  }

}
