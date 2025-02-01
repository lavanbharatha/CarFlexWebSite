import { Component, OnInit } from '@angular/core';
import { CarService } from '../../car.service';
import { NgFor, NgIf } from '@angular/common';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-car-home',
  standalone: true,
  imports: [NgFor,NgIf,RouterLink,RouterLinkActive],
  templateUrl: './car-home.component.html',
  styleUrl: './car-home.component.css'
})
export class CarHomeComponent implements OnInit{
eachCar:any
features:any
bootstrap:any

  constructor(private carService: CarService,private router:Router,private matDialog:MatDialog) {}

  ngOnInit(): void {
    this.eachCar = this.carService.getCars();

  }
  transformFeatures(carfeatures: any[]): string[] {
    return carfeatures.map(feature => {
      if (feature.transmissonType)
        {
           return `${feature.transmissonType}`
        };
      
      if (feature.airBags)
        {
            return `Air Bags ${feature.airBags}`
        };
           return '';
    });
  }
  navigateToDetails(id:number){
this.router.navigate(['/home/details',id])
  }

}
