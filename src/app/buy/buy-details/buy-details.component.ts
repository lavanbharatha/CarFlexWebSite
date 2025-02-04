import { NgClass, NgFor, NgStyle } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { CarService } from '../../car.service';


@Component({
  selector: 'app-buy-details',
  standalone: true,
  imports: [NgFor,NgClass,NgStyle],
  templateUrl: './buy-details.component.html',
  styleUrl: './buy-details.component.css'
})
export class BuyDetailsComponent {
  carId:any
  car!:any
  showCarousel:boolean=false
  carImages!:[]
  imageIndex!:number
  showImage:boolean=false
  constructor(
    private router:Router,
    private actRoute:ActivatedRoute,
    private carService:CarService
  ){}
  ngOnInit(): void {
    this.actRoute.params.subscribe(params => {
      this.carId = +Number(params['carId']); 
      this.car=this.carService.getById(this.carId)
       });
  }
 openImage(index:number){
    this.imageIndex=index
    this.showImage=!this.showImage
 }
 closeModal(){
  this.showImage=false
 }
 openCarousel(){
  this.showCarousel=!this.showCarousel
 }
//  closeCarousel(){
//   this.showCarousel=false
//  }
transformFeatures(carfeatures: any[]): string[] {
  return carfeatures.map(feature => {
    if (feature.transmissonType)
      {
         return `${feature.transmissonType}`;
      };
         return '';
  });
}
}
