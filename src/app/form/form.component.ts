import { Component } from '@angular/core';
import { NgModel } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {

  num : number = 3;

  log(templateVar : NgModel){
    console.log(templateVar.errors);
    
  }
}
