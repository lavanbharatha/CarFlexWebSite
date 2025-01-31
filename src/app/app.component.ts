import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './home/navbar/navbar.component';
import { HomeModule } from './home/home.module';
import { FooterComponent } from './home/footer/footer.component';
import { ModalPopUpComponent } from './home/modal-pop-up/modal-pop-up.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [NavbarComponent,HomeModule,FooterComponent,RouterOutlet,ModalPopUpComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Flex';
}
