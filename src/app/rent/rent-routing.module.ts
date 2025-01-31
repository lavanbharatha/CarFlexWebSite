import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RentCarComponent } from './rent-car/rent-car.component';
import { RentDetailsComponent } from './rent-details/rent-details.component';

const routes: Routes = [
  {
    path:'',
    component:RentCarComponent
  },
  {
    path:'details',
    component:RentDetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RentRoutingModule { }
