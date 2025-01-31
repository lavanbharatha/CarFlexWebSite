import { Injectable } from '@angular/core';
import { LoginComponent } from './user/login/login.component';
import { MatDialog } from '@angular/material/dialog';
import { Subject } from 'rxjs';



@Injectable({
  providedIn: 'root'
 
})
export class LoginService {

  private openModalSubject = new Subject<void>();

  // Observable to listen for modal open requests
  openModal$ = this.openModalSubject.asObservable();

  // Method to emit the modal open event
  openModal() {
    this.openModalSubject.next();
  }
}
