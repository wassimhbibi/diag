import { Component } from '@angular/core';

@Component({
  selector: 'app-diagnostic-plomb',
  templateUrl: './diagnostic-plomb.component.html',
  styleUrls: ['./diagnostic-plomb.component.scss']
})
export class DiagnosticplombComponent {
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
