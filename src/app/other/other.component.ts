import { Component } from '@angular/core';

@Component({
  selector: 'other',
  templateUrl: './other.component.html',
  styleUrls: ['./other.component.css']
})
export class OtherComponent {
  currentTime !: string;

  constructor(){
    setInterval(()=>{
      let curDate = new Date();
      this.currentTime = curDate.toLocaleTimeString();
    }, 1000);
  }



}
