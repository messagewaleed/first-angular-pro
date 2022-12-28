import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-rest',
  templateUrl: './rest-api-call.component.html',
  styleUrls: ['./rest-api-call.component.css']
})
export class RestApiCallComponent {

  responseData !: any;

  userName !: string;

  urlToHit : string = "https://api.github.com/users/";

  constructor(private httpClient : HttpClient){

  }

  ngOnInit(){
    // // let observableRef = this.httpClient.get("https://api.github.com/users");

    // // observableRef.subscribe((response)=> {
    // //   console.log(response);
    // //   this.responseData = response;
    // });
  }
    searchForUserOnGithub(){
      this.httpClient.get(this.urlToHit + this.userName)
      .subscribe((response)=>{
        this.responseData = response;
        console.log(response);
      });
    }

}
