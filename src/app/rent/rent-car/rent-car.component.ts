import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterModule, RouterOutlet } from '@angular/router';
import { Router } from '@angular/router';
import { CarService } from '../../car.service';
import { CommonModule, NgClass, NgFor, NgIf, NgStyle } from '@angular/common';


@Component({
  selector: 'app-rent-car',
  standalone: true,
  imports: [RouterLink,RouterLinkActive,NgFor,RouterModule,NgClass,NgStyle,CommonModule],
  templateUrl: './rent-car.component.html',
  styleUrl: './rent-car.component.css'
})
export class RentCarComponent implements OnInit {
  rentCar:any=[]
  constructor(
    private carService: CarService,
    private router:Router,
    
  ) {}

  ngOnInit(): void {
    this.rentCar = this.carService.getCarsByPurpose('Rent');

  }
 
}
