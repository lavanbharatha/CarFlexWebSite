import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { CarService } from '../../car.service';
import { NgClass, NgFor, NgIf, NgStyle } from '@angular/common';

import { MatDialog } from '@angular/material/dialog';
import * as $ from 'jquery';

@Component({
  selector: 'app-home-details',
  standalone: true,
  imports: [NgFor,NgIf,NgClass,NgStyle],
  templateUrl: './home-details.component.html',
  styleUrl: './home-details.component.css'
})
export class HomeDetailsComponent implements OnInit{
  carId:any
  car!:any
  carFeatures:any[]=[]

  showCarousel:boolean=false
  carImages!:[]
  imageIndex!:number
  showImage:boolean=false

  constructor(
    private router:Router,
    private actRoute:ActivatedRoute,
    private carService:CarService,
    private dialog:MatDialog
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