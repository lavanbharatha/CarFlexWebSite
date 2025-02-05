import { NgClass, NgStyle } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterLink, RouterLinkActive, RouterModule, RouterOutlet } from '@angular/router';
import { LoginService } from '../../login.service';
import { RentCarComponent } from '../../rent/rent-car/rent-car.component';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [NgClass,NgStyle,RouterLink,RouterLinkActive,RouterOutlet,RouterModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  bootstrap:any
  modalElement:any
  isNavbarCollapsed:boolean=false
  constructor(private router:Router,private modalService:LoginService){}
 
  }
