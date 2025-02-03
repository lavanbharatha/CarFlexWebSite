import { NgClass, NgStyle } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { LoginService } from '../../login.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [NgClass,NgStyle,RouterLink,RouterLinkActive,RouterOutlet],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  bootstrap:any
  modalElement:any
  

  isNavbarCollapsed:boolean=false
  constructor(private router:Router,private modalService:LoginService){}
  

  

}
