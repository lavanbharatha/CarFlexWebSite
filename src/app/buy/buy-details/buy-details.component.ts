import { NgClass, NgFor, NgStyle } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-buy-details',
  standalone: true,
  imports: [NgFor,NgClass,NgStyle],
  templateUrl: './buy-details.component.html',
  styleUrl: './buy-details.component.css'
})
export class BuyDetailsComponent {
  showDetals:boolean=false
  constructor(private router:Router,private aRoute:ActivatedRoute){}
  ngOnInit(): void {
    this.aRoute.queryParams.subscribe((params)=>{
      this.showDetals=params['todetails']==='true';
      if(!this.showDetals){
        this.router.navigate(['/home'])
      }
    }
  )
}
}
