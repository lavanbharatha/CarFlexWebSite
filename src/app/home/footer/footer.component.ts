import { NgFor } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [NgFor],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  carLogos:any=[
    'CarLogos/alfa.jpg',
    'CarLogos/bmw.jpg',
    'CarLogos/ford.jpg',
    'CarLogos/honda(1).jpg',
    'CarLogos/hyundai.jpg',
    'CarLogos/jaguar-_1_.jpg',
    'CarLogos/kia.jpg',
    'CarLogos/land.jpg',
    'CarLogos/mercedes.jpg',
    'CarLogos/jaguar.jpg',
    'CarLogos/honda.jpg',
   ]
  
}
