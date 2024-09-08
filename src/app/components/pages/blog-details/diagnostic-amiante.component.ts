import { Component } from '@angular/core';

@Component({
  selector: 'app-diagnostic-amiante',
  templateUrl: './diagnostic-amiante.component.html',
  styleUrls: ['./diagnostic-amiante.component.scss']
})
export class DiagnosticamianteComponent {
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
