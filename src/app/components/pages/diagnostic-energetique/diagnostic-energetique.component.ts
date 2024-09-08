import { Component } from '@angular/core';

@Component({
  selector: 'app-diagnostic-energetique',
  templateUrl: './diagnostic-energetique.component.html',
  styleUrls: ['./diagnostic-energetique.component.scss']
})
export class DiagnosticenergetiqueComponent {
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
