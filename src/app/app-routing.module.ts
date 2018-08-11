import { NgModule } from '@angular/core';
//import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LoginappComponent } from './loginapp/loginapp.component';
import { DashboardComponent }   from './dashboard/dashboard.component';
import { InsertempComponent } from './insertemp/insertemp.component';
const routes : Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path:'login', component : LoginappComponent },
  { path:'register', component : InsertempComponent }
 
  
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
  
})
export class AppRoutingModule { }
