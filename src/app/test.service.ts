import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TestService {

  constructor() { }


  displayMessageOnConsole(message : string){
    console.log(`Data from component : ${message}`);
  }



}
