import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from 'express';
import { CarService } from '../../car.service';
import { NgFor, NgIf } from '@angular/common';
import { ModalPopUpComponent } from '../modal-pop-up/modal-pop-up.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-home-details',
  standalone: true,
  imports: [NgFor,NgIf,ModalPopUpComponent],
  templateUrl: './home-details.component.html',
  styleUrl: './home-details.component.css'
})
export class HomeDetailsComponent implements OnInit{
  CarId!:number
  car:any
  constructor(private router:Router,private actRoute:ActivatedRoute,private carService:CarService,private dialog:MatDialog){}
  ngOnInit(): void {
    this.actRoute.paramMap.subscribe(params => {
      this.CarId = Number(params.get('carId'))!;
      this.car = this.carService.getById(this.CarId);
    });
    setTimeout(() => {
      this.dialog.open(ModalPopUpComponent, {
        width: '400px',
      });
    }, 5000); // Delay of 5 seconds
  }
 }

