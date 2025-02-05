import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from 'express';
import { CarService } from '../../car.service';
import { CommonModule, NgClass, NgFor, NgStyle } from '@angular/common';

@Component({
  selector: 'app-rent-details',
  standalone: true,
  imports: [NgStyle,NgClass,NgFor,CommonModule],
  templateUrl: './rent-details.component.html',
  styleUrl: './rent-details.component.css'
})
export class RentDetailsComponent implements OnInit{
  carId:any
  car!:any
  showCarousel:boolean=false
  carImages!:[]
  imageIndex!:number
  showImage:boolean=false
  carFeatures:any
  constructor(
    private router:Router,
    private actRoute:ActivatedRoute,
    private carService:CarService
  ){}
  ngOnInit(): void {
    this.actRoute.params.subscribe(params => {
      this.carId = +Number(params['carId']); 
      this.car=this.carService.getById(this.carId)
      this.carFeatures=this.carService.getCarFeatures(this.carId)
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
