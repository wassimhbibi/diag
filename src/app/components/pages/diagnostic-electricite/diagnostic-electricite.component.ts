import { Component } from '@angular/core';

@Component({
  selector: 'app-diagnostic-electricite',
  templateUrl: './diagnostic-electricite.component.html',
  styleUrls: ['./diagnostic-electricite.component.scss']
})
export class DiagnosticelectriciteComponent {
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
