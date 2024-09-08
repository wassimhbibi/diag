import { Component } from '@angular/core';

@Component({
  selector: 'app-diagnostic-termites',
  templateUrl: './diagnostic-termites.component.html',
  styleUrls: ['./diagnostic-termites.component.scss']
})
export class DiagnostictermitesComponent {
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
