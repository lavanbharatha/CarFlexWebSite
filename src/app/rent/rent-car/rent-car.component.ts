import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { Router } from '@angular/router';
import { CarService } from '../../car.service';
import { NgFor, NgIf } from '@angular/common';


@Component({
  selector: 'app-rent-car',
  standalone: true,
  imports: [RouterLink,RouterLinkActive,RouterOutlet,NgFor,NgIf],
  templateUrl: './rent-car.component.html',
  styleUrl: './rent-car.component.css'
})
export class RentCarComponent implements OnInit {
  rentCars: any=[]
  constructor(private router:Router,private carService: CarService){

  }
  
  ngOnInit(): void {
    this.rentCars=this.carService.getCarsByPurpose('Rent');
  }
  navigateToSignUp(){
    this.router.navigate(['login'],{queryParams:{toLogin:true}})
  }
  transformFeatures(carfeatures: any[]): string[] {
    return carfeatures.map(feature => {
      if (feature.transmissonType)
        {
           return `${feature.transmissonType}`
        };
           return '';
    });
  }
  
}
