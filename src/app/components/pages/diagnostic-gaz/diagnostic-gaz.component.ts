import { Component } from '@angular/core';

@Component({
  selector: 'app-diagnostic-gaz',
  templateUrl: './diagnostic-gaz.component.html',
  styleUrls: ['./diagnostic-gaz.component.scss']
})
export class DiagnosticgazComponent {
  toggleReply(){
    document.querySelector('.reply-form')?.classList.toggle('d-none');
  }
  toggleReply1(){
    document.querySelector('.reply-forms')?.classList.toggle('d-none');
  }
  toggleReply2(){
    document.querySelector('.reply-formss')?.classList.toggle('d-none');
  }
}