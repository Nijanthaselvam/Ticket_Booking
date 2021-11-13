import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BusComponent } from './bus/bus.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: "",
    component:HomeComponent
  },
  {
    path: "bus",
    component:BusComponent
  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
