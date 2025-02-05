import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RentCarComponent } from './rent-car/rent-car.component';
import { RentDetailsComponent } from './rent-details/rent-details.component';
import { CommonModule } from '@angular/common';



const routes: Routes = [
  {
    path:'',
    component:RentCarComponent
  },
  {
    path:'rentDetails/:carId',
    component:RentDetailsComponent
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RentRoutingModule { }
