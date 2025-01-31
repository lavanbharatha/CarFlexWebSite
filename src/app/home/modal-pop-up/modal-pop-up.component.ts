import { AfterViewInit, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-modal-pop-up',
  standalone: true,
  imports: [],
  templateUrl: './modal-pop-up.component.html',
  styleUrl: './modal-pop-up.component.css'
})
export class ModalPopUpComponent implements AfterViewInit{
  bootstrap:any
 ngAfterViewInit(): void {

       const myModal = new this.bootstrap.Modal(document.getElementById('popUpModal'), {
        keyboard: false
      });
      myModal.show();
    }
 }
