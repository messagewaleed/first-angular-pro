import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { OtherComponent } from './other/other.component';
import { ProfileComponent } from './profile/profile.component';
import { TestService } from './test.service';
import { RestApiCallComponent } from './rest-api-call/rest-api-call.component';
import {HttpClientModule} from '@angular/common/http';
import { FormComponent } from './form/form.component';

@NgModule({
  declarations: [
    AppComponent,
    OtherComponent,
    ProfileComponent,
    RestApiCallComponent,
    FormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    TestService
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
