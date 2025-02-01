import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarHomeComponent } from './car-home/car-home.component';
import { HomeDetailsComponent } from './home-details/home-details.component';

const routes: Routes = [
  {
    path:'',
    component:CarHomeComponent
  },
  {
    path:'details/:carId',
    component:HomeDetailsComponent
  },
  {
    path:'**',
    component:CarHomeComponent
  }
 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
