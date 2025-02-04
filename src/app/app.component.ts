import { Component } from '@angular/core';
import { NavigationEnd, RouterOutlet } from '@angular/router';
import { NavbarComponent } from './home/navbar/navbar.component';
import { HomeModule } from './home/home.module';
import { FooterComponent } from './home/footer/footer.component';
import { ModalPopUpComponent } from './home/modal-pop-up/modal-pop-up.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [NavbarComponent,HomeModule,FooterComponent,RouterOutlet,ModalPopUpComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Flex';
  constructor(private router: Router) {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        window.scrollTo(0, 0);
      }
    });
  }
}
