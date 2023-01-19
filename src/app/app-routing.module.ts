import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Componets/home/home.component';
import { MedicinesHomeComponent } from './Componets/medicines-home/medicines-home.component';
import { PageNotFoundComponent } from './Componets/page-not-found/page-not-found.component';

const routes: Routes = [

  {path : "Home" , component:HomeComponent},
  {path:"Medicine", component:MedicinesHomeComponent},
  {path:"", redirectTo:"/Home",pathMatch:'full'},
  {path: "**", component:PageNotFoundComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
