import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PseudonameComponent } from './pseudoname/pseudoname.component';
import { SendComponent } from './send/send.component';

const routes: Routes = [
  { path:"",component:PseudonameComponent},
  {path:"messages",component:SendComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
