import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from "@angular/common/http";
import { AppComponent } from './app.component';
import { LoginappComponent } from './loginapp/loginapp.component';
import { FormsModule } from '@angular/forms';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { MessagesComponent } from './messages/messages.component';
import { AppRoutingModule } from './/app-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { InsertempComponent } from './insertemp/insertemp.component'; // <-- NgModel lives here

@NgModule({
  declarations: [
    AppComponent,
    LoginappComponent,
    EmployeeDetailsComponent,
    MessagesComponent,
    DashboardComponent,
    InsertempComponent
   
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
