import { Component, OnInit } from '@angular/core';
import { isReactive } from '@angular/core/primitives/signals';
import { ActivatedRoute, Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { FormGroup, ReactiveFormsModule, Validators } from '@angular/forms'
import { FormBuilder } from '@angular/forms'
import { NgClass, NgIf, NgStyle } from '@angular/common';
import { LoginService } from '../../login.service';


@Component({
  selector: 'app-login',
  standalone: true,
  imports:[NgIf,NgClass,NgStyle,RouterLink,RouterLinkActive,ReactiveFormsModule,RouterOutlet],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit{
  fg!:FormGroup;
  showLoginForm:boolean=false
  showSignUpForm:boolean=false
  constructor(
    private fb:FormBuilder,
    private router:Router,
    private actRoute:ActivatedRoute,
    private modalService: LoginService ){
    
  }
ngOnInit(): void {
      this.fg=this.fb.group(
        {
          gmail:['',[Validators.email,Validators.required,Validators.minLength(8)]],
          password:['',[Validators.required,Validators.minLength(8)]]
        }
      )
      this.actRoute.queryParams.subscribe((params)=>{
      this.showLoginForm=params['toLogin']=='true';
      if(!this.showLoginForm){
        this.router.navigate(['/buy'])
      }
})
}


navigateToHome(){
  this.showLoginForm=false
}

}

